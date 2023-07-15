import React, { useState } from 'react'
import ima from "../assets/img2.jpg";
import google from "../assets/google.png"
import github from "../assets/github.png"
import { IconButton } from '@mui/material';
import PasswordField from '../components/PasswordField';
import { OutlinedInput } from '@mui/material';

// route = /register
const RegisterForm = () => {
    const [showPass1, setShowPass1] = useState(true);
    const [pass1, setPass1] = useState("");
    const [showPass2, setShowPass2] = useState(true);
    const [pass2, setPass2] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    return (
        <div className='flex justify-center items-center bg-zinc-900 h-screen'>

            <div className="flex flex-col space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0  m-6">
                {/* left side */}
                <div className="p-9 md:p-20 max-w-2xl">
                    <h2 className="font-mono mb-5 text-4xl font-bold">SignUp</h2>
                    <p className="max-w-sm mb-9 font-sans font-light text-grey-600">
                        Create an account to get full access to content
                    </p>
                    <form onSubmit={() => { }}>
                        <div className='space-y-3'>
                            <div className='flex md:flex-row md:space-x-2 flex-col md:space-y-0 space-y-3'>
                                <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light"
                                    placeholder="First name"
                                    type="text"
                                    value={firstName}
                                    onClick={(e) => setFirstName(e.target.value)} />
                                <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light"
                                    placeholder="LastName"
                                    type="text"
                                    value={lastName}
                                    onClick={(e) => setLastName(e.target.value)} />
                            </div>
                            <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onClick={(e) => setEmail(e.target.value)} />
                            <PasswordField placeholder="Create Password" showPass={showPass1} setShowPass={setShowPass1} pass={pass1} setPass={setPass1} />
                            <PasswordField placeholder="ReEnter Password" showPass={showPass2} setShowPass={setShowPass2} pass={pass2} setPass={setPass2} />
                        </div>
                        <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:space-y-0">
                            <a className='cursor-pointer font-thin text-cyan-700' onClick={() => { }}>Already have an account? Sign in</a>
                            <button className='w-full md:w-auto p-6 font-sans font-bold text-white rounded-md shadow-sm px-9 
                    bg-rose-500 shadow-cyan-100 hover:opacity-50 hover:shadow-lg transition hover:-translate-y-0.5 duration-150'>
                                <span>SignUp</span>
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

export default RegisterForm