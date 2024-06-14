const initState = [null,0]
function AuthReducer(state=initState, action){
    switch(action.type){
        case "login": 
            // console.log("login");
            state[0]=action.data.un;
            state[1]=action.data.role;
            return state;
        case "logout":
            state[0]=null;
            state[1]=0;
            return state;
        default:
            return state;
    }
}
export default AuthReducer;