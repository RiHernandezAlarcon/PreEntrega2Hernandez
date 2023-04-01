import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import './CartWidget.css'
export const CartWidget = () => {
  return (
    <div className='CartW'>
    <FaShoppingCart  />
    <b>1</b>
    </div>
  )
}
