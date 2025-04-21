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

export type OperatorType =
  | "equals"
  | "not_equals"
  | "contains"
  | "in"
  | "not_in";

export interface Conditon {
  id: string;
  field: string;
  operator: OperatorType;
  value: any;
}

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
  conditions?: Conditon[];
  options?: Option[];
  orientation?: "horizontal" | "vertical";
};

export type Option = {
  id: string;
  label: string;
  value: string;
};

export interface Step {
  id: string;
  title: string;
  description?: string;
  fields: FormField[];
}

export interface Form {
  steps: Step[];
}
