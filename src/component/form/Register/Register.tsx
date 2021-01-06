import React from 'react'
import { useForm } from 'react-hook-form'

type dataUser = {
  id:number;
  fullName: string;
  email:string;
  password:string;
  cpswd:string;
  agree: boolean;
}


export const Register = () => {
  const {register, handleSubmit, errors} = useForm<dataUser>()
  console.log(errors)
  const onSubmit = (data:dataUser) =>{
    console.log(data)
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
          ref={register({required: 'email is empty'})}
        />
        {errors.email && <p>{errors.email.message}</p>}
        <label htmlFor="password"> Password </label>
        <input 
          className='border' 
          type="password" 
          name="password"
          ref={register()}
        />
        <label htmlFor="cpwsd"> Confirm Password </label>
        <input 
          className='border'
          type="password"
          autoComplete="new-password"
          name="cpswd"
          ref={register()}
        />
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
