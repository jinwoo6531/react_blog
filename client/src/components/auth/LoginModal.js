import React,{useState} from 'react'
import {} from "reactstrap"

function LoginModal() {
    const [modal, setModal] = useState(false);
    const [localMsg, setLocalMsg] = useState("")
    const [form, setValues] = useState({
        email:"",
        password:""
    })
    return (
        <div>
            
        </div>
    )
}

export default LoginModal
