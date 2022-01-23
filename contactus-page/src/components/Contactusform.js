import {useState, useEffect} from "react";
import axios from "axios"

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

function Contactusform() {
    const [formData, setFormData] = useState(initialFormData)
    const [formErrors, setFormErrors] = useState(initialFormErrors)
    const [disabled, setDisabled] = useState(true)
    const postData = (formData) => {

    }
    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        change(name, valueToUse);
    return (
        
            <form>
                <label> Name
                    <input 
                    type="text" 
                    name="name"
                    onChange={onChange}
                    value= {formData.name} />
                </label>
                <label>Email
                    <input 
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={formData.email}
                    />
                </label>
                <label>Birthdate
                    <input type="date"
                    name="email"
                    onChange={onChange}
                    value={formData.email}/>
                </label>
                <label>
                    <input type="checkbox" 
                    id="emailConsent" 
                    name="consent"
                    checked = {formData.consent}
                    onChange={onChange}/>
                    I agree to be contacted by email
                </label>
                <button type="button">Clear</button>
                <button type="button">Submit</button>
            </form>


    )


}
export default Contactusform
