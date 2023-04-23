import React from 'react';
import './Item.css'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
export const Item = ({ id, description, price, image, category }) => {
  // Pasamos mediante props, cada propiedad de nuestro productos(objetos) y lo colocamos por props en nuestro return
  return (
    // <div>
    //     <h3>{id}</h3>
    //     <h3>{description}</h3>
    //     <h3>{price}</h3>
    //     <img src={image}></img>
    //     <h3>{category}</h3>
    // </div>

    
    <div className='item'>
       <Card className='card' style={{ height: '25rem',width:'20rem'}}>
         <Card.Img className='imagen' variant="top" src={image} />
         <Card.Body>
           <Card.Title>Producto: {id}</Card.Title>
           <Card.Title>Descripción: {description}</Card.Title>
           <Card.Title>${price}</Card.Title>
           <Card.Title>Categoria: {category}</Card.Title>
           <Link to={`/detail/${id}`}>
            <Button variant="primary">Ver más</Button>
           </Link>
         </Card.Body>
       </Card>
     </div>
  )
}