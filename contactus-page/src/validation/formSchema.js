import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Email is required"),
  consent: yup.boolean(),
  
});