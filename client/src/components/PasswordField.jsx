import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';
import InputAdornment from '@mui/material/InputAdornment';
import { IconButton } from '@mui/material';
import React from 'react'

const PasswordField = ({ pass, setPass, setShowPass, showPass, placeholder }) => {
    return (
        <div className='flex'>
            <input className="w-full p-4 border border-grey-300 rounded-md placeholder:font-sans placeholder:font-light"
                placeholder={placeholder}
                type={showPass ? "password" : "text"}
                onChange={(e) => { setPass(e.target.value) }} value={pass} />
            <IconButton sx={{ width: "60px" }} onClick={() => {
                setShowPass(prevState => !prevState)
            }
            }>
                {showPass ? <VisibilityIcon /> : <VisibilityOffIcon />}
            </IconButton>
        </div>
    )
}

export default PasswordField;