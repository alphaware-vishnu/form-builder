import { ClipboardList, Layers, Search } from "lucide-react";
import { FormElements } from "./form-elements";
import { memo } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FormSteps } from "./form-steps";

export const ElementsSidebarMemo = () => {
  return (
    <Tabs>
      <div className="shadow-sm bg-white p-2 border rounded-md mt-3 flex items-center justify-center sticky z-50    top-6  w-full  ">
        <TabsList className=" font-normal w-full ">
          <TabsTrigger className="font-normal cursor-pointer" value="elements">
            <ClipboardList strokeWidth={1} />
            Elements
          </TabsTrigger>
          <TabsTrigger className="font-normal cursor-pointer" value="steps">
            <Layers strokeWidth={1} /> Steps
          </TabsTrigger>
        </TabsList>
      </div>
      <TabsContent className="w-full p-0 mt-3" value="elements">
        <FormElements />
      </TabsContent>
      <TabsContent className="w-full p-0 mt-3" value="steps">
        <FormSteps />
      </TabsContent>
    </Tabs>
  );
};

export const ElementsSidebar = memo(ElementsSidebarMemo);
