import React from 'react'
import { useForm } from 'react-hook-form'
import { PasswordValidate } from '../../validate/Validate/PasswordValidate'

type dataUser = {
  id:number;
  fullName: string;
  email:string;
  password:string;
  cpswd:string;
  agree: boolean;
}

export const Register = () => {
  const {
    register, 
    handleSubmit, 
    errors, 
    getValues, 
    setError, 
    clearErrors,
    reset
  } = useForm<dataUser>()
  console.log(errors)
  const onSubmit = (data:dataUser) =>{
    console.log(data)
    reset()
  }
  return (
    <div className='container md:mx-auto shadow-md m-8'>
      <h1 className='text-center text-2xl'> Create an Acoount</h1>
      <form className='flex flex-col'>
        <label htmlFor="fullName"> Full Name </label>
        <input 
          className='border' 
          type="text" 
          name="fullName"
          ref={register({required: 'Full Name is Empty'})}
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}
        <label htmlFor="email"> Email </label>
        <input 
          className='border' 
          type="email" 
          name="email"
          ref={register({
            required: 'email is empty',
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })}
        />
        {errors.email && errors.email.type === "required" && 
        (<p> Email Required</p>)}
        {errors.email && errors.email.type === "pattern" && 
        (<p> Invalid Email</p>)}
        <label htmlFor="password"> Password </label>
        <PasswordValidate>
          { (props) => (
             <input 
             className='border' 
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
             ref={register({required:"Password Required"})}
           />
          )}
        </PasswordValidate>
       
        <label htmlFor="cpwsd"> Confirm Password </label>
        <PasswordValidate>
          {(props) => (
            <input 
            className='border'
            name="cpswd"
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
            ref={register({required:"Password Required"})}
          />
          )}
        </PasswordValidate>
        
        <label htmlFor="agree">
          <input 
            type="checkbox" 
            name="agree"
            ref={register()}
          />
          <span>I Agree to Term of Services and Privacy Policy</span>
        </label>
        <button 
          className='center border' 
          type="button"
          onClick={handleSubmit(onSubmit)}
        > 
          Register 
        </button>
      </form>
    </div>
  )
}
