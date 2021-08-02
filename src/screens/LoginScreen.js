import React, { useContext, useState, useEffect } from "react";
import { useHistory,Link } from "react-router-dom";
import FirebaseContext from "../context/firbase";
function LoginScreen() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const isInvalid = password === '' || emailAddress=== '';
  const handleLogin = () => {

  }

  useEffect(() => {
    document.title = "Login - Vibegramn";
  }, []);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gray-300">
        <form className="w-full md:w-1/3 bg-white rounded-lg" onSubmit={handleLogin} method="POST">
            <div className="flex font-bold justify-center mt-6 mb-3 ">
                <img className="h-15 w-10 rounded"
                    src="/images/user.png" alt="userAvatar"/>
            </div>
     
            <div className="px-12 pb-10">
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user'></i>
                        <input aria-label="Enter your email address" type='text' placeholder="Email address"
                            className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none" onChange={(e) => setEmailAddress(e.target.value)} />
                    </div>
                </div>
                <div className="w-full mb-2">
                    <div className="flex items-center">
                        <i className='ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock'></i>
                        <input type='password' placeholder="Password"
                            className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"  onChange={(e) => setPassword(e.target.value) }/>
                    </div>
                </div>
                <p className="text-xs text-gray-500 float-right mb-4">
                  Dont have an account?<Link to="/reigster" className="font-bold">Register</Link>
                </p>
                <button type="submit"  disabled={isInvalid} className={`w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none ${isInvalid && 'opacity-50'}`}>Login</button>
              </div>
        </form>
     </div>
  );
}

export default LoginScreen;
