import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
// import {
//   BrowserRouter as Router,
//   Link
// } from "react-router-dom";
import { PasswordValidate } from '../../validate/PasswordValidate'

type dataUser = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  cpswd: string;
  agree: boolean;
}

export const Register = () => {
  const [user, setUser] = useState<dataUser | []>([])
  const {
    register,
    handleSubmit,
    errors,
    getValues,
    setError,
    clearErrors,
    reset
  } = useForm<dataUser>()
  const onSubmit = (data: dataUser) => {
    if (data.password !== data.cpswd) {
      setError("cpswd", {
        type: "passwordMatch",
        message: "Your password and confirmation password do not match."
      })
    } 
    setUser(data)
    reset()
  }
  

  return (
    <div className='mx-2 min-h-screen bg-gray-50 flex flex-col justify-center'>
      <div className='max-w-md w-full- mx-auto font-semibold'>Create an Acoount</div>
      <div className='shadow-2xl max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300'>
        <form className='space-y-6'>
          <div>
            <label
              htmlFor="fullName"
              className='text-sm font-black text-gray-600 block'
            >
              Full Name
              </label>
            <input
              className='w-full p-2 border border-gray-300 rounded mt-1 duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1'
              type="text"
              name="fullName"
              ref={register({ required: 'Full Name is Empty' })}
            />
            {errors.fullName && <p className="error">{errors.fullName.message}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className='text-sm font-black text-gray-600 block'
            >
              Email
              </label>
            <input
              className='w-full p-2 border border-gray-300 rounded mt-1 duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1'
              autoComplete="username"
              type="email"
              name="email"
              ref={register({
                required:"email is empty",
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
            {errors.email && errors.email.type === "required" &&
              (<p className="error"> Email Required</p>)}
            {errors.email && errors.email.type === "pattern" &&
              (<p className="error"> Invalid Email</p>)}
          </div>
          <div>
            <label
              htmlFor="password"
              className='text-sm font-black text-gray-600 block'
            >
              Password
              </label>
            <PasswordValidate>
              {(props) => (
                <input
                  className='w-full p-2 border border-gray-300 rounded mt-1 duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1'
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  onFocus={() => props.visible(true)}
                  onBlur={() => props.visible(false)}
                  onChange={() => props.validate(
                    "password",
                    getValues,
                    setError,
                    clearErrors
                  )}
                  ref={register({ required: "Password Required" })}
                />
              )}
            </PasswordValidate>
            {errors.password && (<p className="error"> {errors.password.message} </p>)}
          </div>
          <div>
            <label
              htmlFor="cpwsd"
              className='text-sm font-black text-gray-600 block'
            >
              Confirm Password
              </label>
            <PasswordValidate>
              {(props) => (
                <input
                  className='w-full p-2 border border-gray-300 rounded mt-1 duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1'
                  name="cpwsd"
                  type="password"
                  autoComplete="new-password"
                  onFocus={() => props.visible(true)}
                  onBlur={() => props.visible(false)}
                  onChange={() => props.validate(
                    "password",
                    getValues,
                    setError,
                    clearErrors
                  )}
                  ref={register({ required: "Password Required" })}
                />
              )}
            </PasswordValidate>
            {errors.cpswd && (<p className="error">{errors.cpswd.message}</p>)}
          </div>
          <div className='flex items-center'>
            <input
              className='duration-300 transform hover:-translate-y-1 focus:-translate-y-1 '
              type="checkbox"
              name="agree"
              ref={register({ required: true })}
            />
            <label
              htmlFor="agree"
              className="ml-2 text-sm text-gray-600"
            >
              I Agree to Term of Services and Privacy Policy
              </label>
          </div>
          <div>
            <button
              className='btn_register duration-500 w-full py-2 px-4 bg-blue-500 hover:bg-green-500 rounded-md text-white text-sm '
              type="button"
              onClick={handleSubmit(onSubmit)}
            >
              Register
              </button>
          </div>
          <div className='text-center'>
            <p className='font-medium text-sm text-blue-500 hover:text-blue-700'>
            Forgot Password?
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}
