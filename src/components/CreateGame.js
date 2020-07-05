import React from 'react';
import AllModal from './Modal';

export default class CreateGame extends React.Component {
  state = {
    selectedOption: undefined
  }

  handleSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined}))
}
teamsGame = () => {
  this.setState(() => ({
    selectedOption: "Teams"
}))
}
multiGame = () => {
  this.setState(() => ({
    selectedOption: "Multiplayer"
}))
}
compGame = () => {
  this.setState(() => ({
    selectedOption: "Computer"
}))
}
  render() {
    return (
      <div className="content-container">
        <div className="create-wrapper">
        <div className="create-header">
        <p>Game Type</p>
        <p>Rules</p>
        </div>
      <div className="create-body">
        <div className="create-item">
        <button onClick={this.teamsGame}>Teams</button>
        <a href="/rules_teams">Teams</a>
        </div>
        <div className="create-item">
        <button  onClick={this.multiGame}>Multiplayer</button>
        <a  href="/rules_multiplayer">Multiplayer</a>
        </div>
        <div className="create-item">
        <button onClick={this.compGame}>Computer</button>
        <a href="/rules_computer">Computer</a>
        </div>
      </div>
      </div>
      <AllModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>
      <AllModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>   
      <AllModal selectedOption={this.state.selectedOption}
            handleSelectedOption={this.handleSelectedOption}/>        
    </div>
    )
  }
 
}

// keep track of state for the rules part also because when they say start game you'll have to provide options to pick difficulty