import { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";
import { NextResponse } from "next/server";
type SheetForm = {
  uuid: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  ageGroup: string;
  bankProvider: string;
  employmentStatus: string;
  loanType: string;
};
export async function POST() {
  return NextResponse.json({ message: "method allow" });
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // console.log("before req check", process.env.GOOGLE_CLIENT_EMAIL);
  if (req.method !== "POST") {
    return res.status(405).send("Only POST Req are allowed");
  }
  const body = req.body as SheetForm;
  // console.log("before try", [body.name, body.email, body.phone, body.message]);

  try {
    // console.log("inside try");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL_PERSONAL,
        private_key: process.env.GOOGLE_PRIVATE_KEY_PERSONAL?.replace(
          /\\n/g,
          "\n"
        ),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    // console.log("after auth", auth);

    const sheets = google.sheets({
      auth,
      version: "v4",
    });

    // console.log("after sheets", sheets);
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID_PERSONAL,
      range: "A1:I1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            body.uuid,
            body.fullName,
            body.email,
            body.phoneNumber,
            body.ageGroup,
            body.bankProvider,
            body.employmentStatus,
            body.loanType,
          ],
        ],
      },
    });

    return res.status(200).json(response.data);
  } catch (e: any) {
    console.log(e);
    return res.status(500).send(e.message);
  }
}
