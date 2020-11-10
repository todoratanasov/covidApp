import {Component} from 'react';
import './App.css';

import Auxiliary from './hoc/Auxiliary';
import Countries from './containers/Countries/Countries';

class App extends Component{
  state = {
    isHomeScreen:true
  }

  enterHandler=()=>{    
    const currState = {...this.state};
    currState.isHomeScreen = !this.state.isHomeScreen;
    this.setState(currState)
  }

  render(){
    let homeScreen="";
    if(this.state.isHomeScreen){
      homeScreen = <button onClick={this.enterHandler}>Covid worldwide!</button>;
    }else{
      homeScreen=<Countries/>
    }

    return(
      <Auxiliary>
        <header><h1>This is covid now!</h1></header>
        <main>
          {homeScreen}
        </main>
        <footer>This is the footer</footer>
      </Auxiliary>
    )
  }
}

export default App;
