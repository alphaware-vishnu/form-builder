import { iconRenderer } from "@/utils";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";
import { PropsWithChildren } from "react";

type Props = { elements: { type: string, label: string, uid: string }[] }

const FormElement = ({ elements }: Props) => {
    return (
        <>
            {
                elements.map((element) => {
                    const Icon = iconRenderer(element)
                    return (
                        <ElementWrapper key={element.uid} id={element.uid} draggable={true}>
                            <Icon strokeWidth={1} className="w-6 h-6 text-gray-800" />
                            <p className="text-gray-700 text-xs">{element.label}</p>
                        </ElementWrapper >
                    )
                })
            }
        </>
    )
}

export const ElementWrapper = ({ id, children, draggable }: PropsWithChildren<{ id: string | number, draggable: boolean }>) => {

    const { listeners, attributes, setNodeRef, transform } = useDraggable({ id })
    console.log('remdered', )
    const style = {
        transform: CSS.Translate.toString(transform)
    }

    return (
        <div className="flex bg-gray-50 cursor-grab items-center gap-x-2 border border-gray-400 border-dashed hover:border-blue-300 hover:bg-blue-50/20 transition-all rounded-md p-2" draggable={draggable} {...listeners}   {...attributes} ref={setNodeRef} >
            {children}
        </div>
    )
}

export default FormElement


