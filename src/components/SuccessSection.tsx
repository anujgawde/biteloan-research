import { useRouter } from "next/router";
import Marquee from "react-fast-marquee";
import { rupeeFormat } from "@/utils/utils";
import Link from "next/link";
export default function SuccessSection(props: any) {
  const router = useRouter();
  const queryName = router.query.k;

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
              alt="see-below"
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
          <Link href="/">
            <img
              alt="biteloan-logo"
              src="/icons/logo.svg"
              className="lg:h-40 h-20"
            />
          </Link>
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
            alt="user-hand"
            src="/icons/app-hand-desktop.png"
            className="hidden lg:block z-50"
          />
          <img
            alt="user-hand"
            src="/icons/app-hand-mobile.webp"
            className="lg:hidden z-50"
          />
        </div>
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
              alt="disjointed-communication"
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
              alt="prepayment-puzzles"
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
              alt="multiple-loans"
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
              alt="interest-rate"
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
              alt="unclear-communication"
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
              alt="financial-decisions"
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
        <Link href={{ pathname: "/calculator", query: { k: "h" } }}>
          <button
            name="Why Biteloan Join Waitlist Success"
            id="why-biteloan-join-waitlist-success"
            className="text-black rounded-lg bg-primary-faded px-6 py-2 text-lg font-sora"
          >
            Join Waitlist
          </button>
        </Link>
      </div>
      <div className="bg-[#F8F9F9] flex flex-col justify-center w-full py-20 items-center px-8">
        <div className="w-full lg:w-1/2 space-y-20">
          <div className="space-y-6">
            <p className="text-center text-3xl font-sora">&#128233;</p>
            <p className="text-center text-2xl lg:text-3xl font-sora">
              We&apos;re inviting you <br></br>Join the BiteLoan Waitlist?
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
            <div className="space-y-2">
              <div className="flex  flex-col space-y-2 lg:space-x-4 items-center">
                <img alt="magnet-icon" src="/icons/magnet-icon.svg" />
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
                <img alt="key-icon" src="/icons/key-icon.svg" />
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
                <img alt="star-icon" src="/icons/star-icon.svg" />
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
                <img alt="add-icon" src="/icons/add-icon.svg" />
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
        </div>
        <Link
          className="bg-primary px-8 py-2 text-white rounded-lg  font-sora text-center my-12"
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
            <img
              alt="logo-white"
              src="/icons/logo-white.svg"
              className="h-14"
            />
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
              <img alt="facebook" src="/icons/social-2.svg" />
            </button>
          </Link>
          <Link href="/">
            <button name="Linkedin Link" id="linkedin">
              <img alt="linkedin" src="/icons/social-1.svg" />
            </button>
          </Link>
          <Link href="/">
            <button name="Instagram Link" id="instagram">
              <img alt="instagram" src="/icons/social.svg" />
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
                <img alt="facebook" src="/icons/social-2.svg" />
              </button>
            </Link>
            <Link href="/">
              <button name="Linkedin Link" id="linkedin">
                <img src="/icons/social-1.svg" />
              </button>
            </Link>
            <Link href="/">
              <button name="Instagram Link" id="instagram">
                <img alt="instagram" src="/icons/social.svg" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className=" flex-col lg:flex-row flex items-center justify-between min-h-screen  ">
      <div className=" flex-col flex items-center lg:justify-between lg:items-start py-10 lg:w-[60%] text-center lg:text-start lg:h-screen">
        <div className="space-y-8 flex-col flex lg:block items-center">
          <div className="px-10 lg:hidden lg:px-20">
            <Link href="/">
              <img alt="biteloan-logo" className="" src="/icons/logo.svg" />
            </Link>
          </div>
          <div className=" lg:px-0 lg:mx-10 lg:h-56 lg:w-56 h-40 w-40">
            <img
              alt="success-person"
              src="/icons/success-person.png"
              className=" h-full w-full"
            />
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
            <p className="text-[#8D8F9B] font-sora text-sm font-normal lg:px-0 px-8 lg:text-xl">
              Our Team will get back to you as soon as we are ready to take you
              in.
            </p>
          </div>
        </div>

        <div className="px-10 lg:px-20 hidden lg:block">
          <Link href="/">
            <img alt="biteloan-logo" src="/icons/logo.svg" />
          </Link>
        </div>
      </div>
      <div className="bg-primary w-full lg:w-[40%] lg:pt-10 flex flex-col justify-between lg:items-center lg:min-h-screen relative">
        <div>
          <Link href="/">
            <img
              alt="biteloan-white-white"
              src="/icons/logo-white.svg"
              className="hidden lg:block lg:h-14 "
            />
          </Link>
        </div>

        <div className="flex justify-end w-full">
          <img
            alt="success-app"
            src="/icons/success-app-mobile.png"
            className="lg:hidden pt-10"
          />
          <img
            alt="success-app"
            src="/icons/success-app-desktop.png"
            className="hidden lg:block h-[555px] w-[555px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}
