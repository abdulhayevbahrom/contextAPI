import React from 'react'
import {useStateValue} from './StateProvider' 

function About() {
    const [userInfo,dispatch] = useStateValue()
    const submit  = () =>{
        dispatch({
            type:"Info",
            userInfo:"Bahromjon"
        })
    }
  return (
    <div className='about'>
        <button onClick={submit}>send</button>
    </div>
  )
}

export default About