import * as yup from "yup";

export const authSchema = yup.object({
  email: yup
    .string()
    .trim()
    .email()
    .required("Email is required")
    .matches(
      /^[a-zA-Z0-9.-_]+@[a-zA-Z]+\.[a-zA-Z]{2,3}$/,
      "Invalid email format"
    ),
  password: yup.string().required(),
});

export const productAddSchema = yup.object().shape({
  name: yup.string().required("Product Info is required"),
  category: yup.string().required("Category is required"),
  stock: yup
    .string()

    .required("Stock is required"),

  suppliers: yup.string().required("Suppliers is required"),
  price: yup
    .string()

    .required("Price is required"),
});
export const productEditSchema = yup.object().shape({
  name: yup.string(),
  category: yup.string(),
  stock: yup.string(),
  suppliers: yup.string(),
  price: yup.string(),
});
