import React from 'react'
import "./NavBar.css"
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <div className='Nav'>
        <Link className='link' to="/">Todos los pedales</Link>
        <Link className='link' to='/productos/distorsion'>Distorsiones</Link>
        <Link className='link' to='/productos/modulador'>Moduladores</Link>
        {/* <Link to="/counter">Contador</Link>
        <Link className='link' to="/pika">Pokemons</Link> */}
        <Link className='link' to='/cart'><CartWidget/></Link>
    </div>
  )
}
