import React, {Component} from 'react';

class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nome: 'Contador',
            contador: 0
        };

        this.add = this.add.bind(this);
        this.decrease = this.decrease.bind(this);
    }

    add(){
        let state = this.state;
        state.contador += 1;
        this.setState(state);
    }

    decrease(){
        let state = this.state;
        if(state.contador === 0){
            alert('Opa chegou a zero!')
            return;
        }
        state.contador -= 1;
        this.setState(state);
    }

    render(){
        return(
            <div>
                <h1>{this.state.nome}</h1>
                <h3><button onClick={this.decrease}>-</button>{this.state.contador}<button onClick={this.add}>+</button></h3>
            </div>
        );
    }
}

export default App;