// Create a component with a text input field and a button. When the component mounts or the button is clicked, automatically focus the text input field using useRef.

import React, { useCallback, useState, useEffect } from "react";

function Assignment6() {

    useEffect(()=>{
        document.getElementById("inputbox").focus()  
    },[])

    function handleButtonClick(){
        document.getElementById("inputbox").focus()
    }

    return (
        <>
        <input type="text" id="inputbox" placeholder="Enter text here"/>
        <button onClick={handleButtonClick}>focus text</button>
        </>
    );
}

export default Assignment6;