import { toast } from "react-toastify";

export const errorNotification = (message) =>
  toast.error(message, {
    autoClose: 5000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: false,
    progress: undefined,
  });
