import { useState,useEffect, useContext } from "react";
import FirebaseContext from "../context/firbase";

export default function useAuthListener(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const { firebase} = useContext(FirebaseContext);

    useEffect(() => {
        // Listener called when there is a change in the authentication state. 
        const listener = firebase.auth().onAuthStateChanged((authUser) => {
            if(authUser){
                // If logged in
                localStorage.setItem('authUser',JSON.stringify(authUser));
                setUser(authUser)
            }
            else{

                // If not logged in
                localStorage.removeItem('authUser')
                setUser(null)
            }
        })
        
        return () => listener()
    }, [firebase])

    return { user }
}