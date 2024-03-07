import { useState } from "react";
import { bankProviders } from "@/utils/utils";

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
      };
  // user variables:
  const [isLoading, setIsLoading] = useState(false);
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

  const [fullNameError, setFullNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

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

    return isValid;
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center bg-white font-sora">
        <div className="rounded-2xl bg-white border border-grey-light z-10 py-10 px-6 space-y-4">
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
      {!isLoading ? (
        <button
          name="Invite Join Waitlist"
          id="invite-join-waitlist"
          className="bg-primary px-8 py-2 text-white rounded-lg font-sora text-center my-12"
          onClick={async () => {
            if (validateForm()) {
              setIsLoading(true);
              const userData = {
                uuid: props.uuid,
                fullName,
                email,
                phoneNumber,
                ageGroup,
                bankProvider,
                loanType,
                employmentStatus,
              };
              const response = await fetch("/api/personal", {
                method: "POST",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
              });
              setIsLoading(false);
              props.addToWaitList();
            }
          }}
        >
          Join Waitlist
        </button>
      ) : (
        <div className="spinner"></div>
      )}
    </div>
  );
}
