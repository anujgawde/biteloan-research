import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <div className="py-6 bg-white flex justify-between w-full border-b px-6 lg:px-16 items-center fixed top-0 z-50">
        <div>
          <img src="/icons/logo.svg" className="h-8 lg:h-12" />
        </div>
        <div>
          <button className="bg-primary lg:px-6 lg:text-base px-3 py-2 text-white rounded-lg text-xs font-sora">
            Calculate Savings
          </button>
        </div>
      </div>
      <div className="lg:h-[90vh] flex items-center justify-center flex-col space-y-4 lg:space-y-8 z-0 py-16 px-8">
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
      <div className="relative flex justify-center pt-20 lg:pt-40">
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
            className="hidden lg:block z-30"
          />
          <img src="/icons/app-hand-mobile.webp" className="lg:hidden z-50" />
        </div>
      </div>
      <div className="font-sora text-center relative">
        <div className="ellipse3 h-[20vh] w-[20vw]">sdf</div>

        <div className="py-20 lg:space-y-4">
          <p className="text-primary text-2xl lg:text-4xl font-semibold">
            If you prepay ₹1000
          </p>
          <p className="text-base lg:text-2xl font-medium">
            how much can you save in loan interest?
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/icons/savings-mobile.webp" className=" lg:hidden" />
          <img
            src="/icons/savings-desktop.webp"
            className="lg:h-96 hidden lg:block"
          />
        </div>

        <div className="py-10 bg-white border-t  space-y-4 lg:space-y-6">
          <p className="italic font-libre lg:text-3xl">
            Saving calculator on biteloan
          </p>
          <div>
            <button className="bg-primary px-6 py-2 text-white rounded-lg text-lg font-sora">
              Calculate Savings
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9F9] flex flex-col justify-center w-full py-20 items-center px-8">
        <div className="w-full lg:w-1/2 space-y-20">
          <div className="space-y-6">
            <p className="text-center text-3xl font-sora">&#128233;</p>
            <p className="text-center text-2xl lg:text-3xl font-sora">
              We're inviting you <br></br>Join the BiteLoan Waitlist?
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
    </>
  );
}
