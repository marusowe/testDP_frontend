import { toast } from "react-toastify";

export const successNotification = (message) =>
  toast.success(message, {
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
