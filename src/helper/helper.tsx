import { toast, type Id, type TypeOptions } from "react-toastify";

type toastParamType = {
    toastId: Id;
    message: string;
    type: TypeOptions;
}

export const toastUpdate = ({ toastId, message, type }:toastParamType) => {
  toast.update(toastId, {
    render: message,
    type: type,
    isLoading: false,
    autoClose: 1000,
  });
};