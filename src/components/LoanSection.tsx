import { useEffect, useState } from "react";
import { RupeeIcon } from "../../public/icons/RupeeIcon";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Box,
} from "@chakra-ui/react";
export default function LoanSection(props: any) {
  // Loan Values
  const [roi, setRoi] = useState(9);
  const [loanAmount, setLoanAmount] = useState(7500000);
  const [tenure, setTenure] = useState(15);

  const [totalInterestPaid, setTotalInterestPaid] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [emi, setEmi] = useState(0);

  // const [withoutPrepayment, setWithoutPrepayment] = useState({
  //   tenure: 0,
  //   totalInterestPaid: 0,
  //   totalPayment: 0,
  //   emi: 0,
  //   roi,
  // });

  function calculateEMI(
    loanAmount: number,
    annualInterestRate: number,
    tenureYears: number
  ) {
    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const tenureMonths = tenureYears * 12;
    const emi =
      (loanAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1);
    return emi;
  }

  // function calculateWithPrepayment(
  //   loanAmount: number,
  //   interestRate: number,
  //   tenure: number,
  //   prepayment: number
  // ) {
  //   let emi = calculateEMI(loanAmount, interestRate, tenure);
  //   let remainingBalance = loanAmount;
  //   let totalInterestPaid = 0;
  //   let month = 0;

  //   while (remainingBalance > 0) {
  //     let interestForTheMonth = (remainingBalance * interestRate) / 12 / 100;
  //     let principalForTheMonth = emi - interestForTheMonth;
  //     remainingBalance -= principalForTheMonth;

  //     if (remainingBalance > 0 && prepayment > 0) {
  //       remainingBalance -= prepayment;
  //       if (remainingBalance < 0) {
  //         // Adjust the last prepayment to not overshoot the remaining balance
  //         prepayment += remainingBalance;
  //         remainingBalance = 0;
  //       }
  //       totalInterestPaid +=
  //         interestForTheMonth + (prepayment * interestRate) / 12 / 100;
  //     } else {
  //       totalInterestPaid += interestForTheMonth;
  //     }

  //     month++;
  //     if (month >= tenure * 12) {
  //       // Prevent infinite loop in case of calculation errors
  //       break;
  //     }
  //   }

  //   const newTenureYears = month / 12;
  //   const totalPayment = loanAmount + totalInterestPaid;

  //   // setWithPrepayment({
  //   //   tenure: newTenureYears,
  //   //   totalPayment,
  //   //   totalInterestPaid,
  //   // });
  // }

  function calculateLoan() {
    const loanAmountLocal = parseFloat(loanAmount.toString());
    const interestRate = parseFloat(roi.toString());
    const tenureLocal = parseFloat(tenure.toString());
    // const prepaymentLocal = parseFloat(prepayment.toString()) || 0;

    // if (prepaymentLocal > 0) {
    //   calculateWithPrepayment(
    //     loanAmountLocal,
    //     interestRate,
    //     tenureLocal,
    //     prepaymentLocal
    //   );
    // }
    const emiLocal = calculateEMI(loanAmountLocal, interestRate, tenureLocal);
    const totalPaymentLocal = emiLocal * tenureLocal * 12;
    const totalInterestLocal = totalPaymentLocal - loanAmountLocal;

    setTotalInterestPaid(totalInterestLocal);
    setTotalPayment(totalPaymentLocal);
    setEmi(emiLocal);
    // setWithoutPrepayment({
    //   totalPayment,
    //   totalInterestPaid: totalInterest,
    //   tenure: tenureLocal,
    //   emi,
    //   roi,
    // });

    props.updateWithoutPrepayment({
      totalPayment: totalPaymentLocal,
      totalInterestPaid: totalInterestLocal,
      emi: emiLocal,
      tenure,
      roi,
      loanAmount,
    });
  }

  useEffect(() => {
    calculateLoan();
  }, [tenure, loanAmount, roi]);
  // Ensure you have a button with an onclick event to call calculateLoan in your HTML
  let rupeeFormat = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
  return (
    <div className=" font-noto-sans bg-white ">
      <div className=" h-[80vh] lg:h-[85vh] space-y-8 flex-1 overflow-y-scroll max-h-[80vh] lg:max-h-[85vh] py-10">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <img src="/icons/logo.svg" className="pb-8" />
          <img src="/icons/money.png" className="h-12 w-12" />
          <p className="font-medium text-xl lg:text-3xl text-center px-10">
            Please tell us about your loan
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center w-full">
          <div className="rounded-2xl bg-white border mb-16 lg:mb-0 border-grey-light w-[90%] lg:w-[60%] z-50 py-8 lg:py-16 px-6  lg:flex justify-center  text-primary-black text-lg ">
            <div className="flex flex-col justify-between space-y-4 font-medium lg:w-[45%]">
              <div className="space-y-8">
                <div className="flex justify-between items-center lg:space-x-8">
                  <label>Loan Amount</label>

                  <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between w-32">
                    <div className="h-4 w-4">
                      <RupeeIcon stroke="#8652FF" classNames="h-4 w-4" />
                    </div>

                    <div>
                      <p className="text-primary">{loanAmount}</p>
                    </div>
                  </div>
                </div>

                <Slider
                  defaultValue={100000}
                  min={100000}
                  max={10000000}
                  step={10000}
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(e)}
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
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-center lg:space-x-8">
                  <label>Rate of Interest</label>

                  <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between w-32">
                    <div>
                      {/* <img src="/icons/rupee-icon.svg" className="h-4 w-4" /> */}
                    </div>

                    <div>
                      <p className="text-primary">
                        {roi}
                        <span>&#37;</span>
                      </p>
                    </div>
                  </div>
                </div>

                <Slider
                  min={1}
                  max={30}
                  defaultValue={1}
                  step={0.5}
                  value={roi}
                  onChange={(e) => setRoi(e)}
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
              </div>
              <div className="space-y-8">
                <div className="flex justify-between items-center lg:space-x-8">
                  <label>Loan Tenure</label>

                  <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between w-32">
                    <div>
                      {/* <img src="/icons/rupee-icon.svg" className="h-4 w-4" /> */}
                    </div>

                    <div>
                      <p className="text-primary ">
                        {tenure} <span className="text-sm font-thin">Yr</span>
                      </p>
                    </div>
                  </div>
                </div>

                <Slider
                  min={1}
                  max={40}
                  defaultValue={1}
                  step={1}
                  value={tenure}
                  onChange={(e) => setTenure(e)}
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
              </div>
            </div>
            <div className="border-t lg:border-t-0 lg:border-l mt-10 mb-10 lg:mx-20 lg:my-0 flex items-center justify-center"></div>
            <div className="text-center lg:text-left lg:pt-0 flex-col flex justify-between lg:space-y-0 space-y-6 lg:w-[40%]">
              <div className="space-y-4">
                <p>EMI Amount</p>
                <p className="font-libre italic text-2xl lg:text-4xl text-secondary">
                  {rupeeFormat.format(emi)}
                </p>
              </div>
              <div className="space-y-4">
                <p>Total Interest Amount</p>
                <p className="font-libre italic text-2xl lg:text-4xl text-secondary">
                  {rupeeFormat.format(totalInterestPaid)}
                </p>
              </div>
              <div className="space-y-4">
                <p>Total Amount Paid</p>
                <p className="font-libre italic text-2xl lg:text-4xl text-secondary">
                  {rupeeFormat.format(totalPayment)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-white flex-col flex items-center  font-sora justify-center w-[100vw] py-6 border-t h-[20vh] lg:h-[15vh]  fixed bottom-0 space-y-4 z-50">
        <p className="text-xl text-center lg:px-0 lg:text-left ">
          Want to save on{" "}
          <span className="font-libre text-secondary">
            {rupeeFormat.format(totalInterestPaid)} ?
          </span>
        </p>
        <button
          onClick={() => {
            // props.setLoanDetails({ loanAmount, interestRate: roi });
            props.changeSection(2);
          }}
          className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
        >
          Calculate Savings
        </button>
      </div>

      {/* Blur */}
      <div className="ellipse2 h-[20vh] w-[20vw]"></div>
      <div className="ellipse1 h-[20vh] w-[20vw]"></div>
    </div>
  );
}
