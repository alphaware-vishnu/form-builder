import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable"
import { DndContext } from "@dnd-kit/core"
import { ElementsSidebar } from "./sidebar/elements-sidebar"
import { Canvas } from "./canvas/canvas"
import { useFormProvider } from "@/providers"
import { DragOverlay } from "@dnd-kit/core";
import { User2, UserCircle } from "lucide-react"
export const FormBuilder = () => {

    const formBuilderContext = useFormProvider()

    return (
        <DndContext onDragStart={(e) => formBuilderContext.handleDragStart?.(e)} onDragEnd={(e) => formBuilderContext.handleDragEnd?.(e)}>
            <ResizablePanelGroup direction="horizontal" className="min-h-screen  rounded-lg border w-full">
                <ResizablePanel className="px-3 z-50 overflow-visible" minSize={20} maxSize={25} >
                    <ElementsSidebar />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel className="z-0" defaultSize={50}>
                    <Canvas />
                </ResizablePanel>
                <ResizableHandle withHandle />
                <ResizablePanel minSize={20} maxSize={25} className="px-3">
                    <div className="flex items-center justify-center p-5">
                        <span>Field Settings</span>
                    </div>
                </ResizablePanel>
                <ResizableHandle withHandle />
            </ResizablePanelGroup>
            <DragOverlay>
                {formBuilderContext?.activeId ? (
                    <div className="flex bg-gray-50 cursor-grab items-center gap-x-2 border border-gray-400 border-dashed hover:border-blue-300 hover:bg-blue-50/20 transition-all rounded-md p-2">
                        <UserCircle className="text-gray-600" strokeWidth={1} /> {formBuilderContext?.activeId.replace("-", " ")}
                    </div>
                ) : null}
            </DragOverlay>
        </DndContext>
    )
}