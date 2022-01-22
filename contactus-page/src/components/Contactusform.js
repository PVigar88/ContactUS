

function Contactusform() {

    return (
        
            <form>
                <label> Name
                    <input type="text"/>
                </label>
                <label>Email
                    <input type="email"/>
                </label>
                <label>Birthdate
                    <input type="date"/>
                </label>
                <label>
                    <input type="checkbox" id="emailConsent" name="emailConsent"/>
                    I agree to be contacted by email
                </label>
                <button type="button">Clear</button>
                <button type="button">Submit</button>
            </form>


    )


}
export default Contactusform
