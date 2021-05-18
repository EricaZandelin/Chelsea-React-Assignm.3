import React, { Component } from 'react'
import "../App.css";


class Home extends Component {
    render() {
      return (
        <div style={{
            backgroundImage: "url(images/winners.jfif)",
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',

        }}>
        <div className="home">
          <h2 class="main__heading">Chelsea FC women - This years superleague winners</h2>
          <p class="main-paragraph">
            As Chelsea were clinching the league with a dominant win at Kingsmeadow, Barcelona’s players were crouching around a phone to watch Levante drop two points and confirm them as La Liga champions.
            “I understand how amazing Barcelona are, but so are we,” said Hayes. “It is a collaborative effort at Chelsea to get us where we are. We have cultivated something. We have a culture here to be the best – there is no complacency at the club.”
            Having won the title on the basis of points-per-game last year as the Covid-19 pandemic curtailed the season, Hayes was keen to emphasise how important it was to prove they could win the league without an asterisk attached. It shows they are “consistent as champions” she said.
            “In some people’s eyes we didn’t really win it, we were given it on a points-per-game scenario,” she said. “To say, actually, we are the champions, that’s a validation. 
            “I’m happy about that, because you don’t really want that hanging over you – the players really wanted to demonstrate that.” The 44-year-old pointed to the team’s single defeat, a 2-1 loss to Brighton, as a critical moment in the campaign and one that fuelled their title charge. 
            “The whole season, we’ve lost one game,” she said. “I’m glad we lost that game, we’re never too good to lose and I think it just keeps you on the edge of performance.”
            But before she devotes her time to preparing for the Barcelona challenge, Hayes said she was keen to get home to see her son Harry.
            “I woke up this morning feeling so bad at how little I’d seen my little boy, because of what I had to do here, and the last words he said to me when I walked out the door were: ‘Mummy, bring a medal home for me today, so that’s what I’m doing,” she said. (Guardian, 2021)
          </p>
        </div>
        </div>
      );
    }
  }
export default Home;