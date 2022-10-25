import React, {useState} from 'react'
import {useStateValue} from './StateProvider' 

function Login() {
    const [userName , setUserName] = useState();
    const [studentName, dispatch] = useStateValue();
    
    const sendToReducer = () => {
        dispatch({
            type:"SEND_NAME",
            studentName : userName
        })
    }

    return (
        <div className="login">
            <h1>Login Js</h1>
            <input type="text" 
                    placeholder="enter your username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                     />
            <button onClick={sendToReducer}>Send the Data</button>
        </div>
    )
}

export default Login