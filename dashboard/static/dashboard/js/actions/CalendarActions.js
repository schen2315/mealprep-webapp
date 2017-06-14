import dispatcher from "../dispatcher";

export function getThisWeek() {
  dispatcher.dispatch({
    type: "GET_WEEK"
  })
  // call ajax function to get data from database
  setTimeout(() => {
    dispatcher.dispatch({
      type: "RECEIVED_WEEK"
    })
  }, 100)
}

export function expandDay(key) {
  dispatcher.dispatch({
    type: "EXPAND_DAY",
  })
}
