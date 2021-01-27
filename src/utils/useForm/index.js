import { useState } from "react"



export const useForm = initialValue => {
    const [values, setValue] = useState (initialValue);
    return [
        values, 
        (formType, formValue)=>{
            return setValue({...values, [formType]: formValue})
    },
];
};
