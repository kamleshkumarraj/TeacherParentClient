import { useEffect } from "react"

export const useError = (errors = []) => {
    useEffect(() => {
        errors.forEach((error) => {
            if(error?.isError){
                if(error?.fallback) error?.fallback();
            }else{
                console.log(error?.error)
            }
        })
    },[]);
}