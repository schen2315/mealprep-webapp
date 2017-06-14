import { EventEmitter } from "events";
import dispatcher from "../dispatcher"

class CalendarStores extends EventEmitter {
  constructor() {
    super();
    this.week =
    [{
      "date": {
        "dayOfWeek": "Monday",
        "month": "June",
        "day": 1,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Ramen",
          "type": "Dinner"
        },
        {
          "name": "Eggs & Toast",
          "type": "Dinner"
        }
      ],
      "today": false
    }, {
      "date": {
        "dayOfWeek": "Tuesday",
        "month": "June",
        "day": 2,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Eggs & Toast",
          "type": "2nd Dinner"
        },
        {
          "name": "Roasted Bananna",
          "type": "Lunch"
        }
      ],
      "today": false
    }, {
      "date": {
        "dayOfWeek": "Wednesday",
        "month": "June",
        "day": 3,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Bacon topped Bacon",
          "type": "Lunch"
        },
        {
          "name": "Roasted Bananna",
          "type": "Brunch"
        }
      ],
      "today": false
    }, {
      "date": {
        "dayOfWeek": "Thursday",
        "month": "June",
        "day": 4,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Roasted Bananna",
          "type": "2nd Dinner"
        },
        {
          "name": "Eggs & Toast",
          "type": "Dinner"
        }
      ],
      "today": true
    }, {
      "date": {
        "dayOfWeek": "Friday",
        "month": "June",
        "day": 5,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Ramen",
          "type": "Breakfast"
        },
        {
          "name": "Bacon topped Bacon",
          "type": "Breakfast"
        }
      ],
      "today": false
    }, {
      "date": {
        "dayOfWeek": "Saturday",
        "month": "June",
        "day": 6,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Eggs & Toast",
          "type": "Brunch"
        },
        {
          "name": "Fried Chicken",
          "type": "2nd Dinner"
        }
      ],
      "today": false
    }, {
      "date": {
        "dayOfWeek": "Sunday",
        "month": "June",
        "day": 7,
        "year": 2017
      },
      "recipes": [
        {
          "name": "Fried Chicken",
          "type": "Lunch"
        },
        {
          "name": "Eggs & Toast",
          "type": "Brunch"
        }
      ],
      "today": false
    }]
    this.weekDetailed = [{
  "date": {
    "dayOfWeek": "Monday",
    "month": "June",
    "day": 1,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Georgiana",
          "recipe": "Salad"
        },
        {
          "profile": "Marthena",
          "recipe": "Beef"
        },
        {
          "profile": "Vikky",
          "recipe": "Pork"
        }
      ],
      "type": "2nd Dinner",
      "time": {
        "hour": 5,
        "minute": 11,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Faustina",
          "recipe": "Pork"
        },
        {
          "profile": "Bernita",
          "recipe": "Salad"
        },
        {
          "profile": "Carolyn",
          "recipe": "Salad"
        }
      ],
      "type": "2nd Dinner",
      "time": {
        "hour": 12,
        "minute": 41,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Tanny",
          "recipe": "Salad"
        },
        {
          "profile": "Margaret",
          "recipe": "Salad"
        },
        {
          "profile": "Barri",
          "recipe": "Pork"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 11,
        "minute": 23,
        "am": true
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Tuesday",
    "month": "June",
    "day": 2,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Saundra",
          "recipe": "Beef"
        },
        {
          "profile": "Eberto",
          "recipe": "Pork"
        },
        {
          "profile": "Allyn",
          "recipe": "Pork"
        }
      ],
      "type": "Lunch",
      "time": {
        "hour": 9,
        "minute": 49,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Bern",
          "recipe": "Chicken"
        },
        {
          "profile": "Torre",
          "recipe": "Salad"
        },
        {
          "profile": "Cristian",
          "recipe": "Salad"
        }
      ],
      "type": "Dinner",
      "time": {
        "hour": 1,
        "minute": 55,
        "am": true
      }
    },
    {
      "profiles": [
        {
          "profile": "Alberto",
          "recipe": "Chicken"
        },
        {
          "profile": "Stafani",
          "recipe": "Chicken"
        },
        {
          "profile": "Merci",
          "recipe": "Chicken"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 3,
        "minute": 16,
        "am": true
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Wednesday",
    "month": "June",
    "day": 3,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Prue",
          "recipe": "Salad"
        },
        {
          "profile": "Dorrie",
          "recipe": "Pork"
        },
        {
          "profile": "Devlin",
          "recipe": "Chicken"
        }
      ],
      "type": "Brunch",
      "time": {
        "hour": 6,
        "minute": 31,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Lois",
          "recipe": "Pork"
        },
        {
          "profile": "Jordanna",
          "recipe": "Chicken"
        },
        {
          "profile": "Arlie",
          "recipe": "Chicken"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 4,
        "minute": 13,
        "am": true
      }
    },
    {
      "profiles": [
        {
          "profile": "Jorie",
          "recipe": "Pork"
        },
        {
          "profile": "Culver",
          "recipe": "Pork"
        },
        {
          "profile": "Ario",
          "recipe": "Salad"
        }
      ],
      "type": "2nd Dinner",
      "time": {
        "hour": 1,
        "minute": 26,
        "am": true
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Thursday",
    "month": "June",
    "day": 4,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Sherlocke",
          "recipe": "Beef"
        },
        {
          "profile": "Luciano",
          "recipe": "Salad"
        },
        {
          "profile": "Ives",
          "recipe": "Beef"
        }
      ],
      "type": "Lunch",
      "time": {
        "hour": 10,
        "minute": 15,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Alex",
          "recipe": "Pork"
        },
        {
          "profile": "Anett",
          "recipe": "Pork"
        },
        {
          "profile": "Willamina",
          "recipe": "Salad"
        }
      ],
      "type": "Brunch",
      "time": {
        "hour": 2,
        "minute": 27,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Christos",
          "recipe": "Chicken"
        },
        {
          "profile": "Hansiain",
          "recipe": "Pork"
        },
        {
          "profile": "Reinhard",
          "recipe": "Pork"
        }
      ],
      "type": "Lunch",
      "time": {
        "hour": 4,
        "minute": 52,
        "am": true
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Friday",
    "month": "June",
    "day": 5,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Hank",
          "recipe": "Chicken"
        },
        {
          "profile": "Randolf",
          "recipe": "Chicken"
        },
        {
          "profile": "Garek",
          "recipe": "Chicken"
        }
      ],
      "type": "Dinner",
      "time": {
        "hour": 12,
        "minute": 47,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Decca",
          "recipe": "Salad"
        },
        {
          "profile": "Audy",
          "recipe": "Pork"
        },
        {
          "profile": "Fidelity",
          "recipe": "Salad"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 7,
        "minute": 34,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Jordana",
          "recipe": "Chicken"
        },
        {
          "profile": "Joelly",
          "recipe": "Beef"
        },
        {
          "profile": "Chloe",
          "recipe": "Chicken"
        }
      ],
      "type": "2nd Dinner",
      "time": {
        "hour": 10,
        "minute": 41,
        "am": true
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Saturday",
    "month": "June",
    "day": 6,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Ethelyn",
          "recipe": "Chicken"
        },
        {
          "profile": "Cornelia",
          "recipe": "Pork"
        },
        {
          "profile": "Cally",
          "recipe": "Beef"
        }
      ],
      "type": "Dinner",
      "time": {
        "hour": 7,
        "minute": 31,
        "am": true
      }
    },
    {
      "profiles": [
        {
          "profile": "Adolphe",
          "recipe": "Beef"
        },
        {
          "profile": "Lenard",
          "recipe": "Chicken"
        },
        {
          "profile": "Aloisia",
          "recipe": "Beef"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 7,
        "minute": 33,
        "am": true
      }
    },
    {
      "profiles": [
        {
          "profile": "Boigie",
          "recipe": "Pork"
        },
        {
          "profile": "Dion",
          "recipe": "Pork"
        },
        {
          "profile": "Ivan",
          "recipe": "Salad"
        }
      ],
      "type": "Dinner",
      "time": {
        "hour": 10,
        "minute": 28,
        "am": false
      }
    }
  ]
}, {
  "date": {
    "dayOfWeek": "Sunday",
    "month": "June",
    "day": 7,
    "year": 2017
  },
  "today": false,
  "meals": [
    {
      "profiles": [
        {
          "profile": "Shalne",
          "recipe": "Salad"
        },
        {
          "profile": "Lyndsay",
          "recipe": "Salad"
        },
        {
          "profile": "Cynthia",
          "recipe": "Pork"
        }
      ],
      "type": "Dinner",
      "time": {
        "hour": 7,
        "minute": 50,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Celene",
          "recipe": "Salad"
        },
        {
          "profile": "Hadrian",
          "recipe": "Salad"
        },
        {
          "profile": "Stephen",
          "recipe": "Salad"
        }
      ],
      "type": "Breakfast",
      "time": {
        "hour": 3,
        "minute": 56,
        "am": false
      }
    },
    {
      "profiles": [
        {
          "profile": "Dieter",
          "recipe": "Pork"
        },
        {
          "profile": "Cami",
          "recipe": "Salad"
        },
        {
          "profile": "Leonerd",
          "recipe": "Chicken"
        }
      ],
      "type": "Lunch",
      "time": {
        "hour": 4,
        "minute": 60,
        "am": false
      }
    }
  ]
}]
  }

  handleActions(action) {
    switch(action.type) {
      case "GET_WEEK": {
        console.log("get week")
        break;
      }
      case "RECEIVED_WEEK": {
        console.log("received week")
        this.emit("update_week", {week: this.week, weekDetailed: this.weekDetailed})
        break;
      }
    }
  }
}

const calendarStores = new CalendarStores;

dispatcher.register(calendarStores.handleActions.bind(calendarStores));

export default calendarStores;
