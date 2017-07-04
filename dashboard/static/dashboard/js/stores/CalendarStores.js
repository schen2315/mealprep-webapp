import { EventEmitter } from "events";
import dispatcher from "../dispatcher"
import sampleWeek from "./sampleWeek"

class CalendarStores extends EventEmitter {
  constructor() {
    super();
    this.week = {} //sampleWeek.week;
    this.weekDetailed = {} //sampleWeek.weekDetailed;
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_WEEK": {
        break;
      }
      case "RECEIVED_WEEK": {
        //get the data
        //save the data locally
        //update
        console.log(action.data)
        this.weekDetailed = action.data.weekDetailed
        this.week = action.data.week
        this.emit("update_week", {week: this.week, weekDetailed: this.weekDetailed})
        break;
      }
    }
  }
}

const calendarStores = new CalendarStores;

dispatcher.register(calendarStores.handleActions.bind(calendarStores));

export default calendarStores;
