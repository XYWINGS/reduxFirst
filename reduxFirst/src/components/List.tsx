import React from 'react'
import { useAppSelector } from '../store/store'

const List = () => {
    //this goes to the person slice via the selector and access the person arrays persons
    const persons = useAppSelector((state) => state.person.persons)
    console.log(persons)
  return (
    <div>
      <p>This is the list of perons</p>
      <table>
        <thead>
            <tr>
                <th>ID </th>
                <th>Name</th>
            </tr>
        </thead>

        <tbody>
            {persons.map(person=>(
                <tr key={person.id}>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                </tr>
            ))}
        </tbody>

      </table>
    </div>
  )
}

export default List
