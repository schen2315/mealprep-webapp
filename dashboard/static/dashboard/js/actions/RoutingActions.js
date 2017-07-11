import dispatcher from "../dispatcher";
import axios from "axios";
import Cookies from "js-cookie"

//const host = "http://127.0.0.1:8000";

export function getSession() {
  dispatcher.dispatch({
    type: "GETTING_SESSION"
  });
  axios({
    method: 'get',
    //url: host + "/getsession/",
    url: "/getsession/",
    headers: { 'X-CSRFToken': Cookies.get('csrftoken') }
  }).then((res)=> {
    console.log(res)
    if(res.data['success'] == 1) {
      dispatcher.dispatch({
        type: "GET_SESSION_SUCCESS"
      });
    } else {
      dispatcher.dispatch({
        type: "GET_SESSION_FAIL"
      });
    }
  })
}
