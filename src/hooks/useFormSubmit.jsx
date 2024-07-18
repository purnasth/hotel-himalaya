import { useState } from "react";
import { toast } from "react-toastify";

const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (data, resetForm) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      toast.success("Form submitted successfully!");
      resetForm();
    //   window.scrollTo({
    //     top: 0,
    //     behavior: "smooth",
    //   });
    } catch (error) {
      toast.error("Failed to submit form. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleSubmit };
};

export default useFormSubmit;
