import React, { useEffect } from 'react'
import useUser from './hooks/useUser'
import User from './User'
import { Row, Spinner } from 'react-bootstrap'

const Users = () => {
    const {users,getAllUsers} =useUser()
    useEffect(() => {
        getAllUsers()
      
       
      }, [])
  return (
    <div>
        <Row  lg={4} md={3} className="g-4">
        {  users.users ?
            users.users?.map(user =><User key={user.id} user={user}/>)
            :
            <Spinner animation="border" variant="primary" />
        }
        </Row> 
    </div>
  )
}

export default Users