import { useEffect, useState } from 'react'

import './App.css'
import Add from './components/Add'
import List from './components/List'
import { useAppDispatch } from './store/store'
import { fetchPerson } from './store/feature/personSlice'

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
    </div>
  )
}

export default App
