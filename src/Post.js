import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import useUser from './hooks/useUser';
import { Card } from 'react-bootstrap';

const Post = () => {
    let { uId } = useParams();
    const {user,post,getAllUsers,getUserPost} =useUser()
    // const {firstName,lastName,email,company,id}=users
    //  console.log("userIs",uId)
     console.log("post",post)
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
    {
        post.posts?.map(post =><Card className='my-2 mx-2' >
            <Card.Body>
                <Card.Title>title: {post.title}  </Card.Title>
                <Card.Text>
                body: {post.body}
                </Card.Text>
            </Card.Body>
            </Card>)
    }
    </div>
  )
}

export default Post