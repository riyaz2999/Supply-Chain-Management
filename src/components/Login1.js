// import logo from '../logo.svg'; //. means in same folder means components folder .. means 1 folder back means src folder
// In src folder there is a folder called components in components there is file called Login.js 
// logo is in src folder so we used ../logo.svg to import
import '../App.css';
import axios from 'axios'; //axios is for send or get data from server
import { useState } from 'react';
import Homeowner from './Homeowner.js';

function Login1({store}){
    const[un,setUn]=useState(null);
    const [result,setResult]=useState(null);
    // var result1=null;

    function handleForm(event) {
        alert("Form Submitted");
        event.preventDefault();// used to doesnot showcase the id and password in link when we click login If this line was not there means when we click login then the id and pass will be visible in link 
        // const data=new FormData(event.currentTarget);
        // setUn(data.get("un"));
        // // const un=data.get("un");
        // const pw=data.get("pw");
        let userName=document.getElementById("userName");
        let pass=document.getElementById("pass");

        setUn(userName.value);
        const pw=pass.value;
        console.log(un+": "+pw);
        axios.get('http://localhost:8002/checkOwner',{params:{
            un: un,
            pw: pw
        }}).then((response)=>{
            console.log(response.data);

            setResult(response.data);
        }); //to get data from server
    }

    function Eye()
    {
        let pass=document.getElementById("pass")
        if(pass.type === 'password')
        {
            pass.type = 'text';
        }
        else{
            pass.type ='password';
        }
    }

    if((result===null || result==="fail" || result==="Fail") && (store.getState().AuthReducer[0]===null))
    {
        return (
            <div className='App-login'>
                <h3 style={{textShadow: "1px 1px 5px blue, -1px -1px 2px black"}}>Login Page For Admin</h3>
                <div>
                {/* <form style={{}} onSubmit={handleForm}> */}
                    <div className='App-row'>
                    {/* <p style={{textShadow: "1px 1px 5px yellow, -1px -1px 2px red"}}>User Name:</p> */}
                    <input id="userName" className='App-input' type="text" name="un" placeholder='Enter Your UserName'/>
                    </div>
                    <div className='App-row'>
                    {/* <p style={{textShadow: "1px 1px 5px yellow, -1px -1px 2px red"}}>Password: </p> */}
                    <input id="pass" className='App-input-pass' type="password" name="pw" placeholder='Enter Your Password'/>

                    <button onClick={Eye} className='eyeBtn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                    </button>
                    
                    </div>
                    <input onClick={handleForm} style={{width: "50%", height:"40px", backgroundColor:"#4169e1", fontWeight:"bold"}} type="submit" value="Login"/>
                {/* </form> */}
                </div>
                {result}
            </div>  
        );
    }
    else
    {
        // console.log("HI");
        return(
            <div>
                <Homeowner store={store} un={un}/>
            </div>
        );
    }
}

export default Login1;