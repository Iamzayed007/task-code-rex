import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useUser from './hooks/useUser';
import { Card, Spinner } from 'react-bootstrap';

const Post = () => {
    let { uId } = useParams();
    const {user,post,getUserPost} =useUser()
    
     useEffect(() => {
        
        getUserPost(uId)
      
       
      }, [])
  return (
    <div>
        <Card className='my-2 mx-2' >
        <Card.Body>
            <Card.Title>Name: {user?.firstName+' '+user?.lastName}  </Card.Title>
            <Card.Text>
            Email: {user?.email}
            <br />
            Company: {user?.company?.name}
            </Card.Text>
        </Card.Body>
        </Card>
    <h4 className='text-center my-3'>Posts:</h4> <br />
    { post.posts ?
      ( post.posts.length>0 ? post.posts?.map(post =><Card key={post.id} className='my-2 mx-2' >
            <Card.Body>
                <Card.Title> {post.title}  </Card.Title>
                <Card.Text>
                 {post.body}
                </Card.Text>
            </Card.Body>
            </Card>)
            :
            <div className='text-center'><p> {user?.firstName+' '+user?.lastName} has not post anything yet</p></div>)
            :  <div className='text-center'> <Spinner animation="border" variant="primary" /></div>
    }
    </div>
  )
}

export default Post