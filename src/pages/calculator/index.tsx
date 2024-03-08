"use client";

import LoanSection from "@/components/LoanSection";

import ProblemSection from "@/components/ProblemSection";
import SavingsSection from "@/components/SavingsSection";
import SuccessSection from "@/components/SuccessSection";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function Home() {
  const [formSectionId, setFormSectionId] = useState(0);
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);

  const [problemDetails, setProblemDetails] = useState<any>();
  const [uuid, setUuid] = useState("");

  const problemDetailsHandler = (data: any) => {
    const response = fetch("/api/prepayment", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ uuid, ...data }),
    });
    setProblemDetails(data);
  };

  // Setting Without Prepayment Loan Details
  const [withoutPrepayment, setWithoutPrepayment] = useState({
    tenure: 15,
    totalInterestPaid: 0,
    totalPayment: 0,
    emi: 0,
    loanAmount: 7500000,
    roi: 9,
  });
  const [withPrepayment, setWithPrepayment] = useState({
    tenure: 0,
    totalInterestPaid: 0,
    totalPayment: 0,
  });

  const updateWithoutPrepayment = (data: {
    tenure: number;
    totalInterestPaid: number;
    totalPayment: number;
    emi: number;
    roi: number;
    loanAmount: number;
  }) => {
    setWithoutPrepayment(data);
  };

  // Routing in sections
  const changeSection = (id: number) => {
    setFormSectionId(id);
  };

  const joinWaitListFunc = async (prepaymentAmount: any, withPrep: any) => {
    setWithPrepayment(withPrep);
    setPrepaymentAmount(prepaymentAmount);
    const sheetsData = {
      ...withoutPrepayment,
      ...problemDetails,
      prepaymentAmount,
      uuid,
    };

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetsData),
    });

    setFormSectionId(3);
  };
  const addLoanDetailsHandler = () => {
    const sheetsData = { uuid, ...withoutPrepayment, ...problemDetails };
    const response = fetch("/api/loan", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sheetsData),
    });
  };
  // Reload Stopper:
  useEffect(() => {
    const uniqueID = uuidv4();
    setUuid(uniqueID);
    const confirmRefresh = (e: any) => {
      e.preventDefault();
      e.returnValue = ""; // This line is necessary for Chrome
      const message = "Are you sure you want to refresh?";
      e.returnValue = message; // For other browsers
      return message;
    };

    window.addEventListener("beforeunload", confirmRefresh);

    return () => {
      window.removeEventListener("beforeunload", confirmRefresh);
    };
  }, []);

  return (
    <main className="p">
      {formSectionId === 0 ? (
        <ProblemSection
          setProblemDetails={problemDetailsHandler}
          changeSection={(id: number) => changeSection(id)}
          problemData={problemDetails}
        />
      ) : formSectionId === 1 ? (
        <LoanSection
          changeSection={(id: number) => changeSection(id)}
          updateWithoutPrepayment={updateWithoutPrepayment}
          loanData={withoutPrepayment}
          addLoanDetails={addLoanDetailsHandler}
        />
      ) : formSectionId === 2 ? (
        <SavingsSection
          changeSection={(id: number) => changeSection(id)}
          withoutPrepayment={withoutPrepayment}
          joinWaitList={joinWaitListFunc}
        />
      ) : (
        <SuccessSection
          prepaymentAmount={prepaymentAmount}
          withPrepayment={withPrepayment}
          withoutPrepayment={withoutPrepayment}
          uuid={uuid}
        />
      )}
    </main>
  );
}
