import { GET_CUSTOMER_DETAILS, GET_LOGIN, GET_OFFERS, GET_POPULAR_SERVICE, REGISTER_VIA_PHONE, VERIFY_OTP, GET_ERROR } from "./types"; "./types";

const initialState = {
    getCustomerDetails = [],
    getLogin = [],
    getOffers = [],
    getPopularService = [],
    registerViaPhone = [],
    verifyOtp = [],
}

export default function(state = initialState,action){
    switch(action.type){
        case GET_CUSTOMER_DETAILS:
            return{
                ...state,
                getCustomerDetails:action.payload
            }
        case GET_LOGIN:
            return{
                ...state,
                getLogin:action.payload
            }
        case GET_OFFERS:
            return{
                ...state,
                getOffers:action.payload
            }
        case GET_POPULAR_SERVICE:
            return{
                ...state,
                getPopularService:action.payload
            }
        case REGISTER_VIA_PHONE:
            return{
                ...state,
                registerViaPhone:action.payload
            }
        case VERIFY_OTP:
            return{
                ...state,
                verifyOtp:action.payload
            }
        default:
            return state;
    }
}