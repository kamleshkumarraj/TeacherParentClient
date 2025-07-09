import { toast } from "react-toastify"


export const updateToast = ({id, message, type}) => {
  toast.update(id, {
    render : message,
    type : type,
    autoClose : 5000,
    isLoading : false,
  })
}