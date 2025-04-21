import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
  const { updateStep, removeStep, selectStep, selectedStepId } =
    useFormProvider();

    
  return (
    <div
      className={cn(
        "border rounded-md p-2 cursor-pointer z-50  relative",
        selectedStepId === step.id ? "border-green-500 bg-green-50/50 border-dashed" : ""
      )}
      onClick={() => {
        selectStep(step.id);
      }}
    >
      <div className="absolute inset-0 -z-10">
        <div className="relative h-full -z-10 w-full bg-red [&>div]:absolute [&>div]:h-full [&>div]:w-full [&>div]:bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [&>div]:[background-size:16px_16px] [&>div]:[mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
          <div></div>
        </div>
      </div>
      <div className="flex items-center justify-between z-10">
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
