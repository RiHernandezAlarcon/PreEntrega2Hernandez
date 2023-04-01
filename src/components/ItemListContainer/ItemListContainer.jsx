import React from 'react'
import './ItemListContainer.css'
export const ItemListContainer = (prop) => {
  return (
    <div className='ItemListContainer'>{prop.greeting}</div>
  )
}
