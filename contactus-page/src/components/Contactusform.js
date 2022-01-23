

function ContactUsForm(props) {
    const {selections, submit, changeHandler, disabled, errors, clear}= props

    const onChange = (evt) => {
        const { name, value, type, checked } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        changeHandler(name, valueToUse);
    }

    

    
    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
      };
    return (
        
            <form className="contactUsForm" onSubmit={onSubmit}>
                <label> Name: &nbsp;
                    <input 
                    type="text" 
                    name="name"
                    onChange={onChange}
                    value= {selections.name} />
                </label>
                <label>Email: &nbsp;
                    <input 
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={selections.email}
                    />
                </label>
                <label>Birthdate: &nbsp;
                    <input type="date"
                    name="birthdate"
                    onChange={onChange}
                    value={selections.birthdate}/>
                </label>
                <label>
                    <input 
                    type="checkbox" 
                    id="emailConsent" 
                    name="consent"
                    checked = {selections.consent}
                    onChange={onChange}/>
                    &nbsp; I agree to be contacted by email
                </label>
                <button type="button" className="clear" onClick={clear}>Clear</button>
                <button type="button" disabled={disabled} className="submit">Submit</button>
            </form>


    )

}
export default ContactUsForm;
