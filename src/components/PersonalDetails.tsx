import { useState } from "react";

export default function PersonalDetails(props: any) {
  // user variables:
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [ageGroup, setAgeGroup] = useState("18 - 25");
  const [multipleLoans, setMultipleLoans] = useState(false);
  const [employmentStatus, setEmploymentStatus] = useState("Employed");
  const [loanType, setLoantype] = useState("Housing");
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "anuj",
        email: "axg.devv@gmail.com",
        phone: "992099020022",
        message: "hello brother",
      }),
    });
    const content = await response.json();
  };
  return (
    <div className="font-sora bg-white ">
      <div className="h-[85vh] space-y-8 flex-1 overflow-y-scroll max-h-[85vh] py-10">
        {/* Heading */}

        <div className="flex items-center flex-col space-y-4">
          <img src="/icons/logo.svg" className="pb-8" />
          <img src="/icons/person.png" className="h-12 w-12" />
          <p className="font-medium text-xl lg:text-3xl">
            Please tell us about you
          </p>
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
                  Do you have multiple loans?
                </label>
                <div className="mt-2">
                  <select
                    id="multiple-loans"
                    name="multiple-loans"
                    // autoComplete="country-name"
                    onChange={(e) =>
                      setMultipleLoans(e.target.value === "Yes" ? true : false)
                    }
                    value={multipleLoans === true ? "Yes" : "No"}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>Yes</option>
                    <option>No</option>
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
                    <option>Student</option>
                    <option>Personal</option>
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
            props.userDetails({
              fullName,
              email,
              phoneNumber,
              ageGroup,
              multipleLoans: multipleLoans ? "Yes" : "No",
              employmentStatus,
              loanType,
            });
            props.changeSection(1);
          }}
          className="bg-primary px-8 py-2 text-white rounded-lg mx-auto"
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