import React, { useReducer } from "react";

function Test(){
    const [checked,setChecked] = useReducer((value) => !value, false)

    return(
        <div>
            <h1>Thorugh Use Reducer</h1>
        <input type="checkbox" value="checked" onChange={setChecked}/>
        <p>{checked ? "checked" : "un Checked"}</p>
        </div>
    )
}

export default Test;