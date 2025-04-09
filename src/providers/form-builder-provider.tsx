import { FieldType, FormField } from "@/types";
import { DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";

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

  const updateField = (id: string, fieldData: FormField) => {
    const updatedData = formFields.map((field) => {
      return field.id === id
        ? {
            ...field,
            name: fieldData.name,
            label: fieldData.label,
            placeholder: fieldData.placeholder,
            validations: fieldData.validations
          }
        : field;
    });

    setFormFields(updatedData);
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
    if (active?.id !== over?.id) {
      setFormFields((items) => {
        const oldIndex = items.findIndex((items) => items.id === active.id);
        const newIndex = items.findIndex((items) => items.id === over?.id);
        return arrayMove(items, oldIndex, newIndex);
      });
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
    setSelectedField,
    removeField,
    updateField,
  };

  return <FormBuilderContext value={values}>{children}</FormBuilderContext>;
};

export const useFormProvider = () => {
  const formBuilderContext = useContext(FormBuilderContext);

  return formBuilderContext;
};
