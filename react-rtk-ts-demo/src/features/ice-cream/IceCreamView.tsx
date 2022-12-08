import React, { useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import { ordered, restorked } from './iceCreamSlice'
import { useAppSelector, useAppDispatch } from '../../app/hooks'

export default function IceCreamView() {
  const [value, setVaue] = useState(0)
  const numOfIcecreams = useAppSelector((state) => state.icecream.numberOfIcecream)
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>Ice-cream</h2>
      <p>Number of Ice-cream: {numOfIcecreams}</p>
      <input type="number" defaultValue={value} onChange={(e) => setVaue(parseInt(e.target.value))} />
      <button onClick={() => dispatch(ordered())}>Ordered</button>
      <button onClick={() => dispatch(restorked(value))}>Restocked</button>
    </div>
  )
}
