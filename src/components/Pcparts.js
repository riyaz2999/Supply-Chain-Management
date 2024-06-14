import './Clothing.css';
import axios from 'axios';
import {useState} from 'react'
function Pcparts() {
    const [result,setResult]=useState(null);
    const validateForm = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const quantity=data.get('quantity');// I added this for alert conditon
        console.log(quantity)
        if(quantity!==""){// I added this for alert conditon
               var num=Number(quantity);
               setResult(num*40000);
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
             *Enter quantity : <input  type="number" name="quantity"></input><br/>
             <br/>
             <br/>
             <input type="submit" value="Calculate price" style={{color:"white" , backgroundColor:"red", height:"40px",width:"100px"}}/>
          </form>
          {result}
         <div> <a href="/cout"><button>Proceed for payment</button></a> </div> 
          </div>
        </div>
    );
}
export default Pcparts;