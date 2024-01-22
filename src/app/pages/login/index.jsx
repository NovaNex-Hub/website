import Link from "next/link";
import AuthHeader from "../../component/auth/header";
import NovanexInput from "../../component/input";
import Button from "../../component/button";

const Login = () => {
  return (
    <main className="flex h-screen p-5">
      <section className="border px-4 md:px-8 py-10 rounded-lg bg-white w-full md:w-[500px]">
        <AuthHeader title={"Connect to Novanex Hub!"} description={""} />
        <form action="" className="w-full mt-6">
          <NovanexInput
            title="Email address"
            placeholder={"Enter Email address"}
            type={"email"}
            name={"email"}
          />

          <Button href={"/dashboard"} css={"my-3"}>
            Sign in
          </Button>
          <p className="text-center">
            Or ? <Link className="text-novanex">Connect Wallet</Link>
          </p>
        </form>
      </section>
    </main>
  );
};

export default Login;
