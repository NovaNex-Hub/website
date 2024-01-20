import { Button } from "./ui/button";

const NavBar = () => {
  return (
    <div className="flex h-20 mx-10 items-center justify-between">
      <div className="flex gap-2">
        <div className="font-bold text-3xl mr-10">NovaNex</div>
        <Button variant="custom1" size="lg" className="text-xl">
          Docs
        </Button>
        <Button variant="custom1" size="lg" className="text-xl">
          Marketplace
        </Button>
      </div>
      <div className="flex gap-6 font-medium text-xl">
        <Button variant="secondary" size="lg">
          Cart
        </Button>
        <Button variant="secondary" size="lg">
          Profile
        </Button>
        <Button variant="secondary" size="lg">
          Login
        </Button>
      </div>
    </div>
  );
};
export default NavBar;
