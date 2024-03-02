import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
export default function SuccessSection(props: any) {
  const router = useRouter();
  const queryName = router.query.k;
  let rupeeFormat = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  });
  console.log(props);
  return queryName !== "h" ? (
    <div className=" ">
      {/* Context Section  */}

      <div className=" flex  justify-center w-full flex-col py-20  items-center h-[100vh]">
        <div className="lg:w-1/3 space-y-4 lg:space-y-10 lg:pt-10 px-8">
          <p className="font-libre text text-3xl italic">
            Unlock Your{" "}
            {rupeeFormat.format(
              props.withoutPrepayment.totalInterestPaid -
                props.withPrepayment.totalInterestPaid
            )}{" "}
            <br></br>with <span className="text-primary">BiteLoan</span>
          </p>

          <div className="space-y-4 font-medium text-medium">
            <p>Hey there! &#128075;</p>

            <p>
              We&apos;re the team behind BiteLoan, and we&apos;re on a mission
              to transform the way you manage your loans.
            </p>
            <p>
              You&apos;ve just discovered how much you can save on your loan by
              prepaying an
              <span className="text-primary">
                {" "}
                additional {rupeeFormat.format(props.prepaymentAmount)}.
              </span>
            </p>

            <p>But that&apos;s just the beginning. With</p>
            <p>
              BiteLoan, we&apos;re not only showing you potential
              savings—we&apos;re unlocking them for you.
            </p>
          </div>
          <p className="font-libre text-medium lg:text-3xl italic">
            But what if you could unlock even more savings with even less
            effort?
          </p>
          <div className="flex justify-start w-full lg:w-1/3 ">
            <img
              src="/icons/dropdown.gif"
              className="opacity-20 h-24 lg:-ml-[20%] -ml-[10%] -mt-5"
            />
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="lg:h-screen flex items-center justify-center flex-col space-y-4 lg:space-y-8 z-0 py-20 px-8">
        <p className="lg:tracking-[0.7rem] tracking-[0.4rem] text-center text-lg lg:text-2xl">
          INTRODUCING
        </p>
        <div>
          <img src="/icons/logo.svg" className="lg:h-40 h-20" />
        </div>

        <p className="lg:text-2xl text-lg text-center font-libre italic">
          Transforming how you manage, repay, and think about your loans.
        </p>
      </div>
      <div className="relative flex justify-center pt-20">
        <div className="bg-primary py-10 lg:py-20 overflow-hidden">
          <Marquee className="text-4xl lg:text-7xl opacity-30 text-white font-libre italic text-nowrap lg:h-32 h-20 ">
            Track Manage Save Track Manage Save Track Manage Save Track Manage
            Save Track Manage Save Track Manage Save Track Manage Save Track
            Manage Save
          </Marquee>
          <Marquee
            direction="right"
            className="text-4xl lg:text-7xl opacity-30 text-white font-sora text-nowrap lg:h-32 h-20 "
          >
            Track Manage Save Track Manage Save Track Manage Save Track Manage
            Save Track Manage Save Track Manage Save Track Manage Save Track
            Manage Save
          </Marquee>
        </div>
        <div className="absolute bottom-0 right-0 lg:right-0 lg:left-0 flex justify-center">
          <img
            src="/icons/app-hand-desktop.png"
            className="hidden lg:block z-50"
          />
          <img src="/icons/app-hand-mobile.webp" className="lg:hidden z-50" />
        </div>
      </div>
      <div className=" flex flex-col justify-center w-full py-20 items-center px-10">
        <div className="w-full lg:w-1/2 space-y-20">
          <div className="space-y-6">
            <p className="text-center text-3xl font-sora">&#128233;</p>
            <p className="text-center text-2xl lg:text-3xl font-sora">
              We&apos;re inviting you <br></br>Join the BiteLoan Waitlist?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-2">
              <div className="flex  flex-col space-y-2 lg:space-x-4 items-center">
                <img src="/icons/magnet-icon.svg" />
                <p className="text-primary font-libre italic text-2xl">
                  Exclusive Early Access
                </p>
              </div>
              <p className="font-sora  text-grey-500 text-center  text-sm">
                Be the first to experience how BiteLoan<br></br> can change your
                financial future
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex  flex-col space-y-2 lg:space-x-4 items-center">
                <img src="/icons/key-icon.svg" />
                <p className="text-primary font-libre italic text-2xl">
                  Unlock Savings
                </p>
              </div>
              <p className="font-sora  text-grey-500 text-center  text-sm">
                Learn exactly how much<br></br> you can save with the app
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex  flex-col space-y-2 lg:space-x-4 items-center">
                <img src="/icons/star-icon.svg" />
                <p className="text-primary font-libre italic text-2xl">
                  Track Loans
                </p>
              </div>
              <p className="font-sora  text-grey-500 text-center  text-sm">
                Consolidate and manage<br></br> all your loans in one app
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex  flex-col space-y-2 lg:space-x-4 items-center">
                <img src="/icons/add-icon.svg" />
                <p className="text-primary font-libre italic text-2xl">
                  Be Part of a Community
                </p>
              </div>
              <p className="font-sora  text-grey-500 text-center  text-sm">
                Join a group of forward-thinkers<br></br> who are reshaping
                their financial destinies
              </p>
            </div>
          </div>

          <button className="bg-primary px-8 py-2 text-white rounded-lg mx-auto  hidden lg:block font-sora">
            Join Waitlist
          </button>
        </div>
      </div>

      <div className="py-16 bg-black flex items-center justify-center">
        <img src="/icons/logo-white.svg" className="h-14" />
      </div>
    </div>
  ) : (
    <div className=" flex-col lg:flex-row flex items-center justify-between min-h-screen  ">
      <div className=" flex-col flex items-center lg:justify-between lg:items-start py-10 lg:w-[60%] text-center lg:text-start lg:h-screen">
        <div className="space-y-8 flex-col flex lg:block items-center">
          <div className="px-10 lg:hidden lg:px-20">
            <img className="" src="/icons/logo.svg" />
          </div>
          <div className=" lg:px-0 lg:mx-10 lg:h-56 lg:w-56 h-40 w-40">
            <img src="/icons/success-person.png" className=" h-full w-full" />
          </div>
          <div className="font-medium space-y-2 px-8 lg:px-20 lg:space-y-6">
            <div className="">
              <p className="font-libre text-3xl lg:text-6xl text-primary italic">
                Thank You
              </p>
              <p className="font-sora text-primary-black text-3xl lg:text-5xl">
                for Showing Interest.
              </p>
            </div>
            <p className="text-[#8D8F9B] font-sora text-sm font-normal lg:px-0 px-8 lg:text-2xl">
              Our Team will get back to you as soon as we are ready to take you
              in.
            </p>
          </div>

          {/* <div className="bg-white flex-col flex items-center justify-start w-[100vw] "> */}
          <button className="bg-primary px-8 py-2 text-white rounded-lg mx-20  hidden lg:block font-sora">
            Join Waitlist
          </button>
          {/* </div> */}
        </div>

        <div className="px-10 lg:px-20 hidden lg:block">
          <img src="/icons/logo.svg" />
        </div>
      </div>
      <div className="bg-primary w-full lg:w-[40%] lg:pt-10 flex flex-col justify-between lg:items-center lg:min-h-screen">
        <div>
          <img
            src="/icons/logo-white.svg"
            className="hidden lg:block lg:h-14 "
          />
        </div>

        <div className="lg:absolute right-0 bottom-0">
          <img
            src="/icons/success-app-mobile.png"
            className="lg:hidden pt-10"
          />
          <img
            src="/icons/success-app-desktop.png"
            className="hidden lg:block h-[555px] w-[555px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
