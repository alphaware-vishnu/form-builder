import { cn } from "@/lib/utils"
import { useFormProvider } from "@/providers"
import { useDroppable } from "@dnd-kit/core"
import { PropsWithChildren } from "react"


export const Canvas = ({ children }: PropsWithChildren) => {

    const { setNodeRef, isOver } = useDroppable({ id: "canvas" })
    const formBuilderContext = useFormProvider()

    const renderItem = (item: any) => {
        let element;
        console.log('item.uid', item)
        switch (item) {
            case "single-line":
                element = (
                    <div className="">
                        <p>{item.label}</p>
                        <input className="p-1 border rounded-md " />
                    </div>
                )
                break;
            case "firstname":
                element = (
                    <div className="">
                        <p>First name</p>
                        <input className="p-1 border rounded-md " />

                    </div>
                )
                break;
            default:
                element = (
                    <div>
                        <p>Coming soon</p>
                    </div>
                )
        }

        return element
    }

    return (
        <div id="canvas" ref={setNodeRef} className="border min-h-[80%] p-2 m-4 rounded-md">
            <div className="space-y-2 p-0">
                <input className="border-none w-full block focus:outline-0  text-lg text-gray-800 font-medium" defaultValue={"Form title"} />
                <input className="border-none w-full block focus:outline-0  text-sm text-gray-600 font-normal" defaultValue={"A short description about your form"} />
            </div>
            <div className={cn(isOver ? 'bg-blue-50/10 border h-[100%] gap-5 border-dashed border-blue-500' : "", "grid grid-cols-2")}>
                {
                    formBuilderContext.fields && formBuilderContext.fields.map((field: any) => (
                        renderItem(field)
                    ))
                }
            </div>
        </div>
    )
}