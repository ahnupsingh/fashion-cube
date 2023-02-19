/*
 ** Author: Anup Kumar Singh
 ** Author URL: https://ahnupsingh.github.com
 ** Github URL: https://github.com/ahnupsingh/new-fashion-tailors
 */

import { register } from "../../ServerRequest";

export const userRegister = (
  fullname,
  email,
  password,
  verifyPassword
) => dispatch => {
  dispatch({
    type: POST_REGISTER_BEGIN
  });

  return register(fullname, email, password, verifyPassword)
    .then(res => {
      dispatch({
        type: POST_REGISTER_SUCCESS,
        payload: res
      });

      return res;
    })
    .catch(error => {
      dispatch({
        type: POST_REGISTER_FAIL,
        payload: { error }
      });

      throw error;
    });
};

export const POST_REGISTER_BEGIN = "POST_REGISTER_BEGIN";
export const POST_REGISTER_SUCCESS = "POST_REGISTER_SUCCESS";
export const POST_REGISTER_FAIL = "POST_REGISTER_FAIL";
