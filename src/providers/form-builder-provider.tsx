import { FieldType, FormField } from "@/types";
import { DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { nanoid } from "nanoid";
const FormBuilderContext = createContext<any>(null);

export const FormBuilderProvider = ({ children }: PropsWithChildren) => {
  const [formBuilderState, setFormBuilderState] = useState({});
  const [fields, setFields] = useState<UniqueIdentifier[]>([]);
  const [formFields, setFormFields] = useState<FormField[]>([]);
  const [activeId, setActiveId] = useState<any>();
  const [selectedField, setSelectedField] = useState<FormField>();

  const selectField = (id: string) => {
    const field = formFields.find((field) => field.id === id);
    setSelectedField(field);
  };

  console.log("selected", selectedField);

  const updateField = ()=>{
    const field = selectField
  }

  const addField = (uid: UniqueIdentifier) => {
    const id = nanoid();
    const baseField: FormField = {
      id,
      uid,
      type: "text",
      label: `${
        uid.toString().charAt(0).toUpperCase() + uid.toString().slice(1)
      } `,
      name: `${uid}_${id}`,
      validations: {
        required: false,
      },
      conditions: [],
    };
    setFormFields((preval) => [...preval, baseField]);
  };

  const removeField = (id: string) => {
    setFormFields((preval) => preval.filter((field) => field.id !== id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    setActiveId(null);
    if (over?.id == "canvas") {
      setFields((preVal) => [...preVal, active.id]);
      addField(active.id);
    }
  };

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(e.active.id);
  };

  const values = {
    formBuilderState,
    setFormBuilderState,
    fields,
    setFields,
    handleDragEnd,
    handleDragStart,
    activeId,
    addField,
    formFields,
    selectField,
    selectedField,
    removeField
  };

  return <FormBuilderContext value={values}>{children}</FormBuilderContext>;
};

export const useFormProvider = () => {
  const formBuilderContext = useContext(FormBuilderContext);

  return formBuilderContext;
};
