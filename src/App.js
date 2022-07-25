
import './App.css';
import Header from './components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter,Routes,Route,} from "react-router-dom";
import Detail from './Pages/Detail';



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
          <Route  path='/product/:id' element={<Detail />}/>    {/*prop path is the path that comes in url*/}
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;


//Steps for routing 
//1 Construct the URL on the top using Link tag in the respective component.
//2 Match that URL with the route tag in App.js.  in case of dynamic url use a (:/variable_name ) format, so that the value
//  generated in URL previously dynamically will be stored in that variable i.e /product/1   , this 1 will be stored in the variable.
//  So we actually catch the dynamic value in the variable
//3 use that variable in the respective tag i.e Detail in this  case by using useParams hook. our URL has parameters
//4 based on that id (variable) received from URL, iterate the whole array of product(data) and match that id received from URL 
//  with the id in the array. return that matching product and display it
//  i.e. product/2/3/4  all these are parameters in URL. we can use  them for special purpose.