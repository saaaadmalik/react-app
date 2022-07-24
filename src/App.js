
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter,Routes,Route,} from "react-router-dom";



function App() {
 
 
  return (
    <div className='container'>
      {/* <Header />
      <Home />
      <Register />
      <Login /> */}
      
      <BrowserRouter >                                       {/*Browser router tracks the path in url of browser*/}
        <Header />
        <Routes>                                             {/*Contains the elements that needs path to follow*/}
          <Route  path='/' element={<Home />}/>              {/*prop path is the path that comes in url*/}
          <Route  path='/login' element={<Login />}/>        {/*prop path is the path that comes in url*/}
          <Route  path='/signup' element={<Register />}/>    {/*prop path is the path that comes in url*/}
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
