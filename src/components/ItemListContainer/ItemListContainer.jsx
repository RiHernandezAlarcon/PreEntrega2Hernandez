import React, { useEffect, useState } from 'react';
import './ItemListContainer.css';
import { stock } from '../../data/stock';
import { h2 } from 'fontawesome';
import { pedirProductos } from '../../helpers/pedirProductos';
import { ItemList } from '../ItemList/ItemList';
import {ImSpinner3} from 'react-icons/im'
import { useParams } from 'react-router-dom';


export const ItemListContainer = (prop) => {

  const [items,setItems]=useState([])
  const [loading,setLoading]= useState(false)

  const {categoryId} =useParams()
  
 
  useEffect(()=>{
    setLoading(true)
    //FUNCION PARA OBTENER PRODUCTOS
    pedirProductos()
      .then((res)=>{
        if(categoryId){
          setItems(res.filter(prod=>prod.category==categoryId))

        }else{
          setItems(res)
        }
      })
      .catch((error)=>console.log(error))
      .finally(()=>{setLoading(false)})
  },[categoryId])



  return (
    <div>
      {    loading? <div className='spinner'><ImSpinner3/></div>: <ItemList productos = {items}/>
      }
    </div>
  )
  
}

