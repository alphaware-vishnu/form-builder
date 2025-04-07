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
  ListTodo,
  MailPlus,
  PhoneCall,
  Radio,
  Text,
  ToggleLeft,
  UserPlus,
} from "lucide-react";

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
