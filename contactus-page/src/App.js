import React, {useState, useEffect} from "react";
import axios from "axios"
import './App.css';
import ContactUsForm from './components/Contactusform';
const initialFormData = {
  name: "",
  email: "",
  birthdate: "",
  consent: ""
}
const initialFormErrors = {
  name: "",
  email: "",
  birthdate: "",
  consent: ""
}
function App() {
  const [selections, setSelections] = useState([])
  const [formData, setFormData] = useState(initialFormData)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)
  
  const postSubmission = (newSubmission) => {
    axios
      .post("https://my-json-server.typicode.com/JustUtahCoders/interview-users-api/usersa", newSubmission)
      .then((res) => {
        console.log(res.data);
        setSelections(res.data);

        setFormData(initialFormData);
      })
      .catch((err) => {
        setFormData(initialFormData);
        console.log("There was an error submitting the data, please try again later");
      });
  };

  const changeHandler = (name, value) =>{
    yup
    .reach(schema, name)
    .validate(value)
    .then(() => {
      setFormErrors({
        ...formErrors,
        [name]: "",
      });
    })
    .catch((err) => {
      setFormErrors({
        ...formErrors,
        [name]: err.errors[0],
      });
    });
      setFormData({... formData, [name]: value})
  }
  const clearForm =() =>{
    setFormData(initialFormData)
}
  const submitForm = () =>{
    const newSubmission = {
      name: formData.name,
      email: formData.email,
      birthdate: formData.birthdate,
      consent: formData.consent}
  }
  return (
    <div className="App">
      <h1>Contact Us</h1>
      <ContactUsForm 
      selections = {formData}
      submit = {submitForm}
      changeHandler={changeHandler}
      disabled = {disabled}
      errors = {formErrors}
      clear={clearForm}
      />
    </div>
  );
}

export default App;
