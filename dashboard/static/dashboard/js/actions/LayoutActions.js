import dispatcher from "../dispatcher";

export function nav_toggle() {
  dispatcher.dispatch({
    type: "NAV_TOGGLE"
  })
}
