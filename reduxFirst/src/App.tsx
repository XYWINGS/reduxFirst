import { useEffect, useState } from 'react'

import './App.css'
import Add from './components/Add'
import List from './components/List'
import { useAppDispatch } from './store/store'
import { fetchPerson } from './store/features/personSlice'
import Cart from './components/Cart'
import Products from './components/Products'

function App() {
   //use this use effect fetchperson if u have a db connected
   const dispatch = useAppDispatch()
   useEffect(()=>{
    dispatch(fetchPerson())
   })

  return (
    <div>
      <Add />
      <List />
      <Products />
      <Cart />
    </div>
  )
}

export default App
