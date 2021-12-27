import {
    AUTH_LOGIN,
  } from "./types";
  
import { fetchLoginFx } from "../services";
  
export const login = (values) => async (dispatch) => {
    try {
        const res = await fetchLoginFx(values);
        dispatch({
            type: AUTH_LOGIN,
            payload: res.data,
        });
    } catch (err) {
        console.log(err);
    }
};
