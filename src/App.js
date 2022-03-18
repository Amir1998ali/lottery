import logo from "./logo.svg";
import "./App.css";
import React from "react";
import web3 from "./web3";
//important
import lottery from './lottery';
// first thing that runs

class App extends React.Component {
  //called when it is showed on screen
  //constructor
  state = {
    manager: '', 
    players: [], 
    balance: '',
    value: '',
    message:''
  };
  // called everytime the APP component is shown on screen
  async componentDidMount() {
    // you dont need the from in call because the provider attached to metamask is
    // actually taken care of
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    // learned this in our test
    // balande is actually an object 
    const balance = await web3.eth.getBalance(lottery.options.address);

    // set our state
    this.setState({ manager, players, balance});
  }
  // event handler
  // the value of ''this will be our component
  // event object 
  onSubmit = async (event) => {
    //form doesnt submit itself 
    event.preventDefault();

    // with the version of web3 we use we shuld have the from
    // not like call() we had earlier
    //get list of our accounts
    const accounts = await web3.eth.getAccounts();
    this.setState({ message: 'Waiting on transaction success ... '});
    // the first one will be the one sending the transaction
    //convert to wei
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value,'ether')
    });
    this.setState( {message: 'You have been entered!'} );
  };

  onClick = async () =>{
    const accounts = await web3.eth.getAccounts();
    this.setState({message:'Waiting on transaction success ... '});
    await lottery.methods.pickWinner().send({
      from: accounts[0]
    });
    this.setState({ message: 'A winner has been picked!' });
  };
  render() {
    console.log("here");
    console.log(web3.version);
    // my account address
    web3.eth.getAccounts()
      .then(console.log);
    return (
      <div>
        <h2> Lottery Contract </h2>
        <p>
          This contract is managed by {this.state.manager}.
          There are currently {this.state.players.length} people entered, 
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')} ether!
        </p>
        <hr />
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div>
            <label>Amount of ether to enter </label>
            <input value = {this.state.value} onChange={ event => this.setState({ value: event.target.value})}/>
          </div>
          <button>Enter</button>
        </form>
        <hr />
        <h4>Ready to pick a winner?</h4>
        <button onClick={this.onClick}>Pick a winer!</button>
        <hr />
        <h1>{this.state.message}</h1>

      </div>
    );
  }
}
export default App;

// All right, let's very quickly run through the order of operations that's going to occur whenever our
// application runs inside the browser, our application is going to load up, the app component will be
// rendered to the screen.
// That will cause the render method to immediately be called.
// We'll take this job and put it on the screen.
// During this initial render, this dot state dot manager will have a value of empty string because that's
// what we defaulted it to up here inside the constructor method.
// After that, the component did mount.
// Method will run.
// We will make a call to the network to retrieve the current state of the lottery contract.
// In particular, the managers address will then set that state on our component that causes our component
// to automatically render that will cause the render method to fire again.
// And now we'll render the component with a defined this state dot manager property.
// So let's flip back over to the browser and see how our app is doing now. 