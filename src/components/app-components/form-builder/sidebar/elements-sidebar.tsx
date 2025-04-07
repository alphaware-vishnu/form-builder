import { Search } from "lucide-react";
import { FormElements } from "./form-elements";

export const ElementsSidebar = () => {
  return (
    <div className="space-y-3 mt-3">
      <div className="rounded-md flex items-center w-full border shadow-sm pl-1">
        <Search strokeWidth={1} />
        <input
          placeholder="Search elements"
          className="w-full h-full focus:border-none focus:ring-0 focus:outline-0 p-2"
        />
      </div>
      <FormElements />
    </div>
  );
};
