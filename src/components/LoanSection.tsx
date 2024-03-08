import { useEffect, useState } from "react";
import { RupeeIcon } from "../../public/icons/RupeeIcon";
import {
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";
import { rupeeFormat } from "@/utils/utils";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoanSection(props: any) {
  const loanDetails = props.loanData
    ? props.loanData
    : {
        emi: 0,
        loanAmount: 7500000,
        roi: 9,
        tenure: 15,
        totalInterestPaid: 0,
        totalPayment: 0,
      };

  // Loan Values
  const [roi, setRoi] = useState(loanDetails.roi);
  const [loanAmount, setLoanAmount] = useState(loanDetails.loanAmount);
  const [tenure, setTenure] = useState(loanDetails.tenure);

  const [totalInterestPaid, setTotalInterestPaid] = useState(
    loanDetails.totalInterestPaid
  );
  const [totalPayment, setTotalPayment] = useState(loanDetails.totalPayment);
  const [emi, setEmi] = useState(loanDetails.emi);

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

  function calculateLoan() {
    const loanAmountLocal = parseFloat(loanAmount.toString());
    const interestRate = parseFloat(roi.toString());
    const tenureLocal = parseFloat(tenure.toString());

    const emiLocal = calculateEMI(loanAmountLocal, interestRate, tenureLocal);
    const totalPaymentLocal = emiLocal * tenureLocal * 12;
    const totalInterestLocal = totalPaymentLocal - loanAmountLocal;

    setTotalInterestPaid(totalInterestLocal);
    setTotalPayment(totalPaymentLocal);
    setEmi(emiLocal);

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

  return (
    <div className=" font-noto-sans bg-white ">
      <div className=" h-[80vh] lg:h-[85vh] space-y-8 flex-1 overflow-y-scroll max-h-[80vh] lg:max-h-[85vh] py-10">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <Link href="/">
            <img alt="biteloan-logo" src="/icons/logo.svg" className="pb-8" />
          </Link>

          <img alt="money-icon" src="/icons/money.png" className="h-12 w-12" />

          <p className="font-medium text-xl lg:text-3xl text-center px-10">
            Please tell us about your loan
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center w-full">
          <div className="rounded-2xl bg-white border mb-16 lg:mb-0 border-grey-light w-[90%] lg:w-[60%] z-50 py-8 lg:py-16 px-6  lg:flex justify-center  text-primary-black text-lg ">
            <div className="flex flex-col justify-between space-y-4 font-medium lg:w-[45%]">
              <div className="space-y-8 w-full">
                <div className="flex justify-between items-center lg:space-x-8 w-full">
                  <label className="flex-1">Loan Amount</label>

                  <div className="px-2 py-1 bg-primary bg-opacity-10 rounded-md flex items-center justify-between w-32">
                    <div className="h-4 w-4">
                      <RupeeIcon stroke="#8652FF" classNames="h-4 w-4" />
                    </div>

                    {/* <input
                      value={loanAmount}
                      min={100000}
                      max={10000000}
                      type="number"
                      onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                      className="text-primary  border-none bg-transparent flex-1 text-right w-1 lg:w-12 p-1"
                    /> */}
                    <div>
                      <p className="text-primary">
                        {loanAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>

                <Slider
                  defaultValue={100000}
                  min={100000}
                  max={10000000}
                  step={1000}
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
                    <div></div>

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
                    <SliderFilledTrack bg="#CDB8FF" />{" "}
                  </SliderTrack>
                  <SliderThumb bg="#8652FF" boxSize={6}>
                    <Box borderRadius="full" />{" "}
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

        <div className="flex items-center space-x-6">
          <button
            name="Prev to Personal"
            onClick={() => {
              props.changeSection(0);
            }}
            className="text-grey-500 font-medium"
            id="prev-to-personal-section"
          >
            <img
              alt="back-icon"
              src="/icons/back-icon.svg"
              className="h-10 w-10"
            />
          </button>
          <button
            onClick={() => {
              // props.setLoanDetails({ loanAmount, interestRate: roi });
              props.addLoanDetails();

              props.changeSection(2);
            }}
            className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
            id="next-to-savings-section"
            name="Next to Savings"
          >
            Calculate Savings
          </button>
        </div>
      </div>

      {/* Blur */}
      <div className="ellipse2 h-[20vh] w-[20vw]"></div>
      <div className="ellipse1 h-[20vh] w-[20vw]"></div>
    </div>
  );
}
