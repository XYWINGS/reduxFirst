import React, { useRef } from 'react'
import { addPerson } from '../store/feature/personSlice'
import { useAppDispatch } from '../store/store'

const Add = () => {
    const name = useRef<string>("")
    const dispatch = useAppDispatch()
    return (
    <div>
        <label>Person Name</label>
        <input
            onChange={(e) => (name.current = e.target.value)}
        ></input>

        <button
            onClick={()=> dispatch(addPerson({name:name.current}))}
            >Add
        </button>
    </div>
    )
}

export default Add
