import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";
import fs from "fs";
import { VertexAI } from "@google-cloud/vertexai";

export async function POST() {
  return NextResponse.json({ message: "method allow" });
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).send("Only POST Req are allowed");
  }
  const fileContent = req.body;
  // Convert the file content to base64
  const base64Data = Buffer.from(fileContent).toString("base64");

  const vertex_ai = new VertexAI({
    project: "bold-flash-419819",
    location: "us-central1",
  });
  const model = "gemini-1.0-pro-vision-001";

  // Instantiate the models
  const generativeModel = vertex_ai.preview.getGenerativeModel({
    model: model,
    generationConfig: {
      maxOutputTokens: 2048,
      temperature: 0.4,
      topP: 0.4,
      topK: 32,
    },
    // safetySettings: [
    //   {
    //     category: "HARM_CATEGORY_HATE_SPEECH",
    //     threshold: "BLOCK_MEDIUM_AND_ABOVE",
    //   },
    //   {
    //     category: "HARM_CATEGORY_DANGEROUS_CONTENT",
    //     threshold: "BLOCK_MEDIUM_AND_ABOVE",
    //   },
    //   {
    //     category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
    //     threshold: "BLOCK_MEDIUM_AND_ABOVE",
    //   },
    //   {
    //     category: "HARM_CATEGORY_HARASSMENT",
    //     threshold: "BLOCK_MEDIUM_AND_ABOVE",
    //   },
    // ],
  });

  const document = {
    inlineData: {
      mimeType: "application/pdf",
      data: base64Data,
    },
  };

  async function generateContent() {
    const req = {
      contents: [
        {
          role: "user",
          parts: [
            document,
            {
              text: `Scan this document and provide me the Loan Borrower Name, EMI, Loan Tenure`,
            },
          ],
        },
      ],
    };

    const streamingResp = await generativeModel.generateContentStream(req);

    for await (const item of streamingResp.stream) {
      process.stdout.write("stream chunk: " + JSON.stringify(item) + "\n");
    }

    process.stdout.write(
      "aggregated response: " + JSON.stringify(await streamingResp.response)
    );
  }

  generateContent();

  try {
  } catch (e: any) {
    console.log(e);
    return res.status(500).send(e.message);
  }
}
