import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const useCustomForm = (schema) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return methods;
};

export default useCustomForm;
