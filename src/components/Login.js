import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';

const Login = () => {
  const [errorMessage,setErrorMessage]=useState();

  const [isSignInForm,setIsSignInForm]=useState(true);

  const email=useRef(null);
  const password=useRef(null);
  

  const handleButtonClick=()=>{
    //validate the form data first
    // checkValidData
   
    
    const message=checkValidData(email.current.value,password.current.value);
    
    // const message=checkValidData(email.current.value,password.current.value,"mee chan");
    // // {isSignInForm? message : message1};

    setErrorMessage(message);
    if(message) return;

    //sign in/sign up logic

    if(!isSignInForm){
      //sign up
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
      .then((userCredential) => { 
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });

    }
    else{
      //sign in
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+" "+errorMessage);
      });
    }




  }
  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  };

  return (

    <div>
      <Header/>
      <div>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
      </div>
      <form onSubmit={(e)=>e.preventDefault()} className=' p-12 bg-white w-4/12 absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-stone-200'/>}
        <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-stone-200'/>
        <input ref={password} type="password" placeholder="Password" className='p-4 my-4 w-full bg-stone-200'/>
        <p className='text-red-800 '>{errorMessage}</p>
        <button className='p-4 my-4 bg-orange-900 rounded-lg w-full' onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Cinebility? Sign Up now" : "Already Registered? Sign In now..."}</p>
      </form>
      
    </div>
  )
}

export default Login