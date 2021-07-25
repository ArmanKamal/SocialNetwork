import React,{useContext,useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import FirebaseContext from '../context/firbase'
function LoginScreen() {

    const history = useHistory();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setemailAddress] = useState('')
    const [password, setPassword] = useState('')

    const [error, setError] = useState('')

    useEffect(() => {
        document.title= 'Login - Vibegramn'
    }, [])
    
    return (
        <div className="bg-gray-200 container flex mx-auto max-w-screen-md  items-center h-screen">
            Login Pagee
        </div>
    )
}

export default LoginScreen
