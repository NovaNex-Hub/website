import MaxWidthWrapper from "./MaxWidthWrapper";

export const Footer = () => {
  return (
    <div className="grid grid-cols-5 m-10">
      <div className="flex items-center font-bold text-xl">NovaNex</div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">Product</div>
        <div>Features</div>
        <div>Workload</div>
        <div>Product</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">Product</div>
        <div>Features</div>
        <div>Workload</div>
        <div>Time</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">Company</div>
        <div>Real Work</div>
        <div>About & Contact</div>
        <div>Careers</div>
      </div>
      <div className="flex flex-col gap-2">
        <div className="font-bold text-xl">Resources</div>
        <div>Blog</div>
        <div>Help & About</div>
        <div>Customer</div>
      </div>
    </div>
  );
};
