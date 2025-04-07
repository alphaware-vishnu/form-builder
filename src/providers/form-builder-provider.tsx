import { DragEndEvent, DragStartEvent, UniqueIdentifier } from "@dnd-kit/core";
import { createContext, PropsWithChildren, useContext, useState } from "react";

const FormBuilderContext = createContext<any>(null)


export const FormBuilderProvider = ({ children }: PropsWithChildren) => {
    const [formBuilderState, setFormBuilderState] = useState({})
    const [fields, setFields] = useState<UniqueIdentifier[]>([])
    const [activeId, setActiveId] = useState<any>()
    console.log('fields', fields)

    const handleDragEnd = (event: DragEndEvent) => {
        console.log('dragnedcalled')
        const { active, over } = event
        setActiveId(null)
        console.log('over.id', over?.id)
        if (over?.id == "canvas") {
            setFields(preVal => [...preVal, active.id])
        }
    }

    const handleDragStart = (e: DragStartEvent) => {
        setActiveId(e.active.id)
    }

    const values = {
        formBuilderState,
        setFormBuilderState,
        fields,
        setFields,
        handleDragEnd,
        handleDragStart,
        activeId
    }

    return (
        <FormBuilderContext value={values}>
            {children}
        </FormBuilderContext>
    )

}

export const useFormProvider = () => {
    const formBuilderContext = useContext(FormBuilderContext)

    return formBuilderContext
}

