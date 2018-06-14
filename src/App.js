import React, { Component } from 'react';
import './App.css';
import cards from './files/cards.json'
import Wrapper from './components/Wrapper'
import Card from './components/Card'
import Nav from './components/Nav'
import Header from './components/Header'
import Footer from './components/Footer'
import Container from './components/Container'

class App extends Component {

state = {
  guesses: [],
  gameArray:[],
  score: 0,
  highScore: 0,
  navMessage: "Click a Beer to Begin"

}

//Generate a random number
getRand = (upper) => {
  const  min = 0;
  const max = Math.floor(upper);
  return Math.floor(Math.random() * (max - min)) + min;
}


createGameArray = array =>{
  console.log`Array ${array}`
  console.log(this.getRand(12));
}

createGameArray = array =>{
  const newArray = [];
  console.log(`newArray = ${newArray}`)
  while(newArray.length < array.length){
    let rand = this.getRand(array.length)
    console.log(`Rand${rand}`)
    if(!newArray.includes(array[rand])){
      newArray.push(array[rand]);
    }
  }
  console.log(newArray);
  this.setState({gameArray:newArray});
}

setScore = () => {
 let newScore = this.state.score;
 newScore +=1;
  this.setState({score:newScore});
}


 //if current score > high score update high score state
setHighScore = () =>{
  if(this.state.score > this.state.highScore){
   let highScore = this.state.score
    this.setState({highScore});
  }
}

// the current score is reset to zero 
resetGame = () => {
    this.setState({score: 0, guesses:[]});
}

//When user makes a guess the guess checked against the array of guesses (ID)
processGuess = id => {
  console.log(this.state.guesses);
  //if the guess is not in the array of guesses 
  if(!this.state.guesses.includes(id)){
    //it is added
    const newGuesses = this.state.guesses
    newGuesses.push(id);
      this.setState({guesses:newGuesses, navMessage:"Correct"})
    //and the score is incrimented
    this.setScore()
    //*high scores is checked
    this.setHighScore()
    console.log(this.state.guesses);
  }

  else {
    // if the guess is present in the array reset the game
    this.setState({navMessage:"Incorrect"})
    this.resetGame();
    this.createGameArray(cards);
  }


}

componentDidMount(){
  this.createGameArray(cards);
}

  render() {
    return (
      <Wrapper>
        <Nav 
        score= {this.state.score}
        highScore = {this.state.highScore}
        message = {this.state.navMessage}

        />
        <Container>
        <Header>
        Micro Brew Memeory
       </Header>
       {this.state.gameArray.map((card) =>(
        <Card 
          id = {card.id}
          key = {card.id}
          name = {card.name}
          image = {card.image}
          processGuess = {this.processGuess}
        />
      ))
      }
      <Footer />
      </Container>
      </Wrapper>
    );
  }
}

export default App;
