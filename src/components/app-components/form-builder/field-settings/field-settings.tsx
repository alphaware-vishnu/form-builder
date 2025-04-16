import { useFormProvider } from "@/providers";
import { FormField } from "@/types";
import FallbackSection from "./fallback-section";
import {
  ChevronDown,
  CircleAlert,
  GrabIcon,
  PlusCircle,
  Trash,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { OptionBuilder } from "./option-builder";

export const FieldSetting = () => {
  const formBuilderContext = useFormProvider();
  const selectedField: FormField = formBuilderContext.selectedField;

  const field: FormField = formBuilderContext.formFields.find(
    (item: FormField) => item.id === selectedField?.id
  );


  if (!selectedField) {
    return (
      <div className="flex items-center justify-center h-screen">
        <FallbackSection />
      </div>
    );
  }
  console.log('field', field)
  return (
    <div className="space-y-5 my-3">
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
          value={field?.placeholder || ""}
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
                  ...field?.validations,
                  required: checked,
                },
              })
            }
            id="required"
            checked={field?.validations?.required}
          />
          <label htmlFor="required" className="text-sm text-gray-600">
            Required
          </label>
        </div>
        {field.uid !== "dropdown" && (
          <div className="flex items-center gap-x-2">
            <div className="space-y-1">
              <p className="text-sm text-gray-700 ">Min length</p>
              <input
                onChange={(e) => {
                  formBuilderContext.updateField(field?.id, {
                    ...field,
                    validations: {
                      ...field.validations,
                      minLength: e.target.value,
                    },
                  });
                }}
                type="number"
                placeholder="eg - 5"
                className="p-2 border text-sm rounded-md w-full"
                value={field?.validations?.minLength || ""}
              />
            </div>

            <div className="space-y-1">
              <p className="text-sm text-gray-700 ">Max length</p>
              <input
                onChange={(e) => {
                  formBuilderContext.updateField(field?.id, {
                    ...field,
                    validations: {
                      ...field.validations,
                      maxLength: e.target.value,
                    },
                  });
                }}
                type="number"
                placeholder="eg - 10"
                className="p-2 border text-sm rounded-md w-full"
                value={field?.validations?.maxLength || ""}
              />
            </div>
          </div>
        )}
       { field.uid !== "dropdown" && <div className="space-y-1">
          <p className="text-sm text-gray-700 ">Pattern</p>
          <select
            onChange={(e) => {
              formBuilderContext.updateField(field?.id, {
                ...field,
                validations: {
                  ...field.validations,
                  pattern: e.target.value,
                },
              });
            }}
            className=" border p-2 text-xs w-full  rounded-md"
            name=""
            id=""
            value={field?.validations?.pattern || ""}
          >
            <option value={""}>Select a pattern</option>
            <option value={"^(\\+91[\\s-]?|91[\\s-]?|0)?[6-9]\\d{9}$"}>
              IND Phone number
            </option>

            <option value={"^[a-zA-Z0-9]+$"}>Alphanumeric</option>

            <option value={"^\\S+$"}>No white space</option>

            <option
              value={"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[\\W_]).{8,}$"}
            >
              Strong password
            </option>

            <option value={"^[a-zA-Z\\s]+$"}>Full name</option>

            <option value={"^[A-Z]+$"}>Uppercase</option>

            <option value={"^[a-z]+$"}>Lowercase</option>
          </select>
        </div>}
        {field.uid === "dropdown" && (
          <div className="flex flex-col gap-4">
            Options
            <OptionBuilder field={field} />
          </div>
        )}
      </div>
    </div>
  );
};
