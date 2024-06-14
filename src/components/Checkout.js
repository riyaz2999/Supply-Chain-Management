import './Clothing.css';
import axios from 'axios';
import {useState} from 'react'
function Checkout() {
    const [result,setResult]=useState(null);
    const validateForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const quantity=data.get('quantity');// I added this for alert conditon
        console.log(quantity)
        if(quantity!==""){// I added this for alert conditon
               var num=Number(quantity);
               setResult(num*7900);
               console.log({
                Quantity: num,
                Price: result
               });
               axios.post("http://localhost:8001/calculate",{
                Quantity: num,
                Price: result
               }).then((response)=>{
                 console.log(response.data);
               });
               alert("Caluculated Succesfully");// I added this for alert conditon
           }
       else{// I added this for alert conditon
         alert("Enter the Quantity Correctly");
       }
    }
    return(
        <div className='content'>
           <div className='content1'>
          <form onSubmit={validateForm}>
             *Enter Name on Card : 
             <input  type="alphabet"></input><br/>
             *Enter Card Number : 
             <input  type="number" ></input><br/>
             *Enter Amount to pay : 
             <input  type="number" ></input><br/>
             *Enter Expire month : 
             <input  type="number" ></input><br/>
             *Enter Expire Year : 
             <input  type="number"></input><br/>
             *Enter CVV:
             <input  type="number"></input><br/>
          </form>
          {result}
          <div> <a href="/thanks"><button>payment</button></a> </div> 
          </div>
        </div>
    );
}
export default Checkout;