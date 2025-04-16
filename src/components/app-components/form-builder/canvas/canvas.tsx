import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useFormProvider } from "@/providers";
import { FormField } from "@/types";
import { useDroppable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";
import {
  GripVertical,
  PlusIcon,
  Save,
  ScanEye,
  Settings2,
  Trash,
} from "lucide-react";
import { PropsWithChildren } from "react";
import { useFormik } from "formik";
import { generateValidationSchema } from "@/utils";

export const Canvas = () => {
  const { setNodeRef, isOver } = useDroppable({ id: "canvas" });
  const formBuilderContext = useFormProvider();
  const validationSchema = generateValidationSchema(
    formBuilderContext?.formFields
  );

  const formik = useFormik<Record<string, string>>({
    initialValues: {},
    validationSchema,
    onSubmit: (values) => {},
  });

  console.log("formik.errors", formik.errors);
  const renderItem = (item: FormField) => {
    let element;
    switch (item.uid) {
      case "singleline":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                name={item.name}
                onBlur={formik.handleBlur}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
            </div>
            <Error
              error={formik.errors[item.name]}
              isTouched={formik.touched[item.name]}
            />
          </FieldWrapper>
        );
        break;
      case "firstname":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                value={formik.values[item.name]}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "lastname":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={item.placeholder}
                name={item.name}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "username":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "password":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={item.placeholder}
                type={item.type}
                name={item.name}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "singleline":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "phone":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "email":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "textarea":
        element = (
          <FieldWrapper className="col-span-2" id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <textarea
                className="border w-full text-gray-600 rounded-md p-2"
                rows={3}
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "date":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "datetime":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "number":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full ">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <input
                value={formik.values[item.name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name={item.name}
                placeholder={item.placeholder}
                type={item.type}
                className="p-2 w-full text-sm text-gray-600 border rounded-md "
              />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "dropdown":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
              <select
                name={item.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border p-2 text-xs rounded-md w-full"
              >
                <option value={""}>{item.placeholder}</option>
                {item.options?.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
              />
            </div>
          </FieldWrapper>
        );
        break;
      case "checkbox":
        element = (
          <FieldWrapper id={item.id}>
            <div className="w-full">
              <p className="text-sm text-gray-600">
                {item.label}{" "}
                <span className="text-red-500">
                  {item.validations?.required ? "*" : ""}
                </span>
              </p>
                <input type={"checkbox"} />
              <Error
                error={formik.errors[item.name]}
                isTouched={formik.touched[item.name]}
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

  formik.handleBlur;

  return (
    <div
      id="canvas"
      ref={setNodeRef}
      className=" min-h-[80%] relative p-2 m-4 rounded-md"
    >
      <div className="sticky z-50 flex items-center shadow justify-between gap-2 top-6 p-2 w-full rounded-md bg-white border">
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
        <form
          className={cn(
            isOver
              ? "bg-blue-50/10 border p-2 rounded-md h-[100%] gap-5 border-dashed border-blue-500"
              : "",
            "grid grid-cols-2 gap-5"
          )}
        >
          <SortableContext
            strategy={horizontalListSortingStrategy}
            items={formBuilderContext?.formFields?.map?.(
              (formField: FormField) => formField.id
            )}
          >
            {formBuilderContext.formFields &&
              formBuilderContext.formFields.map((field: FormField) =>
                renderItem(field)
              )}
          </SortableContext>
        </form>
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
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });

  const formBuilderContext = useFormProvider();
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cn("w-full z-0  border rounded-sm mt-2 p-2", className)}
    >
      <div className="flex items-center justify-between">
        <GripVertical
          {...attributes}
          {...listeners}
          className="w-3 cursor-grab h-3 text-gray-600"
        />
        <div className="flex items-center gap-x-2">
          <Settings2
            onClick={() => formBuilderContext.selectField(id)}
            className="w-7 hover:bg-gray-100 rounded-sm transition-all p-2  h-7 cursor-pointer text-gray-600"
          />
          <Trash
            onClick={(e) => {
              e.preventDefault();
              formBuilderContext.removeField(id);
              if (id === formBuilderContext?.selectedField.id) {
                formBuilderContext?.setSelectedField(null);
              }
            }}
            className="w-7 z-10 text-red-500 hover:bg-red-200 rounded-sm transition-all p-2  h-7 cursor-pointer"
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

export const Error = ({
  isTouched,
  error,
}: {
  isTouched: boolean | undefined;
  error: string | undefined;
}) => {
  return (
    <>
      {isTouched && error ? (
        <p className="text-red-500 text-xs">{error}</p>
      ) : null}
    </>
  );
};
