"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Login() {
  return (
    <>
      <main className="w-[100%] grid items-center mt-[150px]">
        <div className="content-card w-full mb-5 h-full rounded-t-lg px-8 mx-10">
          <form className='mt-4 w-3/4 h-1/2 mx-72 px-10'>
            <div className="mb-1">
              <input className="bg-white h-[50px] border-[#0F160F] border-2 rounded-sm w-1/2 py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline mt-2" id="emailaddress" type="email" placeholder="Email Address" required></input>
            </div>

            <button type='submit' className='w-1/2 px-8 py-2 mb-2 font-semibold rounded-lg text-[#fff] bg-[#315f31] mt-3'>Log in</button>
            <div className='mx-40'>
              <ConnectButton/>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}