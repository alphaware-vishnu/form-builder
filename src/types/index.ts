import { UniqueIdentifier } from "@dnd-kit/core";

export type FieldType =
  | "text"
  | "email"
  | "number"
  | "dropdown"
  | "radio"
  | "checkbox"
  | "date"
  | "datetime-local"
  | "password";

export type FormField = {
  id: string;
  uid: UniqueIdentifier;
  type: FieldType;
  label: string;
  name: string;
  placeholder?: string;
  validations?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: any;
  };
  conditions?: {
    field: string;
    operator: "equals" | "not_equals";
    value: any;
  }[];
  options?: Option[];
};

type Option = {
  label: string;
  value: string;
};
