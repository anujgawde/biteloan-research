import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <>
      <div className="py-6 bg-white flex justify-between w-full border-b px-6 lg:px-16 items-center fixed top-0 z-50">
        <div>
          <img src="/icons/logo.svg" className="h-8 lg:h-12" />
        </div>
        <div>
          <Link
            href={{ pathname: "https://bit.ly/3v30jTl", query: { k: "h" } }}
          >
            <button
              name="Navbar Calculate Savings"
              id="nav-calculate-savings"
              className="bg-primary lg:px-6 lg:text-base px-3 py-2 text-white rounded-lg text-xs font-sora"
            >
              Calculate Savings
            </button>
          </Link>
        </div>
      </div>

      <div className="h-screen lg:hidden flex flex-col justify-between relative ">
        <div className="pt-32 ">
          <p className="lg:tracking-[0.7rem] tracking-[0.4rem] text-center text-lg lg:text-2xl">
            INTRODUCING
          </p>
          <div className="flex justify-center">
            {/* <Link href="/"> */}
            <img src="/icons/logo.svg" className="lg:h-40 h-20" />
            {/* </Link> */}
          </div>

          <p className="lg:text-2xl text-lg text-center font-libre italic">
            Transforming how you manage, repay, and think about your loans.
          </p>
        </div>
        <div className="bg-primary py-10 lg:py-20 overflow-hidden lg:hidden bottom-0 z-10">
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
          <div className="flex justify-center">
            <img
              src="/icons/app-hand-mobile.webp"
              className="lg:hidden z-50 absolute bottom-0 right-0 "
            />
            <img
              src="/icons/app-hand-desktop.png"
              className="hidden lg:block z-50 absolute bottom-0"
            />
          </div>
        </div>
      </div>

      <div className="min-h-screen px-8 py-44 hidden lg:block">
        <div className="space-y-4 lg:space-y-8 flex items-center justify-center flex-col">
          <p className="lg:tracking-[0.7rem] tracking-[0.4rem] text-center text-lg lg:text-2xl">
            INTRODUCING
          </p>
          <div>
            {/* <Link href="/"> */}
            <img src="/icons/logo.svg" className="lg:h-40 h-20" />
            {/* </Link> */}
          </div>

          <p className="lg:text-2xl text-lg text-center font-libre italic">
            Transforming how you manage, repay, and think about your loans.
          </p>
        </div>
      </div>

      <div className="bg-primary max-h-[400px] min-h-[400px] flex-col hidden lg:flex justify-center items-center relative mt-8">
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
        <img
          src="/icons/app-hand-desktop.png"
          className="hidden lg:block z-30 bottom-0 absolute -mr-24"
        />
      </div>

      <div className="bg-black w-full flex flex-col lg:text-lg text-sm items-center py-10 font-sora text-center pb-32">
        <p className="text-5xl font-bold text-red-600 ">&#x2049;&#xFE0F;</p>

        <div className="space-y-4 py-8 px-8">
          <p className="lg:text-4xl text-2xl text-white ">
            Why you need Biteloan?
          </p>

          <p className="text-grey-400 ">
            Navigating the world of loans can often feel like trying to find
            your way through a maze without a map.
            <span className="block">
              Here&apos;s what you&apos;re up against:
            </span>
          </p>
        </div>
        <div className="grid lg:grid-cols-2 lg:px-56 px-8 gap-x-10 gap-y-10">
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/disjointed-communication.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Disjointed Communication
            </p>
            <p className="text-grey-500">
              Tired of piecing together your loan status from countless emails
              and messages?
            </p>
          </div>
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/prepayment-puzzles.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Prepayment puzzles
            </p>
            <p className="text-grey-500">
              Prepayment are a hassle due to bank&apos;s unnecessary policies,
              such as branch visits, prepayment caps, and document submissions?
            </p>
          </div>
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/multiple-loans.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Multiple Loans
            </p>
            <p className="text-grey-500">
              Struggling several loans at once can feel like a balancing act
              without a safety net.
            </p>
          </div>
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/interest-rate.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Interest Rate Confusion
            </p>
            <p className="text-grey-500">
              Floating interest rates can leave your repayment schedule in flux,
              making it challenging to plan your finances.
            </p>
          </div>
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/unclear-communication.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Unclear Communication
            </p>
            <p className="text-grey-500">
              Feeling left in the dark by your bank&apos;s communication (or
              lack thereof)?
            </p>
          </div>
          <div className=" flex flex-col justify-start items-center">
            <img
              src="/icons/financial-decisions.webp"
              className="object-cover w-full pb-6"
            />
            <p className="font-libre italic text-primary-faded text-3xl pb-2">
              Financial Decisions
            </p>
            <p className="text-grey-500">
              While securing loans has become easier, managing them effectively
              is still a hurdle for many.
            </p>
          </div>
        </div>
        <div className="bg-white bg-opacity-[7%] my-14 px-4 py-4 mx-4 rounded-2xl">
          <p className="text-white lg:text-md text-xs">
            Our goal is to address these challenges head-on, providing you with
            the tools and knowledge to take control of your loan management
            journey
          </p>
        </div>
        <Link href={{ pathname: "https://bit.ly/3uWoWB9", query: { k: "h" } }}>
          <button
            name="Why Biteloan Join Waitlist"
            id="why-biteloan-join-waitlist"
            className="text-black rounded-lg bg-primary-faded px-6 py-2 text-lg font-sora"
          >
            Join Waitlist
          </button>
        </Link>
      </div>
      <div className="font-sora text-center relative">
        <div className="ellipse3 h-[20vh] w-[20vw]"></div>

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
            <Link
              href={{ pathname: "https://bit.ly/3v30jTl", query: { k: "h" } }}
            >
              <button
                name="Landing Page Calculate Savings"
                id="landing-calculate-savings"
                className="bg-primary px-6 py-2 text-white rounded-lg text-lg font-sora"
              >
                Calculate Savings
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#F8F9F9] flex flex-col justify-center w-full py-20 items-center px-8">
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

          <Link
            className="bg-primary px-8 py-2 text-white rounded-lg mx-auto  hidden lg:block font-sora text-center w-1/3"
            href={{ pathname: "https://bit.ly/3uWoWB9", query: { k: "h" } }}
          >
            <button name="Invite Join Waitlist" id="invite-join-waitlist">
              Join Waitlist
            </button>
          </Link>
        </div>
        <Link
          className="bg-primary px-8 py-2 text-white rounded-lg  font-sora text-center my-12 lg:hidden"
          href={{ pathname: "/calculator", query: { k: "h" } }}
        >
          <button name="Invite Join Waitlist" id="invite-join-waitlist">
            Join Waitlist
          </button>
        </Link>
      </div>
      <div className="bg-black px-8 lg:px-14 py-12 lg:py-6">
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center w-full ">
          <Link href="/">
            <img src="/icons/logo-white.svg" className="h-14" />
          </Link>
          <p className="text-[#434343] text-center lg:text-left font-libre italic lg:text-xl mb-8 mt-2 lg:hidden">
            Track Manage Save Loans
          </p>
          <Link
            className="bg-primary px-8 py-2  text-white rounded-lg font-sora text-center "
            href={{
              pathname: "https://wa.me/9892320184",
            }}
          >
            <button name="Contact Us" id="contact-us" className="">
              Contact Us
            </button>
          </Link>
        </div>
        <p className="text-[#434343] hidden lg:block text-center lg:text-left font-libre italic lg:text-xl mb-8 mt-2 lg:">
          Track Manage Save Loans
        </p>

        <div className="bg-opacity-15 bg-white w-full h-[0.050rem] my-6"></div>

        <div className="space-x-4  items-center justify-center lg:hidden flex">
          <Link href="/">
            <button name="Facebook Link" id="facebook">
              <img src="/icons/social-2.svg" />
            </button>
          </Link>
          <Link href="/">
            <button name="Linkedin Link" id="linkedin">
              <img src="/icons/social-1.svg" />
            </button>
          </Link>
          <Link href="/">
            <button name="Instagram Link" id="instagram">
              <img src="/icons/social.svg" />
            </button>
          </Link>
        </div>
        <p className="text-grey-500 text-sm text-center lg:hidden">
          ©2024 Biteloan All Rights Reserved
        </p>
        <div className="flex justify-between items-center">
          <p className="text-grey-500 text-sm text-center hidden lg:block">
            ©2024 Biteloan All Rights Reserved
          </p>

          <div className="space-x-4  items-center hidden lg:flex">
            <Link href="/">
              <button name="Facebook Link" id="facebook">
                <img src="/icons/social-2.svg" />
              </button>
            </Link>
            <Link href="/">
              <button name="Linkedin Link" id="linkedin">
                <img src="/icons/social-1.svg" />
              </button>
            </Link>
            <Link href="/">
              <button name="Instagram Link" id="instagram">
                <img src="/icons/social.svg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
