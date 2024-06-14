import logo from './logoscm.png';
// import logo2 from './lcshos.png';
import './App.css';
import Login from './components/Login' // . indicates the components is in the same folder in src folder
import Registration from './components/Registration'
import Navigation from './components/Navigation';
import Login1 from './components/Login1';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; //npm i react-router-dom to install react-router-dom package in client cmd
import Hom from './components/Clothingmain';
import Clothing from './components/Clothing';
import Bikeparts from './components/Bikeparts';
import Bikemain from './components/Bikemain';
import Mobilemain from './components/Mobilemain';
import Carmain from './components/Carmain';
import Carparts from './components/Carparts';
import Pcmain from './components/PCmain';
import Elemain from './components/Elemain';
import Eleparts from './components/Eleparts';
import Pcparts from './components/Pcparts';
import Checkout from './components/Checkout';
import Thankyou from './components/Thankyou';
//BrowserRouter, Routes and Route are used to route from one page to another like from signup to login etc. IF ERROR try this npm install --force react-router-dom
// import { Container, Toolbar, AppBar } from '@material-ui/core'; //npm i @material-ui/core --force to install @material-ui/core package in client cmd

function App({store}) {

  function Page(){
    // console.log("page componenet");
    if(store.getState().NavReducer==="Login"){
      console.log("page componenet login");
      return(
      <div>
        <Login store={store}/>
      </div>
      );
    }

    if(store.getState().NavReducer==="Registration"){
      console.log("Registration componenet login");
      return(
        <div>
          <Registration />
        </div>
      );
    }

    if(store.getState().NavReducer==="Admin"){
      // console.log("Registration componenet login");
      return(
        <div>
          <Login1 store={store}/>
        </div>
      );
    }
  }
  console.log(store.getState());
  return(
    <div className="App">

      <div className='App-header'>
        <img className="App-logo" style={{ height:"120px",width: "120px"}} src={logo} alt="" />
        <h1 className='App-food'>SUPPLY CHAIN MANAGEMENT</h1>
        {/* <img className="App-logo" style={{ height:"120px",width: "120px"}} src={logo2} alt="" /> */}
      </div>
      <Navigation store={store}/>

      <div className='App-body' id="appBody">
        {/* <Page /> */}

          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Login store={store}/>} />
              <Route path='/log' element={<Login store={store}/>} />
              <Route path='/reg' element={<Registration />} />
              <Route path='/adm' element={<Login1 store={store}/>} />
              <Route path='/hom' element={<Hom/>} />
              <Route path='/bike' element={<Bikemain/>} />
              <Route path='/mob' element={<Mobilemain/>} />
              <Route path='/pc' element={<Pcmain/>} />
              <Route path='/ele' element={<Elemain/>} />
              <Route path='/car' element={<Carmain/>} />
              <Route path='/clo' element={<Clothing/>} />
              <Route path='/bparts' element={<Bikeparts/>} />
              <Route path='/cparts' element={<Carparts/>} />
              <Route path='/eparts' element={<Eleparts/>} />
              <Route path='/pparts' element={<Pcparts/>} />
              <Route path='/cout' element={<Checkout/>} />
              <Route path='/thanks' element={<Thankyou/>} />
            </Routes>
          </BrowserRouter>
      </div>
      
    </div>
  );
}

export default App;
