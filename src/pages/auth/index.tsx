import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Auth() {
  const router = useRouter();
  const signUpHandler = (e: any) => {
    e.preventDefault();
  };
  const signInHandler = (e: any) => {
    e.preventDefault();
  };
  console.log(router.query);
  useEffect(() => {
    router.push("?met=signup");
  }, []);
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="rounded-lg border w-full lg:w-1/3   space-y-8  py-8 px-8">
        <p className="text-4xl text-center">biteloan</p>

        <form
          onSubmit={
            router.query.met === "signup" ? signUpHandler : signInHandler
          }
          className="flex w-full flex-col space-y-2"
        >
          {router.query.met === "signup" && (
            <div className="flex justify-between w-full space-x-4">
              <div className="">
                <label>First Name</label>
                <input className="w-full rounded-md" />
              </div>
              <div>
                <label>Last Name</label>
                <input className="w-full rounded-md" />
              </div>
            </div>
          )}

          <div className="">
            <label>Email</label>
            <input className="w-full rounded-md" />
          </div>

          <div className="">
            <label>Mobile Number</label>
            <input className="w-full rounded-md" />
          </div>
          <div className="">
            <label>Password</label>
            <input type="password" className="w-full rounded-md" />
          </div>
          {router.query.met === "signup" && (
            <div className="">
              <label>Confirm Password</label>
              <input className="w-full rounded-md" />
            </div>
          )}
          <div className="pt-4">
            <button className="w-full rounded-md border-rounded border py-3">
              {router.query.met === "signup" ? "Sign Up" : "Sign In"}
            </button>
          </div>
        </form>
        {router.query.met === "signup" ? (
          <p className="text-center">
            Alread a member? <Link href="/auth?met=signin">Sign in!</Link>
          </p>
        ) : (
          <p className="text-center">
            New to biteloan? <Link href="/auth?met=signup">Sign up!</Link>
          </p>
        )}
      </div>
    </div>
  );
}
