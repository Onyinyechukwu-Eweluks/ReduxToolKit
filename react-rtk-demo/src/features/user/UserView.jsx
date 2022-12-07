import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {fetchUsers} from './userSlice'

export default function UserView() {
  const user = useSelector((state) => state.users.users)
  const dispatch = useDispatch()
  useEffect(()=> {
    dispatch(fetchUsers())
  }, [])
  console.log('users: ', user)
  return (
    <div>
      <h2>Users</h2>
      <h2>List of Users</h2>
      {user.loading && <div>Loading...</div>}
      {!user.loading && user.error ? <div>Error: {user.error}</div> : null}
      {!user.loading && user.length ? (
        <ul>
          {user.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
