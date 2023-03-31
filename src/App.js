import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import useUser from './hooks/useUser';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import User from './User';
import Post from './Post';
import Header from './Header';
import Users from './Users';



function App() {
  const {user,users,getAllUsers,getUserPost} =useUser()
  // useEffect(() => {
  //   getAllUsers()
  
   
  // }, [])
  
  return (
    <div className="">
       <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:uId" element={<Post />} />
      </Routes>
    </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
