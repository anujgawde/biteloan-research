import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { RupeeIcon } from "../../public/icons/RupeeIcon";

export default function SavingsSection(props: any) {
  let rupeeFormat = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });

  let loanAmount = 0;
  let interestRate = 0;
  let emi = 0;
  let tenure = 0;
  let totalInterestPaidWithoutPP = 0;
  let totalPaymentWithoutPP = 0;
  let roi = 0;

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
    <div className=" font-noto-sans bg-white">
      <div className="  space-y-8  pb-40 overflow-y-scroll max-h-[80vh] pt-10 lg:pb-0 px-[8%] lg:px-[16%] ">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <img src="/icons/logo.svg" className="pb-8" />
          <img src="/icons/money-person.png" className="h-12 w-12" />
          <p className="font-medium text-2xl lg:text-3xl text-center">
            How much <span className="text-primary">interest</span> you are
            saving
          </p>
        </div>

        {/* Form */}

        <div className="space-y-8  lg:mb-0">
          <p className="text-4xl lg:text-6xl text-center text-primary font-semibold italic font-libre">
            {rupeeFormat.format(
              props.withoutPrepayment.totalInterestPaid -
                withPrepayment.totalInterestPaid
            )}
          </p>

          <p className="italic font-medium font-libre text-xl lg:text-3xl text-center">
            + Loan completes{" "}
            {(props.withoutPrepayment.tenure - withPrepayment.tenure).toFixed(
              1
            )}{" "}
            Years earlier
          </p>

          <Slider
            defaultValue={1000}
            min={100}
            max={props.withoutPrepayment.emi}
            step={100}
            value={prepaymentAmount}
            onChange={(e) => setPrepaymentAmount(e)}
          >
            <SliderTrack bg="#F6F5F7">
              {" "}
              {/* Use your desired hex color code */}
              <SliderFilledTrack bg="#CDB8FF" />{" "}
              {/* Use your desired hex color code */}
            </SliderTrack>
            <SliderThumb bg="#8652FF" boxSize={6}>
              <Box borderRadius="full" />{" "}
              {/* Use your desired hex color code */}
            </SliderThumb>
          </Slider>

          <div className="flex justify-between lg:justify-center lg:space-x-4 items-center ">
            <label>Amount Prepaid Monthly</label>

            <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between">
              <div className="h-4 w-4">
                <RupeeIcon stroke="#8652FF" classNames="h-4 w-4" />
              </div>

              <div>
                <p className="text-primary">{prepaymentAmount.toFixed(0)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-white flex-col flex items-center justify-center w-[100vw] py-6 border-t h-[15vh] fixed bottom-0 z-50">
        <button
          onClick={() => props.joinWaitList(prepaymentAmount, withPrepayment)}
          className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
        >
          Save{" "}
          {rupeeFormat.format(
            props.withoutPrepayment.totalInterestPaid -
              withPrepayment.totalInterestPaid
          )}
        </button>
      </div>

      {/* Blur */}
      <div className="ellipse2 h-[20vh] w-[20vw]"></div>
      <div className="ellipse1 h-[20vh] w-[20vw]"></div>
    </div>
  );
}
