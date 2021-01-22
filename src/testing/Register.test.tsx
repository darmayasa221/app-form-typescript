import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import {Register} from '../component/form/Register/Register';
import Swal from 'sweetalert2';
import { act } from 'react-dom/test-utils';


describe('register',() => { 
  describe('when the user not check agreement',() => {
    it('1',async() => {
      const {getByTitle} = render(<Register/>)
      const submitForm = getByTitle('submitForm')
      const fullName = getByTitle('fullName')
      const email = getByTitle('email')
      const password = getByTitle('password')
      const cpswd = getByTitle('cpswd')
      const agree = getByTitle('agree')
        await act (async () => {
          fireEvent.change(fullName,{target:{value:'Jhon Thon'}})
          fireEvent.change(email,{target:{value:'jhon@email.com'}})
          fireEvent.change(password,{target:{value:'Aa.12345678'}})
          fireEvent.change(cpswd,{target:{value:'Aa.12345678'}})
          fireEvent.change(agree,{target:{value:false}})
        })
        await act (async () => {
          fireEvent.click(submitForm)
        })
      expect(Swal.getTitle()?.textContent).toBe('Please check list I Agree to Term of Services and Privacy Policy')
    })
  })
  describe('when the user enters a blank password',() => {
    it('2',async () =>{
      const {getByTitle} = render(<Register/>)
      const submitForm = getByTitle('submitForm')
      const fullName = getByTitle('fullName')
      const email = getByTitle('email')
      const password = getByTitle('password')
        await act (async () => {
          fireEvent.change(fullName,{target:{value:'Jhon Thon'}})
          fireEvent.change(email,{target:{value:'jhon@email.com'}})
          fireEvent.change(password,{target:{value:''}})
        })
        await act (async () => {
          fireEvent.click(submitForm)
        })
      expect(Swal.getTitle()?.textContent).toBe('Password is Empty!')
    })
  })
  describe('when the user enters a different confirmation password',() => {
    it('2',async () =>{
      const {getByTitle} = render(<Register/>)
      const submitForm = getByTitle('submitForm')
      const fullName = getByTitle('fullName')
      const email = getByTitle('email')
      const password = getByTitle('password')
      const cpswd = getByTitle('cpswd')
        await act (async () => {
          fireEvent.change(fullName,{target:{value:'Jhon Thon'}})
          fireEvent.change(email,{target:{value:'jhon@email.com'}})
          fireEvent.change(password,{target:{value:'Aa.12345678'}})
          fireEvent.change(cpswd,{target:{value:'aa.12345678'}})
        })
        await act (async () => {
          fireEvent.click(submitForm)
        })
      expect(Swal.getTitle()?.textContent).toBe('Your password and confirmation password do not match.')
    })
  })
  describe('when the user enters a blank email',() => {
    it('3',async () =>{
      const {getByTitle} = render(<Register/>)
      const submitForm = getByTitle('submitForm')
      const fullName = getByTitle('fullName')
      const email = getByTitle('email')
        await act (async () => {
          fireEvent.change(fullName,{target:{value:'Jhon Thon'}})
          fireEvent.change(email,{target:{value:''}})
        })
        await act (async () => {
          fireEvent.click(submitForm)
        })
      expect(Swal.getTitle()?.textContent).toBe('Email is Empty!')
    })
  })
  describe('when the user enters a blank Full Name',() => {
    it('3',async () =>{
      const {getByTitle} = render(<Register/>)
      const submitForm = getByTitle('submitForm')
      const fullName = getByTitle('fullName')
        await act (async () => {
          fireEvent.change(fullName,{target:{value:''}})
        })
        await act (async () => {
          fireEvent.click(submitForm)
        })
      expect(Swal.getTitle()?.textContent).toBe('Full Name is Empty!')
    })
  })
})
