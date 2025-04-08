import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useFormProvider } from "@/providers";
import { FormField } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import {
  GripVertical,
  PlusIcon,
  Save,
  ScanEye,
  Settings2,
  Trash,
} from "lucide-react";
import { PropsWithChildren } from "react";

export const Canvas = () => {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });
  const formBuilderContext = useFormProvider();

  const renderItem = (item: FormField) => {
    console.log('item', item)
    let element;
    switch (item.uid) {
      case "single-line":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "firstname":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "lastname":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "username":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "password":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "single-line":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "phone":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "email":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "textarea":
        element = (
          <FieldWrapper className="col-span-2" id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <textarea
                className="border w-full text-gray-600 rounded-md p-2"
                rows={3}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "date":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "datetime":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "number":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">{item.label}</p>
              <input
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
          </FieldWrapper>
        );
        break;
      default:
        element = (
          <div>
            <p>Coming soon</p>
          </div>
        );
    }

    return element;
  };

  return (
    <div
      id="canvas"
      ref={setNodeRef}
      className=" min-h-[80%] relative p-2 m-4 rounded-md"
    >
      <div className="sticky flex items-center shadow justify-between gap-2 top-6 p-2 w-full rounded-md bg-white border">
        <Button
          className="cursor-pointer font-normal"
          variant={"ghost"}
          size={"sm"}
        >
          <ScanEye strokeWidth={1} />
          Preview
        </Button>
        <Tabs defaultValue="content">
          <TabsList className="gap-4">
            <TabsTrigger
              className="text-sm cursor-pointer font-normal text-gray-700"
              value="content"
            >
              Content
            </TabsTrigger>
            <TabsTrigger
              className="text-sm cursor-pointer font-normal text-gray-700"
              value="workflow"
            >
              Workflow
            </TabsTrigger>
            <TabsTrigger
              className="text-sm cursor-pointer font-normal text-gray-700"
              value="share"
            >
              Share
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <Button
          className="cursor-pointer hover:text-white hover:bg-blue-800/60 font-normal bg-blue-800/80 text-white"
          variant={"outline"}
          size={"sm"}
        >
          <Save />
          Save
        </Button>
      </div>
      <div className="space-y-2 p-0 mt-4">
        <input
          className="border-none w-full block focus:outline-0  text-lg text-gray-800 font-medium"
          defaultValue={"Form title"}
        />
        <input
          className="border-none w-full block focus:outline-0  text-sm text-gray-600 font-normal"
          defaultValue={"A short description about your form"}
        />
      </div>
      {formBuilderContext.formFields.length ? (
        <div
          className={cn(
            isOver
              ? "bg-blue-50/10 border p-2 rounded-md h-[100%] gap-5 border-dashed border-blue-500"
              : "",
            "grid grid-cols-2 gap-5"
          )}
        >
          {formBuilderContext.formFields &&
            formBuilderContext.formFields.map((field: FormField) =>
              renderItem(field)
            )}
        </div>
      ) : (
        <FallbackCanvas />
      )}
    </div>
  );
};

const FieldWrapper = ({
  children,
  id,
  className,
}: PropsWithChildren<{ className?: string; id: string }>) => {
  const formBuilderContext = useFormProvider();
  return (
    <div className={cn("w-full  border rounded-sm mt-2 p-2", className)}>
      <div className="flex items-center justify-between">
        <GripVertical className="w-3 h-3 text-gray-600" />
        <div className="flex items-center gap-x-2">
          <Settings2
            onClick={() => formBuilderContext.selectField(id)}
            className="w-7 hover:bg-gray-100 rounded-sm transition-all p-2  h-7 cursor-pointer text-gray-600"
          />
          <Trash
            onClick={() => formBuilderContext.removeField(id)}
            className="w-7 text-red-500 hover:bg-red-200 rounded-sm transition-all p-2  h-7 cursor-pointer"
          />
        </div>
      </div>
      <div onClick={(e) => e.stopPropagation()} className="mt-2 ">
        {children}
      </div>
    </div>
  );
};

export const FallbackCanvas = () => {
  return (
    <div className="flex items-center justify-center mt-10 ">
      <div className="space-y-5 flex flex-col items-center justify-center">
        <div className="rounded-full border flex items-center w-32 h-32 justify-center bg-blue-50">
          <PlusIcon strokeWidth={1} className="text-gray-400 w-32 h-32" />
        </div>
        <div className="space-y-2">
          <p className="text-gray-800 text-lg text-center">Add Form Elements</p>
          <p className="text-gray-500 text-sm text-center">
            Drag and drop elements from the sidebar to build your form
          </p>
        </div>
      </div>
    </div>
  );
};
