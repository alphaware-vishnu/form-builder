import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import {
  DndContext,
  DragOverlay,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { ElementsSidebar } from "./sidebar/elements-sidebar";
import { Canvas } from "./canvas/canvas";
import { useFormProvider } from "@/providers";
import { UserCircle } from "lucide-react";
import { FieldSetting } from "./field-settings/field-settings";
import {
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";

export const FormBuilder = () => {
  const formBuilderContext = useFormProvider();
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={(e) => formBuilderContext.handleDragStart?.(e)}
      onDragEnd={(e) => formBuilderContext.handleDragEnd?.(e)}
    >
      {/* Parent container takes full height */}
      <div className="h-screen w-full overflow-hidden">
        <ResizablePanelGroup
          direction="horizontal"
          className="w-full h-full border rounded-lg"
        >
          {/* Left Panel */}
          <ResizablePanel
            minSize={20}
            maxSize={25}
            className="h-full overflow-y-auto bg-white"
          >
            <div className="sticky top-0 h-screen px-3 scrollbar-hide overflow-y-auto">
              <ElementsSidebar />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Canvas Panel */}
          <ResizablePanel defaultSize={50} className="h-full overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-hide">
              <Canvas />
            </div>
          </ResizablePanel>

          <ResizableHandle withHandle />

          {/* Right Panel */}
          <ResizablePanel
            minSize={20}
            maxSize={25}
            className="h-full overflow-y-auto bg-white "
          >
            <div className="sticky top-0 right-0 h-screen px-3 overflow-y-auto">
              <div className="">
                <FieldSetting />
              </div>

              {/* Add more content here to test scroll */}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      {/* Drag Overlay */}
      <DragOverlay>
        {formBuilderContext?.activeId ? (
          <div className="flex bg-gray-50 cursor-grab items-center gap-x-2 border border-gray-400 border-dashed hover:border-blue-300 hover:bg-blue-50/20 transition-all rounded-md p-2">
            <UserCircle className="text-gray-600" strokeWidth={1} />
            {formBuilderContext?.activeId.replace("-", " ")}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};
