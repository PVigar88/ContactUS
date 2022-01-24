

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
                    value= {selections.name} 
                    required/>
                </label>
                <label>Email: &nbsp;
                    <input 
                    type="email"
                    name="email"
                    onChange={onChange}
                    value={selections.email}
                    required
                    />
                </label>
                <label>Birthdate: &nbsp;
                    <input type="date"
                    name="birthdate"
                    onChange={onChange}
                    value={selections.birthdate}
                    />
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
                <div className="errors">
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.birthdate}</div>
                    <div>{errors.consent}</div>
                </div>
                <button type="button" disabled={disabled} className="submit" onClick={submit}>Submit</button>
                <button type="button" className="clear" onClick={clear}>Clear</button>
            </form>


    )

}
export default ContactUsForm;
