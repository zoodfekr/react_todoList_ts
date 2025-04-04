import { toast, TypeOptions, ToastOptions } from 'react-toastify';

type ToastifyType = {
    text: string;
    type: TypeOptions;
    position?: ToastOptions["position"];
};

export const toastify = ({ text, type, position }: ToastifyType) => {
    return toast(text, {
        type: type || "default",
        position: position || "top-center",
    });
};
