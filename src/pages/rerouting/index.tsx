import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index() {
  const router = useRouter();
  const withoutPrepayment = {
    emi: 0,
    loanAmount: 7500000,
    roi: 9,
    tenure: 15,
    totalInterestPaid: 0,
    totalPayment: 0,
  };
  const userDetails = {
    fullName: "",
    email: "",
    phoneNumber: "",
    ageGroup: "",
    bankProvider: "",
    employmentStatus: "",
    loanType: "",
  };

  const joinWaitListFunc = async (prepaymentAmount: any) => {
    // setWithPrepayment(withPrep);
    // setPrepaymentAmount(prepaymentAmount);
    const sheetsData = {
      prepaymentAmount,
      ...withoutPrepayment,
      ...userDetails,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetsData),
    });
    const content = await response.json();

    router.push("/calculator");
    // console.log(content, "sheets");
  };
  useEffect(() => {
    joinWaitListFunc(0);
  });
  return <p>Loading...</p>;
}
