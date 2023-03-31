import { useState } from "react";

const useUser =()=>{
    const [users,setUsers] = useState([])
    const [user,setUser] = useState([])
    const [post,setPost] = useState([])
  
    const getAllUsers =()=>{
        fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data =>{setUsers(data)
        });
    }
    const getUserPost =(id)=>{
        fetch(`https://dummyjson.com/users/${id}`)
        .then(res => res.json())
        .then(data =>{setUser(data)
            console.log(data)
        })
        fetch(`https://dummyjson.com/users/${id}/posts`)
        .then(res => res.json())
        .then(data =>{setPost(data)
            console.log(data)
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