import { UPDATE_USER, UPDATE_USER_SUCCESS, UPDATE_USER_FAIL } from "./types";
import { postRequest } from "../../../core/network";
import endpoints from "../../../constants/endPoints.json";
import { notification } from "antd";

export const selectCountry = (data) => (dispatch) => {
  dispatch({ type: UPDATE_USER });
  var {country, token} = data

  postRequest({country: country}, undefined, undefined, token, endpoints.instructor.setCountry)
    .then((response) => {
      console.log(response)
      const { data } = response;
      notification.success({message: `${country} selected`})
      return dispatch({
        type: UPDATE_USER_SUCCESS,
        payload: data.payload
      });
    })
    .catch((err) => {
      notification.error({message: "Something Went Wrong"})
      console.log(err);
      return dispatch({
        type: UPDATE_USER_FAIL,
      });
    });
};