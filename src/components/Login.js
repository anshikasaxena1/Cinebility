import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm,setIsSignInForm]=useState(true);

  const toggleSignInForm=()=>{
    setIsSignInForm(!isSignInForm);
  }

  return (

    <div>
      <Header/>
      <div>
      <img className='absolute' src="https://assets.nflxext.com/ffe/siteui/vlv3/c1366fb4-3292-4428-9639-b73f25539794/3417bf9a-0323-4480-84ee-e1cb2ff0966b/IN-en-20240408-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
      </div>
      <form className=' p-12 bg-white w-4/12 absolute my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-70'>
        <h1 className='font-bold text-3xl'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && <input type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-stone-200'/>}
        <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-stone-200'/>
        <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-stone-200'/>
        <button className='p-4 my-4 bg-orange-900 rounded-lg w-full'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? "New to Cinebility? Sign Up now" : "Already Registered? Sign In now..."}</p>
      </form>
      
    </div>
  )
}

export default Login