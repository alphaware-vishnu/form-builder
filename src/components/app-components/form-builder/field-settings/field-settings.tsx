import { useFormProvider } from "@/providers";
import { FormField } from "@/types";
import FallbackSection from "./fallback-section";
import { CircleAlert } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ChangeEventHandler, useState } from "react";

export const FieldSetting = () => {
  const formBuilderContext = useFormProvider();
  const selectedField: FormField = formBuilderContext.selectedField;
  const [fieldMeta, setFieldMeta] = useState({
    name: selectedField?.name,
    placeholder: selectedField?.placeholder,
    label: selectedField?.label,
  });

  const field = formBuilderContext.formFields.find(
    (item) => item.id === selectedField?.id
  );

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const fieldData = formBuilderContext.updateField(selectedField?.id, {
      name: e.target.value,
    });
  };

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
          onChange={(e) => {
            formBuilderContext.updateField(selectedField?.id, {
              ...field,
              label: e.target.value,
            });
          }}
          className="p-2 border text-sm rounded-md w-full"
          value={field?.label}
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
          onChange={(e) => {
            formBuilderContext.updateField(field?.id, {
              ...field,
              placeholder: e.target.value,
            });
          }}
          className="p-2 border text-sm rounded-md w-full"
          value={field?.placeholder}
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
            onCheckedChange={(checked) =>
              formBuilderContext.updateField(field.id, {
                ...field,
                validations: {
                  ...field.validations,
                  required: checked,
                },
              })
            }
            id="required"
            checked={field.validations?.required}
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
