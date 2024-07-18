import { toast } from "react-toastify";

const useCustomToast = () => {
  const showToast = (type, message) => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      default:
        toast(message);
    }
  };

  return { showToast };
};

export default useCustomToast;
