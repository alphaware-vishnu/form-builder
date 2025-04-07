import { useFormProvider } from "@/providers";
import { FormField } from "@/types";
import FallbackSection from "./fallback-section";
import { CircleAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

export const FieldSetting = () => {
  const formBuilderContext = useFormProvider();

  

  const selectedField: FormField = formBuilderContext.selectedField;
  if (!selectedField) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FallbackSection />
      </div>
    );
  }
  return (
    <div className="space-y-5 mt-3">
      <p className="text-xl inline-flex gap-2 items-center ">
        Field Setting{" "}
        <CircleAlert className="w-4 h-4 text-gray-600 " strokeWidth={1} />
      </p>
      <div className="space-y-1">
        <p className="text-sm text-gray-700 ">Field Label</p>
        <input
          className="p-2 border text-sm rounded-md w-full"
          value={selectedField?.label}
        />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-700 ">Field name</p>
        <input
          className="p-2 border text-sm rounded-md w-full"
          value={selectedField?.name}
        />
      </div>
      <div className="space-y-1">
        <p className="text-sm text-gray-700 ">Field placeholder</p>
        <input
          className="p-2 border text-sm rounded-md w-full"
          value={selectedField?.placeholder}
        />
      </div>
      <Separator orientation="horizontal" />
      <div className="space-y-5 mt-3">
        <p className="text-md inline-flex gap-2 items-center ">
          Field validations{" "}
          <CircleAlert className="w-4 h-4 text-gray-600 " strokeWidth={1} />
        </p>
        <div className="flex items-center space-x-2">
          <Switch
            id="required"
            checked={selectedField.validations?.required }
          />
          <label htmlFor="required" className="text-sm text-gray-600">
            Required
          </label>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="space-y-1">
            <p className="text-sm text-gray-700 ">Min length</p>
            <input
              type="number"
              placeholder="eg - 5"
              className="p-2 border text-sm rounded-md w-full"
              value={selectedField?.validations?.maxLength}
            />
          </div>

          <div className="space-y-1">
            <p className="text-sm text-gray-700 ">Max length</p>
            <input
              type="number"
              placeholder="eg - 10"
              className="p-2 border text-sm rounded-md w-full"
              value={selectedField?.validations?.maxLength}
            />
          </div>
        </div>
        <div className="space-y-1">
          <p className="text-sm text-gray-700 ">Pattern</p>
          <input
            className="p-2 border text-sm rounded-md w-full"
            value={selectedField?.validations?.pattern}
            placeholder="/$*[a-z]/"
          />
        </div>
      </div>
    </div>
  );
};
