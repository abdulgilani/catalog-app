import { Link } from "react-router";
import { Coffee, PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Coffee className="size-10"></Coffee>
            <h1 className="text-3xl font-bold text-primary tracking-tight">
              BrewNotes
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Link to={"/make"} className="btn btn-primary">
              <PlusIcon className="size-5"></PlusIcon>
              <span>Add Brew</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
