const loggedReducer =(state= true, action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return  true;
            case 'SIGN_OFF':
            return false;

            default:
                return state;


    }
};
export default loggedReducer;