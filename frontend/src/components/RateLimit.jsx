import { ZapIcon } from "lucide-react";

const RateLimit = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-primary/10 border border-primary/30 rounded-lg shadow-md">
        <div className="flex flex-col md:flex-row items-center p-6">
          <div className="flex-shrink-0 bg-primary/20 p-4 rounded-full mb-4 md:mb-0 md:mr-6">
            <ZapIcon className="size-10 text-primary" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Too Many Brews</h3>
            <p className="text-base-content mb-1">
              You've started too many brews in a short time. Let things settle
              for a moment.
            </p>
            <p className="text-sm text-base-content/70">
              Give it a few seconds — your next brew will be ready soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;
