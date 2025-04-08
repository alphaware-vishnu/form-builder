import { useState } from 'react'
import { formElements as formEls } from '@/database'
import FormElement from './form-element'
// type Props = {
//     formElements: {
//         category: string,
//         elements: {
//             type: string,
//             label: string
//         }[]
//     }[]
// }


export const FormElements = () => {
    const [formElements] = useState(formEls)
    return (
        <div>
            {
                formElements.map((element) => {
                    return (
                        <div key={element.category} className=' flex  flex-col '>
                            <p className='capitalize text-gray-600 text-sm'>{element.category}</p>
                            <div className='grid grid-cols-2 gap-4 my-3 '>
                                <FormElement elements={element.elements} />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

