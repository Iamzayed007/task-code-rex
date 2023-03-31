import { useState } from "react";
import { useParams } from "react-router-dom";

const useUser =()=>{
    const [users,setUsers] = useState([])
    const [user,setUser] = useState([])
    const [post,setPost] = useState([])
  
    // console.log("userIs",id)
    const getAllUsers =()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data =>{setUsers(data)
            // console.log(data)
            // console.log(users)
        });
    }
    const getUserPost =(id)=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data =>{setUser(data)
            console.log(data)
            // console.log(user,"post")
        })
        fetch(`https://dummyjson.com/users/${id}/posts`)
        .then(res => res.json())
        .then(data =>{setPost(data)
            console.log(data)
            // console.log(user,"post")
        })
    }
return{
    user,
    users,
    post,
    getAllUsers,
    getUserPost
}
}
export default useUser;