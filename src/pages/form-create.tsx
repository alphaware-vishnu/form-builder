import { FormBuilder } from "@/components/app-components"
import { FormBuilderProvider } from "@/providers"


export const FormCreate = () => {
    return (
        <>
            <FormBuilderProvider>
                <FormBuilder />
            </FormBuilderProvider>
        </>
    )
}