import { type } from 'os'
import React from 'react'
type ChildPorps ={

} 
let isVisible : boolean
export const AggreValidate = () => {
  return (
    <div className={`popup_agre ${isVisible === true ? 'aggre' : 'close' }`}>
      <div className=""> 
          <p>I Agree to Term of Services and Privacy Policy</p>
      </div>
      <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vero inventore iste ut sequi nemo corporis, sapiente sit accusamus adipisci amet quo ea unde atque sed rerum at ipsa commodi!</p>
      </div>
    </div>
  )
}
