import { FieldType, Form, FormField, Step } from "@/types";
import { DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { nanoid } from "nanoid";

interface FormBuilderContext {
  form: Form;
  fields: string[];
  addStep: () => void;
  updateStep: (stepId: string, stepData: Step) => void;
  removeStep: (stepId: string) => void;
  setFields: Dispatch<React.SetStateAction<string[]>>;
  handleDragEnd: (event: DragEndEvent) => void;
  handleDragStart: (event: DragEndEvent) => void;
  addField: (uid: UniqueIdentifier) => void;
  activeId: any;
  formFields: FormField[];
  selectField: (id: string) => void;
  selectedField: FormField | undefined;
  setSelectedField: Dispatch<SetStateAction<FormField | undefined>>;
  removeField: (id: string) => void;
  updateField: (id: string, fieldData: FormField) => void;
  selectStep: (stepId: string) => void;
}

const FormBuilderContext = createContext<FormBuilderContext>({
  form: {
    steps: [
      {
        id: "",
        title: "",
        description: "",
        fields: [],
      },
    ],
  },
  fields: [],
  addStep: () => {},
  updateStep: () => {},
  removeStep: () => {},
  setFields: () => {},
  handleDragEnd: () => {},
  handleDragStart: () => {},
  addField: () => {},
  activeId: null,
  formFields: [],
  selectField: () => {},
  selectedField: undefined,
  setSelectedField: () => {},
  removeField: () => {},
  updateField: () => {},
  selectStep: () => {},
});

export const FormBuilderProvider = ({ children }: PropsWithChildren) => {
  const [form, setForm] = useState<Form>({
    steps: [
      {
        id: "default-step",
        title: "Default Form",
        description: "Add default form description",
        fields: [],
      },
    ],
  });
  const [selectedStepId, setSelectedStepId] = useState<string>("default-step");
  const [fields, setFields] = useState<UniqueIdentifier[]>([]);

  const selectStep = (stepId: string) => {
    setSelectedStepId(stepId);
  };

  const formFields =
    form.steps.find((step) => step.id === selectedStepId)?.fields || [];
  const [activeId, setActiveId] = useState<any>();
  const [selectedField, setSelectedField] = useState<FormField>();

  const addStep = () => {
    const newStep: Step = {
      id: nanoid(),
      title: "Form title",
      description: "Form description",
      fields: [],
    };
    setForm((preval) => ({
      ...preval,
      steps: [...preval.steps, newStep],
    }));
  };

  const removeStep = (stepId: string) => {
    setForm((preval) => ({
      ...preval,
      steps: preval.steps.filter((step) => step.id !== stepId),
    }));
  };

  const updateStep = (stepId: string, stepData: Step) => {
    setForm((preval) => ({
      ...preval,
      steps: preval.steps.map((step) => (step.id === stepId ? stepData : step)),
    }));
  };

  //here later find step based on name instead of find eg - object[key]
  const selectField = (id: string) => {
    const step = form.steps.find((step) => step.id === selectedStepId);
    const field = step?.fields.find((field) => field.id === id);
    setSelectedField(field);
  };

  const updateField = (id: string, fieldData: FormField) => {
    const updatedForm: Form = {
      ...form,
      steps: form.steps.map((prevaStep) => {
        if (prevaStep.id === selectedStepId) {
          return {
            ...prevaStep,
            fields: prevaStep.fields.map((field) => {
              if (field.id === id) {
                return fieldData;
              }
              return field;
            }),
          };
        }
        return prevaStep;
      }),
    };

    setForm(updatedForm);
  };

  const addField = (uid: UniqueIdentifier) => {
    const id = nanoid();
    let type: FieldType;

    switch (uid) {
      case "date":
        type = "date";
        break;
      case "datetime":
        type = "datetime-local";
        break;
      case "password":
        type = "password";
        break;
        break;
      case "phone":
        type = "number";
        break;
      case "number":
        type = "number";
        break;
      case "email":
        type = "email";
        break;
      default:
        type = "text";
    }

    const baseField: FormField = {
      id,
      uid,
      type,
      label: `${
        uid.toString().charAt(0).toUpperCase() + uid.toString().slice(1)
      } `,
      name: `${uid}_${id}`,
      validations: {
        required: false,
      },
      conditions: [],
    };
    setForm((preval) => {
      return {
        ...preval,
        steps: preval.steps.map((prevStep) => {
          if (prevStep.id === selectedStepId) {
            return { ...prevStep, fields: [...prevStep.fields, baseField] };
          }
          return prevStep;
        }),
      };
    });
  };

  const removeField = (id: string) => {
    setForm((preval) => ({
      ...preval,
      steps: preval.steps.map((prevStep) => {
        if (prevStep.id === selectedStepId) {
          return {
            ...prevStep,
            fields: prevStep.fields.filter((field) => field.id !== id),
          };
        }
        return prevStep;
      }),
    }));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (over?.id == "canvas") {
      setFields((preVal) => [...preVal, active.id]);
      addField(active.id);
    }
    if (active?.id !== over?.id) {
      setForm((preval) => ({
        ...preval,
        steps: preval.steps.map((prevStep) => {
          if (selectedStepId === prevStep.id) {
            return {
              ...prevStep,
              fields: (function () {
                const oldIndex = prevStep.fields.findIndex(
                  (items) => items.id === active.id
                );
                const newIndex = prevStep.fields.findIndex(
                  (items) => items.id === over?.id
                );
                return arrayMove(prevStep.fields, oldIndex, newIndex);
              })(),
            };
          }
          return prevStep;
        }),
      }));
    }
  };

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(e.active.id);
  };

  const values = {
    form,
    fields,
    addStep,
    setFields,
    handleDragEnd,
    handleDragStart,
    activeId,
    addField,
    formFields,
    selectField,
    selectedField,
    setSelectedField,
    removeField,
    updateField,
    updateStep,
    removeStep,
    selectStep
  };

  return <FormBuilderContext value={values}>{children}</FormBuilderContext>;
};

export const useFormProvider = () => {
  const formBuilderContext = useContext(FormBuilderContext);
  return formBuilderContext;
};
