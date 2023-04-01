import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'

export const NavBar = () => {
  return (
    <div className='Nav'>
        <p>Tienda</p>
        <p>Distorsiones</p>
        <p>Moduladores</p>
        <p>Otros</p>
        <CartWidget/>
    </div>
  )
}
