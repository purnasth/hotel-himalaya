import { useForm } from "react-hook-form";
import { yupResolver } from "../constants/library";

const useCustomForm = (schema) => {
  const methods = useForm({
    resolver: yupResolver(schema),
  });

  return methods;
};

export default useCustomForm;
