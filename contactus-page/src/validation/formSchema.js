import * as yup from "yup";

export default yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().required("Last Name is required"),
  birthdate: yup.date(),
  consent: yup.boolean(),
  
});