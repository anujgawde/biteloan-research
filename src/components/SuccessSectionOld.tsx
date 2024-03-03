import Link from "next/link";

export default function SuccessSection() {
  return (
    <>
      <div className=" flex-col lg:flex-row flex items-center justify-between min-h-screen  ">
        <div className=" flex-col flex items-center lg:justify-between lg:items-start py-10 lg:w-[60%] text-center lg:text-start lg:h-screen">
          <div className="space-y-8 flex-col flex lg:block items-center">
            <div className="px-10 lg:hidden lg:px-20">
              <Link href="/">
                <img className="" src="/icons/logo.svg" />
              </Link>
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
                Our Team will get back to you as soon as we are ready to take
                you in.
              </p>
            </div>

            {/* <div className="bg-white flex-col flex items-center justify-start w-[100vw] "> */}
            <button className="bg-primary px-8 py-2 text-white rounded-lg mx-20  hidden lg:block font-sora">
              Join Waitlist
            </button>
            {/* </div> */}
          </div>

          <div className="px-10 lg:px-20 hidden lg:block">
            <Link href="/">
              <img src="/icons/logo.svg" />
            </Link>
          </div>
        </div>
        <div className="bg-primary w-full lg:w-[40%] lg:pt-10 flex flex-col justify-between lg:items-center lg:min-h-screen">
          <div>
            <Link href="/">
              <img
                src="/icons/logo-white.svg"
                className="hidden lg:block lg:h-14 "
              />
            </Link>
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
    </>
  );
}
