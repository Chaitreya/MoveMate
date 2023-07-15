import React, { useState } from 'react'
import ima from "../assets/img2.jpg";
import PasswordField from '../components/PasswordField';

// route = /login
const LoginForm = () => {
    const [showPass, setShowPass] = useState(false);
    const [pass, setPass] = useState("");
    const [email, setEmail] = useState("");
    console.log(email);
    return (
        <div className='flex justify-center items-center bg-zinc-900 h-screen'>
            <div className="flex flex-col space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0  m-6">
                {/* left side */}
                <div className="p-9 md:p-20 max-w-2xl">
                    <h2 className="font-mono mb-5 text-4xl font-bold">Login </h2>
                    <p className="max-w-sm mb-9 font-sans font-light text-grey-600">
                        Login into your account to upload or download pictures,videos or music.
                    </p>
                    <form onSubmit={() => { }}>

                        <div className='space-y-3'>
                            <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value)
                                }} />
                            <PasswordField pass={pass} setPass={setPass} placeholder="Enter Password" showPass={showPass} setShowPass={setShowPass} />
                        </div>

                        <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                            <div className='flex space-x-5 md:space-x-0 md:flex-col md:space-y-1'>
                                <div className="font-thin cursor-pointer text-cyan-700">Forgot Password</div>
                                <a className='cursor-pointer font-thin text-cyan-700' onClick={() => { }}>Create new account</a>
                            </div>
                            <button className='w-full md:w-auto p-6 font-sans font-bold text-white rounded-md shadow-sm px-9 
                    bg-rose-500 shadow-cyan-100 hover:opacity-50 hover:shadow-lg transition hover:-translate-y-0.5 duration-150'>
                                <span>Login</span>
                            </button>
                        </div>
                    </form>
                </div>

                {/* right size */}
                <img src={ima} alt="Water image" className='w-[430px] hidden md:block rounded-r-2xl' />
            </div >
        </div>
    )
}

export default LoginForm