import React, { useState } from 'react'
import '../../assets/Style/Style.css'

type ChildProps ={
  validate:(
    field:string,
    getValues:(text:string)=> string, 
    setError:any, 
    clearErrors:any
  ) => void,
  visible:(show: boolean)=> void
}
type Props = {
  children: (props:ChildProps) => React.ReactNode
}
export const PasswordValidate = (props:Props) => {
  let [isVisible, setVisible] = useState(false)
  let [rule1 , setRule1] = useState(false)
  let [rule2 , setRule2] = useState(false)
  let [rule3 , setRule3] = useState(false)
  let [rule4 , setRule4] = useState(false)
  let [rule5 , setRule5] = useState(false)
  
  const validate = (
    field:string,
    getValues: (text:string) => string,
    setError:any,
    clearErrors:any
  ) => {
    let valid: boolean = true;
    const inputValue = getValues(field);
    const match1 = inputValue.match(/[a-z]/) || [];
    const match2 = inputValue.match(/[A-Z]/) || [];
    const match3 = inputValue.match(/[^0-9a-zA-Z\s]/) || [];
    const match4 = inputValue.match(/[0-9]/) || [];
 
    //length
    if (inputValue.length >= 8){
      setRule1(true);
    }else{
      setRule1(false);
      valid = false;
    }
    //lowercase
    if(match1.length >=1){
      setRule2(true);
    }else{
      setRule2(false);
      valid = false;
    }
    //uppercase
    if(match2.length >=1){
      setRule3(true);
    }else{
      setRule3(false);
      valid = false;
    }
    //symbol
    if(match3.length >=1){
      setRule4(true);
    }else{
      setRule4(false);
      valid = false;
    }
    //number
    if(match4.length >=1){
      setRule5(true);
    }else{
      setRule5(false);
      valid = false;
    }
    //!match
    if(!valid){
      setError(field, {
        type:"manual",
        message:" Password Doesn't Meet Requirements"
      })
    }else{
      clearErrors(field);
    }
  }

  const visible = (show : boolean)=>{
    setVisible(show)
  }
  return (
    <div className={`popup_password ${isVisible === true ? 'open' : 'close'}`}>
      {props.children({validate,visible})}
      <div className="popup_content">
            <p>Password Requirtments : </p>
          <ul>
            <li className={rule1 === true ? "line" : "" }>Min 8 Characters</li>
            <li className={rule2 === true ? "line" : "" }>Lowercase (a-z)</li>
            <li className={rule3 === true ? "line" : "" }>Uppercase (A-Z)</li>
            <li className={rule4 === true ? "line" : "" }>Symbols (?#$..)</li>
            <li className={rule5 === true ? "line" : "" }>Number (0-9)</li>
          </ul>
      </div>
    </div>
  )
}
