import dispatcher from "../dispatcher";
import axios from "axios";
import Cookies from "js-cookie"

//const host = "http://127.0.0.1:8000";

export function isValidNewUser(data) {
  dispatcher.dispatch({
    type: "PENDING_VALID_NEW_USER",
    data: data
  });
  axios({
    method: 'post',
    // eventually change to https
    //url: host + "/isvalidnewuser/",
    url: "/isvalidnewuser/",
    data: data,
    headers: {
      'Content-Type': 'application/json'
    }
  }).then((res) => {
    dispatcher.dispatch({
      type: "IS_VALID_NEW_USER",
      data: res.data
    })
  })
}
export function createUser(data) {
  dispatcher.dispatch({
    type: "CREATING_NEW_USER",
    data: data
  });
  axios({
    method: 'post',
    // eventually change to https
    //url: host + "/createuser/",
    url: "/createuser/",
    data: data,
  }).then((res) => {
    let type = "CREATE_NEW_USER_FAIL";
    if(res) type = "CREATE_NEW_USER_SUCCESS"
    dispatcher.dispatch({
      type: type
    })
  })
}
export function loginUser(fields) {
  dispatcher.dispatch({
    type: "LOGGING_IN"
  });
  axios({
    method: 'post',
    //url: host + "/loginuser/",
    url: "/loginuser/",
    data: fields,
    headers: { 'X-CSRFToken': Cookies.get('csrftoken') }
  }).then((res) => {
    //dispatch new action
    console.log(res)
    if(res.data.success == 1) {
      console.log("loggedin")
      dispatcher.dispatch({
        type: "LOGGED_IN"
      })
    }
  })
}
export function logoutUser() {
  dispatcher.dispatch({
    type: "LOGGING_OUT"
  });
  axios({
    method: 'get',
    //url: host + "/logoutuser/",
    url: "/logoutuser/",
  }).then((res) => {
    dispatcher.dispatch({
      type: "LOGGED_OUT"
    })
  })
}