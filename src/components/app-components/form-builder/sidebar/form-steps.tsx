import { Button } from "@/components/ui/button";
import { useFormProvider } from "@/providers";
import { Step } from "@/types";
import { GripVertical, PlusCircle, Trash } from "lucide-react";

export const FormSteps = () => {
  const formBuilderContext = useFormProvider();

  const steps = formBuilderContext?.form.steps;
  console.log("steps", steps);
  return (
    <div className="p-2">
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-700">Steps</p>
        <Button
          onClick={formBuilderContext?.addStep}
          size={"icon"}
          variant={"main"}
        >
          <PlusCircle />
        </Button>
      </div>
      <div className="space-y-3 mt-3">
        {steps.map((step) => (
          <FormStep step={step} />
        ))}
      </div>
    </div>
  );
};

const FormStep = ({ step }: { step: Step }) => {
  const { updateStep, removeStep, selectStep } = useFormProvider();
  return (
    <div
      className="border rounded-md p-2 cursor-pointer "
      onClick={() => {
        selectStep(step.id);
      }}
    >
      <div className="flex items-center justify-between">
        <GripVertical className="w-3 h-3" strokeWidth={1} />
        <div>
          <Trash className="trash-btn" onClick={() => removeStep(step.id)} />
        </div>
      </div>
      <div>
        <input
          onChange={(e) => {
            updateStep(step.id, {
              ...step,
              title: e.target.value,
            });
          }}
          className="text-xs block focus:outline-none   text-gray-900"
          value={step.title}
        />
        <textarea
          onChange={(e) => {
            updateStep(step.id, {
              ...step,
              description: e.target.value,
            });
          }}
          className="text-xs block italic text-wrap focus:outline-none w-full text-gray-600"
          value={step.description}
        />
      </div>
    </div>
  );
};
