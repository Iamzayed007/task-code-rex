
import React from 'react'
import { Card ,Button, Col} from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
const User = (props) => {
    const {firstName,lastName,email,company,id}=props.user
    const navigate = useNavigate();
    // console.log(firstName,lastName)
    const getUserPosts = (id) =>{
        navigate(`/${id}`)
    }
  return (
    // <div>
        <Col>
        <Card style={{ width: '18rem' }} className='curserPointer mt-3' onClick={()=>{getUserPosts(id)}}>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Name: {firstName+' '+lastName}  </Card.Title>
        <Card.Text>
          Email: {email}
          <br />
          Company: {company.name}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </Col>
    // </div>
  )
}

export default User