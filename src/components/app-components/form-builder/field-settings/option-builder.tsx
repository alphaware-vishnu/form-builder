import { Button } from "@/components/ui/button";
import { useFormProvider } from "@/providers";
import { FormField, Option } from "@/types";
import {
  ChevronDown,
  FireExtinguisher,
  GrabIcon,
  GripVertical,
  PlusCircle,
  Trash,
} from "lucide-react";
import { MouseEventHandler, useState } from "react";

interface OptionBuilderProps {
  field: FormField;
}

export const OptionBuilder = ({ field }: OptionBuilderProps) => {
  const formBuilderContext = useFormProvider();
  const [selectedOption, setSelectedOption] = useState<string>("");
  console.log("selectedOption", selectedOption);
  const handleAddOption = () => {
    const option: Option = {
      id: Date.now().toLocaleString(),
      label: "",
      value: "",
    };
    formBuilderContext.updateField(field?.id, {
      ...field,
      options: [...(field.options || []), option],
    });

    return option;
  };

  const handleDeleteOption = (
    e: React.MouseEvent<SVGSVGElement>,
    optionId: string
  ) => {
    e.stopPropagation();
    formBuilderContext.updateField(field?.id, {
      ...field,
      options: field.options?.filter((option) => option.id !== optionId),
    });
  };
  const handleUpdateOption = (
    optionId: string,
    value: string,
    key: "label" | "value"
  ) => {
    const updatedOption = field.options?.find(
      (option) => option.id === optionId
    );
    if (updatedOption) {
      updatedOption[key] = value || "";
    }
    formBuilderContext.updateField(field?.id, {
      ...field,
      options: field.options?.map((option) => {
        if (option.id === optionId) {
          return updatedOption;
        } else return option;
      }),
    });
  };
  return (
    <div>
      {field.options?.map((option) => (
        <div
          onClick={() => {
            if (selectedOption === option.id) {
              setSelectedOption("");
              return;
            }
            setSelectedOption(option.id);
          }}
          className="border rounded-md p-2 text-xs cursor-pointer my-2"
        >
          <div className="flex justify-between gap-2  items-center">
            <div className="flex items-center gap-x-1 ">
              <GripVertical
                strokeWidth={2}
                className="w-3 h-3 cursor-grab text-gray-700"
              />
              <p className="text-xs  text-gray-900">
                {option.label || "Option"}
              </p>
            </div>
            <div className="flex items-center gap-x-3">
              <ChevronDown
                strokeWidth={2}
                className="w-7 z-10 text-gray-600 hover:bg-gray-100 rounded-sm transition-all p-2  h-7 cursor-pointer"
              />

              <Trash
                onClick={(e) => handleDeleteOption(e, option.id)}
                strokeWidth={2}
                className="w-7 z-10 text-red-500 hover:bg-red-200 rounded-sm transition-all p-2  h-7 cursor-pointer"
              />
            </div>
          </div>
          {selectedOption === option.id && (
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Label</p>
                <input
                  onClick={(e) => e.stopPropagation()}
                  value={option.label}
                  onChange={(e) =>
                    handleUpdateOption(option.id, e.target.value, "label")
                  }
                  className="border p-2 text-xs rounded-md w-full"
                />
              </div>
              <div>
                <p className="text-sm text-gray-600">Value</p>
                <input
                  onClick={(e) => e.stopPropagation()}
                  value={option.value}
                  onChange={(e) =>
                    handleUpdateOption(option.id, e.target.value, "value")
                  }
                  className="border p-2 text-xs rounded-md w-full"
                />
              </div>
            </div>
          )}
        </div>
      ))}
      <Button
        onClick={() => {
          const option = handleAddOption();
          setSelectedOption(option.id);
        }}
        size={"sm"}
        className="bg-blue-800/80 w-full cursor-pointer hover:bg-blue-800/60"
      >
        <PlusCircle />
        Add option{" "}
      </Button>
    </div>
  );
};
