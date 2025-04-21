import { Button } from "@/components/ui/button";
import { useFormProvider } from "@/providers";
import { Conditon, FormField } from "@/types";
import { CircleAlert, PlusCircle, Trash } from "lucide-react";

export const FieldConditions = ({ field }: { field: FormField }) => {
  const { addCondtion, form, removeCondition, updateCondition } = useFormProvider();
  console.log("form", form);
  const fields = form.steps.flatMap((step) => {
    return step.fields;
  });

  const editCondition = (id: string, key: string, condition: Conditon, value: unknown) => {
    updateCondition(id, {
      ...condition,
      [key]: value
    })
  }

  console.log("fields", fields);

  return (
    <div className="space-y-3">
      <p className="text-md inline-flex gap-2 items-center ">
        Field conditions{" "}
        <CircleAlert className="w-4 h-4 text-gray-600 " strokeWidth={1} />
      </p>

      <div className="flex flex-col gap-2">
        {field.conditions?.map((cond) => (
          <div className="grid relative shadow grid-cols-2 py-3 gap-3 border p-2 rounded-md">
            <div className=" absolute top-2 right-3 justify-end ">
              <Trash onClick={() => removeCondition(cond.id)} strokeWidth={2} className=" trash-btn" />
            </div>
            <div className="space-y-1 col-span-2">
              <p className="text-sm text-gray-700">Field</p>
              <select value={cond.field} onChange={(e) => editCondition(cond.id, 'field', cond, e.target.value)} className="select ">
                {fields.map((field) => (
                  <option key={field.id} value={field.name}>
                    {field.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">Operator</p>
              <select value={cond.operator} onChange={(e) => editCondition(cond.id, 'operator', cond, e.target.value)} name="" id="" className="select">
                {["equals", "not_equals", "in", "not_in", "contains"].map(
                  (operator) => (
                    <option key={operator} value={operator}>
                      {operator}
                    </option>
                  )
                )}
              </select>
            </div>
            <div className="space-y-1">
              <p className="text-sm text-gray-700">Value</p>
              <input
                onChange={(e) => editCondition(cond.id, 'value', cond, e.target.value)}
                value={cond.value}
                className=" rounded-md p-2 w-full border focus:outline-none text-xs"
              />
            </div>
          </div>
        ))}
      </div>
      <Button
        onClick={() => addCondtion()}
        size={"sm"}
        className="bg-blue-800/80 w-full cursor-pointer hover:bg-blue-800/60"
      >
        <PlusCircle />
        Add condtion{" "}
      </Button>
    </div>
  );
};
