import * as yup from "yup";

const generateValidationSchema = (fields) => {
  const shape = {};

  fields.forEach((field) => {
    switch (field.type) {
      case "email":
        shape[field.id] = yup
          .string()
          .email("Invalid email format")
          .required(`${field.label} is required`);
        break;
      case "string":
      default:
        shape[field.id] = yup.string().required(`${field.label} is required`);
    }
  });

  return yup.object().shape(shape);
};

export default generateValidationSchema;
