import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { ordered, restorked } from './cakeSlice'

export default function CakeView() {
  const numOfCakes = useAppSelector((state) => state.cake.numberOfCakes)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Cake</h2>
      <p>Number of Cake: {numOfCakes}</p>
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <button onClick={() => dispatch(restorked(5))}>Restocked</button>
    </div>
  )
}
