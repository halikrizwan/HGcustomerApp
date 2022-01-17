import { GET_CUSTOMER_DETAILS, GET_LOGIN, GET_OFFERS, GET_POPULAR_SERVICE, REGISTER_VIA_PHONE, VERIFY_OTP, GET_ERROR } from "./types"; "./types";
import { BASE_URL } from "../../base_file";

export const getCustomerDetails = () => {

}

export const getLogin = (data) => dispatch => {
    fetch(`${BASE_URL}customer/validatePhoneNo`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body: data
    })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_LOGIN,
                payload: res
            })
        })
        .catch(e=>{
            console.log(e)
            dispatch({
                type: GET_ERROR,
                payload: e
            })
        })
}

export const getOffers = (city,lang) => {
    fetch(`${BASE_URL}Webapi/offers?city=${city}&language=${lang}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_OFFERS,
                payload: res
            })
        })
        .catch(e=>{
            console.log(e)
            dispatch({
                type: GET_ERROR,
                payload: e
            })
        })
}

export const getPopularService = (city,lang) => {
    fetch(`${BASE_URL}/webapi/getServiceGroup?city=${city}&language=${lang}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        }
    })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: GET_POPULAR_SERVICE,
                payload: res
            })
        })
        .catch(e=>{
            console.log(e)
            dispatch({
                type: GET_ERROR,
                payload: e
            })
        })
}

export const registerViaPhone = (data) => {
    fetch(`${BASE_URL}customer/registerViaPhone`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
        },
        body:data
    })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: REGISTER_VIA_PHONE,
                payload: res
            })
        })
        .catch(e=>{
            console.log(e)
            dispatch({
                type: GET_ERROR,
                payload: e
            })
        })
}

export const verifyOtp = (data) => {
    fetch(`${BASE_URL}customer/verifyOTP1`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
        },
        body:data
    })
        .then(response => response.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: VERIFY_OTP,
                payload: res
            })
        })
        .catch(e=>{
            console.log(e)
            dispatch({
                type: GET_ERROR,
                payload: e
            })
        })
}