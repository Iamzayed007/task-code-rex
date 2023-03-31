import React, { useEffect } from 'react'
import useUser from './hooks/useUser'
import User from './User'
import { Row } from 'react-bootstrap'

const Users = () => {
    const {user,users,getAllUsers,getUserPost} =useUser()
    // console.log("users",users)
    useEffect(() => {
        getAllUsers()
      
       
      }, [])
  return (
    <div>
        <Row  lg={4} md={3} className="g-4">
        {
            users.users?.map(user =><User key={user.id} user={user}/>)
        }
        </Row> 
    </div>
  )
}

export default Users