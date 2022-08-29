import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import data from '../../data.json'
import { setFavorite } from '../../utils/studentReducer'

export default function ProductDetails() {
  const favorite = useSelector(state => state.student)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>My favorite student: {favorite.name}</h1>

      {data.map(student => (
          <div key={student.id}>
            <h2>{student.name}</h2>
            <button onClick={() => dispatch(setFavorite(student.name))}>Make this student the teachers' favorite?</button>
          </div>
        ))}


    </div>
  )
}
