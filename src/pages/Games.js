import React, { Component } from 'react'
import "../App.css";


class Games extends Component {
   render() {
      return (
        <div className="games">
          <h2 class="who__heading">Season is over</h2>
          <p>So a more relevant questions i'd like to ask is, do you think Chelsea
              is the greatest team in the world ;)?
          </p>
                    <button className="question-btn" onClick={function () {alert("You made a good choice :D");
        }}
        >
            Yes!
        </button>

        <button className="question-btn" onClick={function () {alert("I think you are on the wrong website :(");
        }}
        >
            No!
        </button>
        </div>
      );
    }
  }
export default Games;