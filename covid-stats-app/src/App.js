import {Component} from 'react';
import './App.css';
import logo from './images/0cc6a458-feae-49b1-8826-f9c35cc03e28_200x200.png';
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
    return(
      <Auxiliary>
        <header><h1><a href='/'><img src={logo} alt='logo'/></a></h1></header>
        <main>
          {this.state.isHomeScreen?<button className='main-button' onClick={this.enterHandler}>This is COVID-19 worldwide</button>:<Countries/>}
        </main>
        <footer>Todor Atanasov 2020</footer>
      </Auxiliary>
    )
  }
}

export default App;
