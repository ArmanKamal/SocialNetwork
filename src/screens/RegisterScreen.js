import React, { useContext, useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import FirebaseContext from "../context/firbase";
import * as ROUTES from "../constants/routes";
import { doesUsernameExist } from "../services/firebase";

function RegisterScreen() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_pw, setConfrim_pw] = useState("");

  const [error, setError] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirm_pw) {
      setError("Password doesnot match");
    }
    else{

    const userNameExists = await doesUsernameExist(username);
    if (!userNameExists.length) {
      try {
        const createdResult = await firebase
          .auth()
          .createUserWithEmailAndPassword(emailAddress, password);

        await createdResult.user.updateProfile({
          displayName: username,
        });

        await firebase.firestore().collection("users").add({
          userId: createdResult.user.uid,
          username: username.toLowerCase(),
          fullName,
          emailAddress: emailAddress.toLowerCase(),
          following: [],
          dateCreated: Date.now(),
        });

        history.push(ROUTES.DASHBOARD)

      } catch (error) {
        setUsername("")
        setFullName("");
        setEmailAddress("");
        setPassword("");
        setConfrim_pw("");
        setError(error.message);
      }
    }
    else{
        setError('Username already exists, Please try another one')
    }
    }
    
  };

  useEffect(() => {
    document.title = "Register - Instify";
  }, []);

  return (
      
    <div className="w-full h-screen flex items-center justify-center bg-indigo-400">
      <form
        className="w-full md:w-1/3 bg-white rounded-lg"
        onSubmit={handleRegister}
        method="POST"
      >
        <div className="flex font-bold justify-center mt-6 mb-3 ">
          <img
            className="h-15 w-10 rounded"
            src="/images/user.png"
            alt="userAvatar"
          />
        </div>
        {error && <p className="text-red-700 font-bold	 my-2 text-center">{error}</p>}
        {isInvalid && <p className="text-red-700 font-bold my-2 text-center">{isInvalid}</p>}
        <div className="px-12 pb-10">
          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                aria-label="Enter your user name"
                value={username}
                type="text"
                placeholder="Username"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                aria-label="Enter your email address"
                value={emailAddress}
                type="text"
                placeholder="Email address"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-user"></i>
              <input
                aria-label="Enter your Full Name"
                value={fullName}
                type="text"
                placeholder="Full name"
                className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="password"
                placeholder="Password"
                value={password}
                className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="w-full mb-2">
            <div className="flex items-center">
              <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock"></i>
              <input
                type="password"
                placeholder="Confrim Password"
                value={confirm_pw}
                className="-mx-6 px-8 w-full border rounded px-3 py-2 text-gray-700 focus:outline-none"
                onChange={(e) => setConfrim_pw(e.target.value)}
              />
            </div>
          </div>
          <p className="text-xs text-gray-500 float-right mb-4">
            Already have an account?
            <Link to={ROUTES.LOGIN} className="font-bold">
              Login
            </Link>
          </p>
          <button
            type="submit"
            disabled={isInvalid}
            className={`w-full py-2 rounded-full bg-green-600 text-gray-100  focus:outline-none ${
              isInvalid && "opacity-50"
            }`}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterScreen;
