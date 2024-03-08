import { useState } from "react";
import Link from "next/link";
export default function ProblemSection(props: any) {
  const personalDetails = props.problemData
    ? props.problemData
    : {
        prepaymentAction: undefined,
        prepaymentAwareness: undefined,
      };
  const [prepaymentAwareness, setPrepaymentAwareness] = useState(
    personalDetails.prepaymentAwareness
  );
  const [prepaymentAction, setPrepaymentAction] = useState(
    personalDetails.prepaymentAction
  );
  const [prepaymentAwarenessError, setPrepaymentAwarenessError] = useState("");
  const [prepaymentActionError, setPrepaymentActionError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const validateForm = () => {
    let isValid = true;

    if (prepaymentAction === undefined) {
      isValid = false;
      setPrepaymentActionError("Please select a value");
    }
    if (prepaymentAwareness === undefined) {
      isValid = false;
      setPrepaymentAwarenessError("Please select a value");
    }

    return isValid;
  };
  return (
    <div className="font-sora bg-white ">
      <div className="h-[85vh] space-y-8 flex-1 overflow-y-scroll max-h-[85vh] py-10">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <Link href="/">
            <img alt="biteloan-logo" src="/icons/logo.svg" className="pb-8" />
          </Link>
          <img
            alt="person-icon"
            src="/icons/person.png"
            className="h-12 w-12"
          />

          <p className="font-medium text-xl lg:text-3xl">
            Please answer a few questions for us
          </p>
        </div>
        <div className="flex justify-center">
          <div className="rounded-2xl bg-white border border-grey-light z-10 lg:w-[33%] w-[90%] py-10 px-6 space-y-4">
            <div className="space-y-2">
              <label
                htmlFor="prepayment-awareness"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Did You Know You Can Prepay Your Loan?
              </label>

              <div className="flex gap-x-2">
                <div className="w-1/2 flex">
                  <input
                    id="prepayment-awareness"
                    type="radio"
                    value={prepaymentAwareness}
                    checked={prepaymentAwareness === true ? true : false}
                    onChange={() => {
                      setPrepaymentAwareness(true);
                      setPrepaymentAwarenessError("");
                    }}
                    name="prepayment-awareness"
                    className="peer opacity-0 w-0 h-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="prepayment-awareness"
                    className="flex cursor-pointer  white border border-gray-300 shadow-sm rounded-lg justify-center items-center h-10 w-full peer-checked:bg-primary peer-checked:text-white text-sm font-medium text-gray-900 dark:text-primary-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="w-1/2 flex">
                  <input
                    id="prepayment-awareness-1"
                    type="radio"
                    value={prepaymentAwareness}
                    checked={prepaymentAwareness === false ? true : false}
                    onChange={() => {
                      setPrepaymentAwareness(false);
                      setPrepaymentAwarenessError("");
                    }}
                    name="prepayment-awareness"
                    className="peer opacity-0 w-0 h-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="prepayment-awareness-1"
                    className="flex cursor-pointer  white border border-gray-300 shadow-sm rounded-lg justify-center items-center h-10 w-full peer-checked:bg-primary peer-checked:text-white  text-sm font-medium text-gray-900 dark:text-primary-black"
                  >
                    No
                  </label>
                </div>
              </div>
              {!prepaymentAwareness && (
                <p className="text-xs text-red-600 mt-1">
                  {prepaymentAwarenessError}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label
                htmlFor="prepayment-action"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Have You Every Tried To Prepay Your Loan Before?
              </label>
              <div className="flex gap-x-2">
                <div className="w-1/2 flex">
                  <input
                    id="prepayment-action"
                    type="radio"
                    value={prepaymentAction}
                    checked={prepaymentAction === true ? true : false}
                    onChange={(e) => {
                      setPrepaymentAction(true);
                    }}
                    name="prepayment-action"
                    className="peer opacity-0 w-0 h-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="prepayment-action"
                    className="flex cursor-pointer  white border border-gray-300 shadow-sm rounded-lg justify-center items-center h-10 w-full peer-checked:bg-primary peer-checked:text-white text-sm font-medium text-gray-900 dark:text-primary-black"
                  >
                    Yes
                  </label>
                </div>

                <div className="w-1/2 flex">
                  <input
                    id="prepayment-action-1"
                    type="radio"
                    value={prepaymentAction}
                    checked={prepaymentAction === false ? true : false}
                    onChange={(e) => {
                      setPrepaymentAction(false);
                    }}
                    name="prepayment-action"
                    className="peer opacity-0 w-0 h-0 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label
                    htmlFor="prepayment-action-1"
                    className="flex cursor-pointer  white border border-gray-300 shadow-sm rounded-lg justify-center items-center h-10 w-full peer-checked:bg-primary peer-checked:text-white  text-sm font-medium text-gray-900 dark:text-primary-black"
                  >
                    No
                  </label>
                </div>
              </div>
              {!prepaymentAction && (
                <p className="text-xs text-red-600 mt-1">
                  {prepaymentActionError}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex-col flex items-center justify-center w-[100vw] py-6 border-t h-[15vh] fixed bottom-0 z-50">
        <div className="flex items-center space-x-6">
          {!isLoading ? (
            <button
              onClick={async () => {
                setIsLoading(true);
                if (validateForm()) {
                  await props.setProblemDetails({
                    prepaymentAwareness,
                    prepaymentAction,
                  });

                  props.changeSection(1);
                }
                setIsLoading(false);
              }}
              className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
              id="next-to-loan-section"
              name="Next to Loan"
            >
              Loan Calculator
            </button>
          ) : (
            <div className="spinner"></div>
          )}
        </div>
      </div>
    </div>
  );
}
