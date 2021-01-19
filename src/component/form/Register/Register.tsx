import React, {useState } from 'react'
import { useForm } from 'react-hook-form'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import Swal from "sweetalert2";
import { PasswordValidate } from '../../validate/PasswordValidate'

type dataUser = {
  id: number;
  fullName: string;
  email: string;
  password: string;
  cpswd: string;
  agree: boolean;
}
const Toast =  Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})
function later(delay: number) {
  return new Promise(function (resolve) {
    setTimeout(resolve, delay);
  });
}
export const Register = () => {
  const [,setUser] = useState<dataUser | []>([])
  const {
    register,
    handleSubmit,
    errors,
    formState,
    getValues,
    setError,
    clearErrors,
    reset
  } = useForm<dataUser>()
  const onSubmit = async (data: dataUser) => {
    if(data.fullName ===''){
      Toast.fire({
        icon:'error',
        title:'Full Name is Empty!'
      })
    }else if(data.email ===''){
      Toast.fire({
        icon:'error',
        title:'Email is Empty!'
      })      
    }else if(data.password ===''){
      Toast.fire({
        icon:'error',
        title:'Password is Empty!'
      })
    }else if(data.password !== data.cpswd){
      Toast.fire({
        icon:'error',
        title:'Your password and confirmation password do not match.'
      })
    }else if(!data.agree){
      Toast.fire({
        icon:'error',
        title:'Please check list I Agree to Term of Services and Privacy Policy'
      })
    }else{
      setUser(data)
      await later (1000)
        Swal.fire({
          icon:'success',
          title:'Thank you for Register',
          showConfirmButton:false,
          timer:1000
        })
      reset()
    }
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
              ref={register}
            />
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
                pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
              })}
            />
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
                  ref={register}
                />
              )}
            </PasswordValidate>
          </div>
          <div>
            <label
              htmlFor="cpswd"
              className='text-sm font-black text-gray-600 block'
            >
              Confirm Password
              </label>
            <PasswordValidate>
              {(props) => (
                <input
                  className='w-full p-2 border border-gray-300 rounded mt-1 duration-300 hover:shadow-xl transform hover:-translate-y-1 focus:-translate-y-1'
                  name="cpswd"
                  type="password"
                  autoComplete="new-password"
                  onFocus={() => props.visible(true)}
                  onBlur={() => props.visible(false)}
                  onChange={() => props.validate(
                    "cpswd",
                    getValues,
                    setError,
                    clearErrors
                  )}
                  ref={register}
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
              ref={register}
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
              className='btn_rgs btn_register duration-500 w-full py-2 px-4 bg-blue-500 hover:bg-green-500 rounded-md text-white text-sm'
              type="button"
              disabled={formState.isSubmitting}
              onClick={handleSubmit(onSubmit)}
            >
              Register
              </button>
          </div>
          <div className='text-center'>
            <Router>
              <Link
                to="/"
                className='font-medium text-sm text-blue-500 hover:text-blue-700'
              >
                Forgot Password?
                </Link>
            </Router>
          </div>
        </form>
      </div>
    </div>
  )
}
