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
    .number()
    .required("Stock is required")
    .positive("Stock must be a positive number"),
  suppliers: yup.string().required("Suppliers is required"),
  price: yup
    .number()
    .required("Price is required")
    .moreThan(0, "Price must be greater than zero")
    .test("decimal", "Price must have exactly two decimal places", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value)
    ),
});

export const productEditSchema = yup.object().shape({
  name: yup.string(),
  category: yup.string(),
  stock: yup.number().positive("Stock must be a positive number"),
  suppliers: yup.string(),
  price: yup
    .number()
    .positive("Price must be a positive number")
    .test("decimal", "Price must have exactly two decimal places", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value)
    ),
});
const dateRegEx =
  /^(January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}$/;

export const supplierAddSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  suppliers: yup.string().required("Company is required"),
  date: yup
    .string()
    .matches(dateRegEx, "Date must be in the format: August 1, 2023")
    .required("Date is required"),
  amount: yup
    .number()
    .required("Amount is required")
    .moreThan(0, "Amount must be greater than zero")
    .test("decimal", "Amount must have exactly two decimal places", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value)
    ),

  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Status must be either Active or Deactive")
    .required("Status is required"),
});

export const supplierEditSchema = yup.object().shape({
  name: yup.string(),
  address: yup.string(),
  suppliers: yup.string(),
  date: yup
    .string()
    .matches(dateRegEx, "Date must be in the format: August 1, 2023"),

  amount: yup
    .number()
    .moreThan(0, "Amount must be greater than zero")
    .test("decimal", "Amount must have exactly two decimal places", (value) =>
      /^\d+(\.\d{1,2})?$/.test(value)
    ),
  status: yup
    .string()
    .oneOf(["Active", "Deactive"], "Status must be either Active or Deactive"),
});
