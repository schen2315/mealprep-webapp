import React from "react";

export default class Day extends React.Component {
  constructor() {
    super();
    this.meals_html_profiles = this.meals_html_profiles.bind(this);
  }
  componentWillMount() {

  }
  meals_html_profiles(profiles, key) {
    var retVal = []
    for(let i=0; i < profiles.length; i++) {
      retVal.push(
        <tr key={i}><td>{profiles[i].profile}</td><td>{profiles[i].recipe}</td></tr>
      )
    }
    return retVal;
  }
  render() {
    const date = this.props.date
    const recipes = this.props.recipes
    const today = this.props.today ? "panel-primary" : "panel-success";
    const detailed = this.props.detailed;
    const meals = this.props.meals;
    var recipe_names = ""
    for(let i=0; i < recipes.length; i++) {
      recipe_names = recipe_names + " | " + recipes[i].name;
    }
    var meals_html = [];
    for(let i=0; i < meals.length; i++) {
      meals_html.push(
        <div key={i}>
        <span>{meals[i].type}</span><span class="day-time">{meals[i].time.hour + ":"  + meals[i].time.minute + " " + (meals[i].time.am ? "am" : "pm")}</span>
        <table class="table">
          <tbody>
            {this.meals_html_profiles(meals[i].profiles)}
          </tbody>
        </table>
        </div>
      )
    }
    return (
      <div class={"panel " + today }>
        <div class="panel-heading">
          <h3 class="panel-title">
            <span>{this.props.date.dayOfWeek + ", " + date.month + " " + date.day}</span>
          </h3>
        </div>
        <div class={"panel-body " + (detailed ? "day-collapsed" : "")}>
          <span class="day-recipes">{recipe_names}</span>
        </div>
        <div class={"panel-body " + (detailed ? "" : "day-collapsed")}>
          {meals_html}
        </div>
      </div>
    );
  }
}
