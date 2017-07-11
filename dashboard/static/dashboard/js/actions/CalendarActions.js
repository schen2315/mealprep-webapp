import dispatcher from "../dispatcher";
import axios from "axios";

import RoutingStores from "../stores/RoutingStores"

//const host = "http://127.0.0.1:8000";

export function getThisWeek() {
  // setTimeout is needed here to prevent the 
  // "dispatcher cannot dispatch in the middle of a dispatch error"
  // https://stackoverflow.com/questions/30357120/how-to-avoid-dispatching-in-the-middle-of-a-dispatch
  setTimeout(()=> {
    dispatcher.dispatch({
      type: "GET_WEEK"
    })
  }, 0)
  // call ajax function to get data from database
  axios({
    method: 'post',
    // eventually change to https
    //url: host + "/getweek/",
    url: "/getweek/",
  }).then((res) => {
    if(res.data.success == parseInt(1)) {
      dispatcher.dispatch({
        type: "RECEIVED_WEEK",
        data: res.data.data
      })
    }
  })
}

//does this function even get used?
export function expandDay(key) {
  dispatcher.dispatch({
    type: "EXPAND_DAY",
  })
}
