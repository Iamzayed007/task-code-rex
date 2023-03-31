
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";

import Post from './Post';
import Header from './Header';
import Users from './Users';



function App() {


  
  return (
    <div className="">
       <BrowserRouter>
       <Header/>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:uId" element={<Post />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
