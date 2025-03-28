import React from 'react'
import { NavLink } from 'react-router'

export const Login = () => {
    return (
        <div className='  border-red-300 bg-slate-700 w-full h-screen flex justify-center items-center'>
            <NavLink to={'/home'} className='w-32 flex justify-center p-2 rounded-lg shadow-2xl bg-sky-600 text-white'> ورود</NavLink>
        </div>
    )
}
