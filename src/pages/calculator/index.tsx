"use client";

import LoanSection from "@/components/LoanSection";

import PersonalDetails from "@/components/PersonalDetails";
import SavingsSection from "@/components/SavingsSection";
import SuccessSection from "@/components/SuccessSection";
import { useRouter } from "next/router";

import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [formSectionId, setFormSectionId] = useState(3);
  const [prepaymentAmount, setPrepaymentAmount] = useState(0);
  const [userDetails, setUserDetails] = useState<any>();

  const setUserDetailsFunc = (data: any) => {
    setUserDetails(data);
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
      prepaymentAmount,
      ...withoutPrepayment,
      ...userDetails,
      isWaitlisted: true,
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

    setFormSectionId(3);
    // console.log(content, "sheets");
  };
  // Reload Stopper:
  useEffect(() => {
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
        <PersonalDetails
          changeSection={(id: number) => changeSection(id)}
          userDetails={setUserDetailsFunc}
          personalData={userDetails}
        />
      ) : formSectionId === 1 ? (
        <LoanSection
          changeSection={(id: number) => changeSection(id)}
          updateWithoutPrepayment={updateWithoutPrepayment}
          loanData={withoutPrepayment}
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
        />
      )}
    </main>
  );
}
