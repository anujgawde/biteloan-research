import { useState } from "react";
import { bankProviders } from "@/utils/utils";

import Link from "next/link";

export default function PersonalDetails(props: any) {
  const personalDetails = props.personalData
    ? props.personalData
    : {
        fullName: "",
        email: "",
        phoneNumber: "",
        ageGroup: "18 - 25",
        bankProvider: "Axis Bank Ltd.",
        loanType: "Housing",
        employmentStatus: "Employed",
        prepaymentAction: undefined,
        prepaymentAwareness: undefined,
      };
  // user variables:

  const [fullName, setFullName] = useState(personalDetails.fullName);
  const [email, setEmail] = useState(personalDetails.email);
  const [phoneNumber, setPhoneNumber] = useState(personalDetails.phoneNumber);
  const [ageGroup, setAgeGroup] = useState(personalDetails.ageGroup);
  const [bankProvider, setBankProvider] = useState(
    personalDetails.bankProvider
  );
  const [employmentStatus, setEmploymentStatus] = useState(
    personalDetails.employmentStatus
  );
  const [loanType, setLoantype] = useState(personalDetails.loanType);
  const [prepaymentAwareness, setPrepaymentAwareness] = useState(
    personalDetails.prepaymentAwareness
  );
  const [prepaymentAction, setPrepaymentAction] = useState(
    personalDetails.prepaymentAction
  );

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [prepaymentAwarenessError, setPrepaymentAwarenessError] = useState("");
  const [prepaymentActionError, setPrepaymentActionError] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRegex = /^(?:\+?91|0)?[ -]?\d{3}[ -]?\d{4}[ -]?\d{3}$/;

  const validateForm = () => {
    let isValid = true;

    if (fullName.trim().toString() === "") {
      setFullNameError("Full name cannot be empty");
      isValid = false;
    } else {
      setFullNameError("");
    }

    if (email.trim().toString() === "") {
      setEmailError("Email cannot be empty");
      isValid = false;
    } else if (!emailRegex.test(email) && email.length) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (phoneNumber.trim().toString() === "") {
      setPhoneError("Phone number cannot be empty");
      isValid = false;
    } else if (!phoneRegex.test(phoneNumber) && phoneNumber.length) {
      setPhoneError("Invalid phone number format");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (!prepaymentAction) {
      setPrepaymentActionError("Please select a value");
    }
    if (!prepaymentAwareness) {
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

        {/* Form */}
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
                htmlFor="multiple-loans"
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
        {/* Form */}
        <div className="flex justify-center">
          <div className="rounded-2xl bg-white border border-grey-light z-10 lg:w-[33%] w-[90%] py-10 px-6 space-y-4 mb-14">
            <div className="sm:col-span-3">
              <label
                htmlFor="full-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full name
              </label>
              <div className="mt-2 ">
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  autoComplete="given-name"
                  onChange={(e) => setFullName(e.target.value)}
                  value={fullName}
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <p className="text-xs text-red-600 mt-1">{fullNameError}</p>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email Address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <p className="text-xs text-red-600 mt-1">{emailError}</p>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="phone-number"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  // autoComplete="given-name"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>

              <p className="text-xs text-red-600 mt-1">{phoneError}</p>
            </div>

            <div className="items-center justify-between grid-cols-1 grid lg:grid-cols-2 gap-4">
              <div className="sm:col-span-1">
                <label
                  htmlFor="age-group"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Age Group
                </label>
                <div className="mt-2">
                  <select
                    id="age-group"
                    name="age-group"
                    onChange={(e) => setAgeGroup(e.target.value)}
                    value={ageGroup}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>18 - 25</option>
                    <option>26 - 35</option>
                    <option>36 - 45</option>
                    <option>46 - 55</option>
                    <option>56+</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="multiple-loans"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Loan Provider
                </label>
                <div className="mt-2">
                  <select
                    id="multiple-loans"
                    name="multiple-loans"
                    // autoComplete="country-name"
                    onChange={(e) => setBankProvider(e.target.value)}
                    value={bankProvider}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    {bankProviders.map((e, index) => (
                      <option key={index}>{e}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Employment Status
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    // autoComplete="country-name"
                    onChange={(e) => setEmploymentStatus(e.target.value)}
                    value={employmentStatus}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Employed</option>
                    <option>Self-Employed</option>
                    <option>Unemployed</option>
                    <option>Retired</option>
                  </select>
                </div>
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="loan-type"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Type of Loan
                </label>
                <div className="mt-2">
                  <select
                    id="loan-type"
                    name="loan-type"
                    // autoComplete="country-name"
                    onChange={(e) => setLoantype(e.target.value)}
                    value={loanType}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Housing</option>
                    <option>Vehicle</option>
                    <option>Education</option>
                    <option>Personal</option>
                    <option>Business</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}

      <div className="bg-white flex-col flex items-center justify-center w-[100vw] py-6 border-t h-[15vh] fixed bottom-0 z-50">
        <button
          onClick={() => {
            if (validateForm()) {
              // Submit form data

              props.userDetails({
                fullName,
                email,
                phoneNumber,
                ageGroup,
                bankProvider: bankProvider,
                employmentStatus,
                loanType,
                prepaymentAwareness,
                prepaymentAction,
              });

              props.changeSection(1);
            }
          }}
          className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
          id="next-to-loan-section"
          name="Next to Loan"
        >
          Loan Calculator
        </button>
      </div>

      {/* Blur */}
      <div className="ellipse2 h-[20vh] w-[20vw]"></div>
      <div className="ellipse1 h-[20vh] w-[20vw]"></div>
    </div>
  );
}
