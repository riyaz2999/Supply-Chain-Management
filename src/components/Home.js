// import { display } from "@mui/system";
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hom from "./Clothingmain";
import Hom1 from "./Hom1";
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function Home(props){//we can alsoe keep props or {un}
    if(props.store.getState().AuthReducer[0]==null)
    {
        props.store.dispatch({type: "login",data:{un:props.un,role:1}});
    }
    return(
        <div className="home">

            {/* <Hom/> */}
            <Hom1/>

            {/* <BrowserRouter>
                <Routes>
                <Route path='/log/hom' element={<Hom />} />
                <Route path='/hom1' element={<Hom1/>} />
                </Routes>
            </BrowserRouter>  */}

            {/* This is The home Page {props.store.getState().AuthReducer[0]} */}
            {/* <div className="container"> */}
                {/* <div className="row"> */}
                    {/* <div id="sectionHome">

                        <div className="col-12" style={{fontFamily:"Comic Sans MS",color:"white",textShadow:"1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue", marginBottom:"20px"}}>
                            SELECT YOUR HOTEL
                        </div>

                        <div style={{display:"flex"}} className="co">

                            <div className="col-4">
                                <div className="card11">
                                    <img src="https://wallpapercave.com/wp/wp1846070.jpg" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card1">
                                    <img src="https://www.hoteleventi.com/images/1700-960/2-8563da2e.jpg" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card1">
                                    <img src="https://p0.pikist.com/photos/188/759/food-hotel-buffet-holiday-restaurant-luxury-decoration-breakfast-eating.jpg" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                        </div>
                        
                        <div style={{display:"flex"}} className="co">

                            <div className="col-4">
                                <div className="card11">
                                    <img src="https://img.freepik.com/free-vector/india-background_1284-22033.jpg?w=2000" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card1">
                                    <img src="https://img.freepik.com/free-vector/india-background_1284-22033.jpg?w=2000" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                            <div className="col-4">
                                <div className="card1">
                                    <img src="https://img.freepik.com/free-vector/india-background_1284-22033.jpg?w=2000" className="card1_img" alt="" />
                                    <div className="para_card">
                                        <h1 className="para">INDIA</h1>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div> */}
                    
                {/* </div> */}
            {/* </div> */}

            {/* <script type="text/javascript" src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-static-website/js/ccbp-ui-kit.js"></script> */}
        </div>
    );
}
export default Home;