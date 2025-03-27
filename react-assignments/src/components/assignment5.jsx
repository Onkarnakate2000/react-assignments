// Create a component with a text input field and a button. The goal is to display an alert with the text entered when the button is clicked. Use useCallback to memoize the event handler function that triggers the alert, ensuring it's not recreated on every render.
// Currently we only have inputText as a state variable and hence you might not see the benefits of 
// useCallback. We're also not passing it down to another component as a prop which is another reason for you to not see it's benefits immedietely.
import React, { useCallback, useState } from "react";

function Assignment5() {
    const [alertMessage, setAlertMessage] = useState("");

    const showAlert = useCallback(()=>{
        alert(alertMessage); 
    },[alertMessage]) 

    return (
        <>
            <input 
                type="text" 
                placeholder="Enter the alert" 
                value={alertMessage} 
                onChange={(e) => setAlertMessage(e.target.value)} 
            />
            <button onClick={showAlert}>Alert</button>
        </>
    );
}

export default Assignment5;
