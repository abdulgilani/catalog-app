import { Link } from "react-router";
import { Coffee, PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/10 sticky top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section: Scales down on very small screens */}
          <div className="flex items-center gap-2">
            <Coffee className="size-8 sm:size-10 text-primary" />
            <h1 className="text-xl sm:text-3xl font-bold text-primary tracking-tight">
              BrewNotes
            </h1>
          </div>

          {/* Actions Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            <Link to={"/make"} className="btn btn-primary btn-sm sm:btn-md">
              <PlusIcon className="size-5" />
              {/* Label: Hidden on mobile, visible from tablet (sm) up */}
              <span className="hidden sm:inline">Add Brew</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
