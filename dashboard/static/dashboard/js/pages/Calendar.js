import React from "react";
import axios from "axios";

import * as CalendarActions from "../actions/CalendarActions"
import CalendarStores from "../stores/CalendarStores"
import Day from "../components/calendar/Day"

export default class Calendar extends React.Component {
  constructor() {
    super();
    this.getThisWeek = this.getThisWeek.bind(this);
    this.getThisMonth = this.getThisMonth.bind(this);
    this.loadThisWeek = this.loadThisWeek.bind(this);

    this.state = {
      render: false,
      expand: -1
    }
    this.week = []
    this.weekDetailed = []
  }
  componentWillMount() {
    CalendarStores.on("update_week", this.loadThisWeek)
    this.getThisWeek()
    console.log("send post request")
    axios.post("https://127.0.0.1:8000/", {}).then((response)=> {console.log(response)});
  }
  componentWillUnmount() {
    CalendarStores.removeListener("update_week", this.loadThisWeek)
  }
  getThisWeek() {
    CalendarActions.getThisWeek();
  }
  getThisMonth() {

  }
  loadThisWeek(args) {
    console.log(args.week);

    this.week = args.week;
    this.weekDetailed = args.weekDetailed;
    this.setState({render: true})
  }
  expandDay(index, event) {
    if(this.state.expand !== index)
      this.setState({expand:index});
    else this.setState({expand:-1});
    // CalendarActions.expandDay();
  }
  render() {

    if(this.state.render) {
      // const date = this.date;
      // const nextMeal = this.nextMeal;
      const week = this.week;
      const weekDetailed = this.weekDetailed;
      var week_html = []
      for(let i=0; i < week.length; i++) {
        week_html
          .push(
            <div onClick={this.expandDay.bind(this, i)} key={i}>
            <Day
            date = {week[i].date}
            recipes= {week[i].recipes}
            today={week[i].today}
            detailed = {i == this.state.expand ? true : false}
            meals = {weekDetailed[i].meals}
          /></div>
        )
      }
      return (
        <div class="calendar">
          <h2 class="calendar-title">Calendar</h2>
          <div class="container-fluid calendar-mobile">
                {week_html}
          </div>
        </div>
      );
    }
    return (<div>Loading...</div>);
  }
}
