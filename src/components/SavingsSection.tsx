import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RupeeIcon } from "../../public/icons/RupeeIcon";
import { rupeeFormat } from "@/utils/utils";

import Link from "next/link";
import { useRouter } from "next/router";

export default function SavingsSection(props: any) {
  const router = useRouter();
  const query = router.query;
  let loanAmount = 0;
  let interestRate = 0;
  let emi = 0;
  let tenure = 0;
  let totalInterestPaidWithoutPP = 0;
  let totalPaymentWithoutPP = 0;
  let roi = 0;
  const [isLoading, setIsLoading] = useState(false);
  // Calculations with prepayment
  const [withPrepayment, setWithPrepayment] = useState({
    tenure: 0,
    totalInterestPaid: 0,
    totalPayment: 0,
  });

  const [prepaymentAmount, setPrepaymentAmount] = useState(1000);

  function calculateWithPrepayment() {
    // let loanAmount = props.loanDetails.amount;
    // let interestRate = props.loanDetails.interestRate;
    // let emi = props.withoutPrepayment.emi;
    let prepayment = prepaymentAmount;
    // let tenure = props.withoutPrepayment.tenure;
    let remainingBalance = loanAmount;

    let totalInterestPaid = 0;
    let month = 0;

    while (remainingBalance > 0) {
      let interestForTheMonth = (remainingBalance * interestRate) / 12 / 100;
      let principalForTheMonth = emi - interestForTheMonth;
      remainingBalance -= principalForTheMonth;

      if (remainingBalance > 0 && prepayment > 0) {
        remainingBalance -= prepayment;
        if (remainingBalance < 0) {
          // Adjust the last prepayment to not overshoot the remaining balance
          prepayment += remainingBalance;
          remainingBalance = 0;
        }
        totalInterestPaid +=
          interestForTheMonth + (prepayment * interestRate) / 12 / 100;
      } else {
        totalInterestPaid += interestForTheMonth;
      }

      month++;
      if (month >= tenure * 12) {
        // Prevent infinite loop in case of calculation errors
        break;
      }
    }

    const newTenureYears = month / 12;
    const totalPayment = loanAmount + totalInterestPaid;

    setWithPrepayment({
      tenure: newTenureYears,
      totalPayment,
      totalInterestPaid,
    });
  }

  useEffect(() => {
    // totalInterestPaidWithoutPP = props.withoutPrepayment.totalInterestPaid;
    // totalPaymentWithoutPP = props.withoutPrepayment.totalPayment;
    // roi = props.withoutPrepayment.roi;
    loanAmount = props.withoutPrepayment.loanAmount;
    interestRate = props.withoutPrepayment.roi;
    emi = props.withoutPrepayment.emi;
    tenure = props.withoutPrepayment.tenure;

    // shel
    calculateWithPrepayment();
  }, [prepaymentAmount]);
  return (
    <div className="font-noto-sans bg-white">
      <div className="  space-y-8  pb-40 overflow-y-scroll max-h-[80vh] pt-10 lg:pb-0 px-[8%] lg:px-[16%] ">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <Link href="/">
            <img src="/icons/logo.svg" className="pb-8" />
          </Link>
          {/* <div className="flex justify-between items-center space-x-10">
            <button
              onClick={() => {
                props.changeSection(1);
              }}
              className="text-grey-500 font-medium"
            >
              Back
            </button> */}
          <img src="/icons/money-person.png" className="h-12 w-12" />
          {/* </div> */}
        </div>

        {/* Form */}

        <div className="space-y-8 lg:mb-0">
          <div className="space-y-4">
            <p className="text-md lg:text-2xl text-center font-sora text-primary">
              You Save
            </p>
            <p className="text-4xl lg:text-6xl text-center text-primary font-semibold italic font-libre">
              {rupeeFormat.format(
                props.withoutPrepayment.totalInterestPaid -
                  withPrepayment.totalInterestPaid
              )}
            </p>
          </div>
          <div className="space-y-2 flex flex-col items-center">
            <div className="bg-black bg-opacity-10 rounded-md font-medium py-2 px-8 ">
              <p className="text-center">
                by paying just {rupeeFormat.format(prepaymentAmount)} extra on
                your EMI every month
              </p>
            </div>
            <p className="italic font-medium font-libre text-sm text-center text-primary">
              + Loan completes{" "}
              {(props.withoutPrepayment.tenure - withPrepayment.tenure).toFixed(
                1
              )}{" "}
              Years earlier
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-black rounded-xl py-4 px-8 lg:w-1/2 space-y-4">
              <p className="text-white font-sora font-medium text-center">
                &#128071; Increase Pre-payment to see the Impact
              </p>

              <Slider
                defaultValue={1000}
                min={100}
                max={props.withoutPrepayment.emi}
                step={100}
                value={prepaymentAmount}
                onChange={(e) => setPrepaymentAmount(e)}
              >
                <SliderTrack bg="#292929" className="bg-opacity-20">
                  {/* Use your desired hex color code */}
                  <SliderFilledTrack
                    bg="#7F7F7f"
                    className="bg-opacity-40"
                  />{" "}
                  {/* Use your desired hex color code */}
                </SliderTrack>
                <SliderThumb bg="#FFF" boxSize={6}>
                  <Box borderRadius="full" />{" "}
                  {/* Use your desired hex color code */}
                </SliderThumb>
              </Slider>
            </div>
          </div>
          {/* <div className="flex justify-between lg:justify-center lg:space-x-4 items-center ">
            <label>Amount Prepaid Monthly</label>

            <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between">
              <div className="h-4 w-4">
                <RupeeIcon stroke="#8652FF" classNames="h-4 w-4" />
              </div>

              <div>
                <p className="text-primary">{prepaymentAmount.toFixed(0)}</p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      {/* CTA */}
      <div className="bg-white flex-col flex items-center justify-center w-[100vw] py-6 border-t h-[15vh] fixed bottom-0 z-50">
        <div className="flex items-center space-x-6">
          <button
            onClick={() => {
              props.changeSection(1);
            }}
            className="text-grey-500 font-medium"
          >
            <img src="/icons/back-icon.svg" className="h-10 w-10" />
          </button>
          {!isLoading ? (
            <button
              onClick={async () => {
                setIsLoading(true);
                await props.joinWaitList(prepaymentAmount, withPrepayment);
                setIsLoading(false);
              }}
              className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
            >
              {query.k === "h"
                ? "Join Waitlist"
                : `Save
            ${rupeeFormat.format(
              props.withoutPrepayment.totalInterestPaid -
                withPrepayment.totalInterestPaid
            )}`}
            </button>
          ) : (
            <div className="spinner"></div>
          )}
        </div>
      </div>

      {/* Blur */}
      <div className="ellipse2 h-[20vh] w-[20vw]"></div>
      <div className="ellipse1 h-[20vh] w-[20vw]"></div>
    </div>
  );
}
