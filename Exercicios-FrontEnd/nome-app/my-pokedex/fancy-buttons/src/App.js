import logo from './logo.svg';
import './App.css';
import react from 'react';


class App extends react.Component {

  constructor () {
    super () 

      this.state = {
        numeroDeCliques: 0
      }


      this.onClick = this.onClick.bind(this)
      this.handleClick = this.handleClick.bind(this)
      this.click = this.click.bind(this)
  }

  handleClick () {
    console.log('clicou!!');
    
    this.setState ((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }))
  }

  click () {
    console.log('clicou!!');
  }

  onClick () {
    console.log(this);
    console.log('clicou!!');
  }
  
  render() {
    return (
      <div className="App">
        <button onClick={this.handleClick}>Numero de Cliques: {this.state.numeroDeCliques}</button>
        <button onClick={this.click}>Botão</button>
        <button onClick={this.onClick}>Botão</button>
      </div>
    );
  }
}

export default App;
