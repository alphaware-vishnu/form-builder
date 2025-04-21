import { FormField, OperatorType } from "@/types";
import {
  BadgeCheck,
  Bird,
  Calendar,
  CalendarClock,
  CircleUser,
  EyeOff,
  Hash,
  LetterText,
  List,
  ListCheck,
  ListTodo,
  MailPlus,
  PhoneCall,
  Radio,
  Text,
  ToggleLeft,
  UserPlus,
} from "lucide-react";
import * as yup from "yup";
export function iconRenderer(element: {
  label: string;
  type: string;
  iconType?: string;
}) {
  let icon;

  switch (element.iconType || element.type) {
    case "text":
      icon = LetterText;
      break;
    case "checkbox-group":
      icon = ListCheck;
      break;
    case "first-name":
      icon = CircleUser;
      break;
    case "last-name":
      icon = CircleUser;
      break;
    case "username":
      icon = UserPlus;
      break;
    case "phone":
      icon = PhoneCall;
      break;
    case "password":
      icon = EyeOff;
      break;
    case "textarea":
      icon = Text;
      break;
    case "number":
      icon = Hash;
      break;
    case "checkbox":
      icon = BadgeCheck;
      break;
    case "radio":
      icon = Radio;
      break;
    case "select":
      icon = ListTodo;
      break;
    case "date":
      icon = Calendar;
      break;
    case "datetime":
      icon = CalendarClock;
      break;
    case "email":
      icon = MailPlus;
      break;
    case "phone":
      icon = PhoneCall;
      break;
    case "switch":
      icon = ToggleLeft;
      break;
    case "dropdown":
      icon = List;
      break;
    default:
      icon = Bird;
  }
  return icon;
}

export function conditionCheck(
  operator: OperatorType,
  conditionalValue: string,
  fieldValue: string
) {
  switch (operator) {
    case "equals":
      return fieldValue === conditionalValue;
    case "not_equals":
      return fieldValue !== conditionalValue;
    case "in":
      return (
        Array.isArray(conditionalValue) && conditionalValue.includes(fieldValue)
      );
    case "not_in":
      return (
        Array.isArray(conditionalValue) &&
        !conditionalValue.includes(fieldValue)
      );
    case "contains":
      return (
        typeof fieldValue === "string" && fieldValue.includes(conditionalValue)
      );
  }
}

export function generateValidationSchema(fields: FormField[]) {
  const shape: Record<string, yup.AnySchema> = {};
  fields.forEach((field) => {
    shape[field.name] = generateSchemaForField(field);
  });

  return yup.object().shape(shape);
}

export function generateSchemaForField(field: FormField) {
  const { type, label, validations = {}, conditions = [] } = field;
  let schema: yup.AnySchema;
  switch (type) {
    case "text":
    case "password":
    case "dropdown":
    case "radio":
      schema = yup.string();
      break;
    case "number":
      schema = yup.number();
      break;
    case "email":
      schema = yup.string().email();
      break;
    case "checkbox":
      schema = yup.boolean();
      break;
    case "date":
      schema = yup.date();
      break;
    default:
      schema = yup.string();
  }

  if (validations.required) {
    schema = schema.required(`${label} is required`);
  }

  if (validations.minLength) {
    if (type === "number") {
      schema = (schema as yup.NumberSchema).min(
        validations.minLength,
        `${label} must be atleast ${validations.minLength}`
      );
    }
    if (type === "text") {
      schema = (schema as yup.StringSchema).min(
        validations.minLength,
        `${label} must be atleast ${validations.minLength} characters long`
      );
    }
  }

  if (validations.maxLength) {
    if (type === "number") {
      schema = (schema as yup.NumberSchema).max(
        validations.maxLength,
        `${label} must be atmost ${validations.maxLength}`
      );
    }
    if (type === "text") {
      schema = (schema as yup.StringSchema).max(
        validations.maxLength,
        `${label} must be atmost ${validations.maxLength} characters long`
      );
    }
  }
  if (validations.pattern) {
    schema = (schema as yup.StringSchema).matches(
      validations.pattern as RegExp,
      `${label} is invalid`
    );
  }
  if (conditions?.length > 0 && conditions.every((cond) => cond.field !== "")) {
    const fieldNames = conditions.map((cond) => cond.field);

    schema = schema.when(fieldNames, (fieldValues: any[], schema) => {
      const allConditionsMet = conditions.every((cond, index) => {
        const currentFieldValue = fieldValues[index];
        return conditionCheck(cond.operator, cond.value, currentFieldValue);
      });

      return allConditionsMet
        ? schema.required("Field is required as per conditions")
        : schema.notRequired();
    });
  }

  return schema;
}
