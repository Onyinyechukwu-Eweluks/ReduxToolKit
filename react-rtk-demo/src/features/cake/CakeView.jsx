import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ordered, restorked } from './cakeSlice'

export default function CakeView() {
  const numOfCakes = useSelector((state) => state.cake.numberOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Cake</h2>
      <p>Number of Cake: {numOfCakes}</p>
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <button onClick={() => dispatch(restorked(5))}>Restocked</button>
    </div>
  )
}
