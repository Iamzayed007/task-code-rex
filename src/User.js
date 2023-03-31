
import React from 'react'
import { Card , Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const User = (props) => {
    const {firstName,lastName,email,company,id}=props.user
    const navigate = useNavigate();

    const getUserPosts = (id) =>{
        navigate(`/${id}`)
    }
  return (
    <div>
        <Col>
        <Card style={{ width: '18rem' }} className='curserPointer mt-3' onClick={()=>{getUserPosts(id)}}>
      <Card.Body>
        <Card.Title>Name: {firstName+' '+lastName}  </Card.Title>
        <Card.Text>
          Email: {email}
          <br />
          Company: {company.name}
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
     </div>
  )
}

export default User