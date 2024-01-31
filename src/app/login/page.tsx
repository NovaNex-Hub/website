"use client";


export default function Login () {
  return (
    <>
      <main className="w-[100%] grid items-center">
        <div className="content-card w-full mb-5 h-full rounded-t-lg px-8 mt-10 mx-10">
      <form className='mt-[100px] w-3/4 h-1/2 mx-72 px-10'>
      <div className="mb-1">
        <input className="h[60px] bg-white border-[#0F160F] border-2 rounded-sm w-1/2 py-2 px-3 text-[#0F160F] leading-tight focus:outline-none focus:shadow-outline mb-4" id="emailaddress" type="email" placeholder="Email Address" required></input>
        </div>
        
        <button type='submit' className='w-1/2 px-8 py-2 mb-4 font-semibold rounded-lg text-[#fff] bg-[#0F160F]'>Log in</button>
        <div>
        <button type='submit' className='w-1/2 px-8 py-2 mb-2 font-semibold rounded-lg text-[#fff] bg-[#0F160F]'>Connect Wallet</button>
        </div>
        </form>
        </div>
      </main>
    </>
  );
};
