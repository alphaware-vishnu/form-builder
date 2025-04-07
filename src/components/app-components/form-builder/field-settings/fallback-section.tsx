import { FileX2 } from "lucide-react";

const FallbackSection = () => {
  return (
    <div className="flex items-center justify-center h-full ">
      <div className="flex gap-2  flex-col items-center justify-center h-full">
        <FileX2 strokeWidth={1} className="text-gray-400 w-10 h-10" />
        <p className="text-lg text-gray-800">No field selected</p>
        <p className="text-sm text-gray-600 text-center">
          Select a field to configure<br/> 
          it's properties
        </p>
      </div>
    </div>
  );
};

export default FallbackSection;
