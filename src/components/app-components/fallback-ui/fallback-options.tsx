import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";

type Props = {
  openSettings: () => void;
};

const FallbackOption = ({ openSettings }: Props) => {
  return (
    <div className="border p-2 mt-1 space-y-3 rounded-md border-dashed">
      <p className="text-start text-xs italic text-gray-600">
        Click below to open field settings and add options.
      </p>
      <Button
        type="button"
        className="text-xs "
        onClick={openSettings}
        variant={"main"}
        size={"sm"}
      >
        <Settings className="w-2 h-2" /> Settings
      </Button>
    </div>
  );
};

export default FallbackOption;
