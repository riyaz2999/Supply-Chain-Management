// import { display } from "@mui/system";
// import axios from "axios";
// import { useState } from "react";

// function Homeowner(props){

//     const [r,setR] = useState(null);

//     const isDict = dict => {
//         return typeof dict === "object" && !Array.isArray(dict);
//     };

//     function showAll() {
//         console.log("showall")
//         axios.get('http://localhost:8000/show_all_users', {params:{

//         }}).then((response)=>{
//             console.log(response.data[0].fn)
//             setR(response.data)
//         })
//     }

//     if(r==null){
//         return(
//             <div className="home">
//                 <button onClick={()=>showAll()}> Display All User Details</button>
//             </div>
//         );
//     }
//     else {
//         if(isDict(r)) {
//             return (
//                 <div  className="home" style={{display:"flex"}}>
//                     <table border="1" style={{marginLeft:"400px"}}>
//                         <tr>
//                             <th> First Name </th> 
//                             <th> Last Name </th>
//                             <th> Email </th>  
//                         </tr>
//                         <tr>
//                             <td> {r.fn} </td>
//                             <td> {r.ln} </td>
//                             <td> {r.email} </td>
//                         </tr>
//                     </table>
//                 </div>
//             );
        
//         }
//         else 
//         {
//             console.log(r);
//             console.log("in list")
//             return (
//                 <div  className="home" style={{display:"flex"}}>
//                     <table border="1" style={{marginLeft:"400px"}}>
//                         <tr>
//                             <th> First Name </th> 
//                             <th> Last Name </th>
//                             <th> Email </th>  
//                         </tr>
//                         {r.map((obj)=>{
//                             // console.log(r.fn);
//                             return(
//                                 <tr>
//                                     <td> {obj.fn} </td>
//                                     <td> {obj.ln} </td>
//                                     <td> {obj.email} </td>
//                                 </tr>
//                             );
//                         })}
//                     </table>
//                 </div>
//             );
//         }
//     }
// }
// export default Homeowner;









import { display } from "@mui/system";
import axios from "axios";
import { useState } from "react";

function Homeowner(props){

    let counter=1;
    let counter2=0;
    function removeProducts()
    {
        let div=document.getElementById("c1");
        let i1 = document.getElementById("i1");
        div.removeChild(i1);

    }
    function addProducts()
    {
        let div=document.getElementById("add");

        
        let btn = document.createElement("button");
        btn.textContent="Remove Product";
        let div1=document.createElement("div");
        let div2=document.createElement("div");
        let div3=document.createElement("div");
        let userInputImage=document.getElementById("userInputImage");

        let p1=document.createElement("p");

        let img=document.createElement("img");

        let userInput=document.getElementById("userInput");
        p1.textContent=userInput.value;
        let str=p1.textContent;

        str=str.toLocaleLowerCase();
        
        // if(str==="watch")
        // {
        //     img.src="https://images.samsung.com/is/image/samsung/p6pim/in/2108/gallery/in-galaxy-watch4-398879-sm-r870nzgainu-481111378?$1300_1038_PNG$";
        //     <button onClick={removeProducts}>Remove Product</button>
        // }
        // else if(str==="laptop")
        // {
        //     img.src="https://m.media-amazon.com/images/I/61UGE9cZVlL._AC_SL1500_.jpg";
        //     <button onClick={removeProducts}>Remove Product</button>
        // }
        // else if(str==="furniture")
        // {
        //     img.src="https://m.media-amazon.com/images/I/61tV07vXkIL._SL1173_.jpg";
        //     <button onClick={removeProducts}>Remove Product</button>
        // }

        img.src=userInputImage.value;
        if(counter===1)
        {
            img.classList.add("card1_img");

            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(p1);
            div3.appendChild(btn);

            div1.classList.add("col-4");
            div2.classList.add("card11");
            div3.classList.add("para_card");

            div.appendChild(div1);
            counter=counter+1;        
        }
        else{
            img.classList.add("card1_img");

            div1.appendChild(div2);
            div2.appendChild(img);
            div2.appendChild(div3);
            div3.appendChild(p1);

            div1.classList.add("col-4");
            div2.classList.add("card1");
            div3.classList.add("para_card");

            div.appendChild(div1);
            counter=counter+1;   
        }


    }

    return(

    <div className="home">
    <div id="sectionHome">

    <div className="col-12" style={{fontFamily:"Calibri",color:"white",textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", marginBottom:"30px"}}>
        {/* <h1>SELECT YOUR HOTEL</h1> */}
        SELECT TYPE OF GOOD
    </div>

    <div style={{display:"flex"}} className="co" id="c1">

        <div className="col-4" id="i1">
            <div className="card11">
                <img src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/12099/images/iEaqzcm6QyZlduTAJ2fd_Blog_cover_posts_3.png" className="card1_img" alt="" />
                <div className="para_card">
                    <a style={{textDecoration:"none"}} href="/hom" ><h1 className="para">Clothing</h1> </a>
                    <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card1"> 
                <img src="https://5.imimg.com/data5/XL/IJ/MY-10298770/mobile-phone-spare-parts-500x500.jpg" className="card1_img" alt="" />
                <div className="para_card">
                <a style={{textDecoration:"none"}} href="/mob" ><h1 className="para">Mobile Parts</h1></a>
                <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card1">
                <img src="https://www.pcworld.com/wp-content/uploads/2023/02/2023_0202_12574100.jpg?quality=50&strip=all&w=1024" className="card1_img" alt="" />
                <div className="para_card">
                <a style={{textDecoration:"none"}} href="/pc" ><h1 className="para">PC Parts</h1></a>
                <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>

    </div>

    <div style={{display:"flex"}} className="co">

        <div className="col-4">
            <div className="card11">
                <img src="https://pictures.dealer.com/l/lyonwaugh/0898/db70832d9413e82b2dfd00040a4f5d4ex.jpg" className="card1_img" alt="" />
                <div className="para_card">
                <a style={{textDecoration:"none"}} href="/car"><h1 className="para">Car Parts</h1></a>
                <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card1">
                <img src="https://5.imimg.com/data5/OQ/LV/ER/SELLER-5090795/royal-enfield-spare-parts-1000x1000.jpg" className="card1_img" alt="" />
                <div className="para_card">
                <a style={{textDecoration:"none"}} href="/bike" ><h1 className="para">Bike Parts</h1></a>
                <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>

        <div className="col-4">
            <div className="card1">
                <img src="https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=" className="card1_img" alt="" />
                <div className="para_card">
                <a style={{textDecoration:"none"}} href="/ele" ><h1 className="para">Electronic Parts</h1></a>    
            <button onClick={removeProducts}>Remove Product</button>
                </div>
            </div>
        </div>
    </div>

    <div style={{display:"flex"}} className="co" id="add">

    </div>

    <div className="col-4" style={{marginLeft:"570px"}}>
        <div className="card1">
            <img src="https://booster.io/wp-content/uploads/product-add-to-cart-e1438362099361.png" className="card1_img" alt="" />
            <div className="para_card" style={{height:"120px"}}>
            Name: <input id="userInput" /><br/>
            Image URL: <input id="userInputImage" /> 
            <button onClick={addProducts}>Add Products</button>
            
            </div>
        </div>
    </div>

</div>
</div>
);
}
export default Homeowner;