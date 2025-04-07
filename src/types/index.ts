export type FieldType = "text" | "email" | "number" | "select" | "radio" | "checkbox";

export type FormField = {
    id:string
  uid: string;
  type: FieldType;
  label: string;
  name: string;
  placeholder?: string;
  validations?: {
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
  conditions?: {
    field: string;
    operator: "equals" | "not_equals";
    value: any;
  }[];
  options?: string[]; 
};