import React from 'react';
import './App.css';
import Characters from './Components/Characters';
import Content from './Components/Content';

class App extends React.Component{
    state={
        charList: 'Ahmad'
    }
    charCreater = (e)=>{
        this.setState({charList: e.target.value})
        console.log(this.state.charList);
    }
    updateState = (charList)=>{
        this.setState({charList});
    }
    render(){
        return (
        <div className="App">
            <input 
                type="text" 
                placeholder="Enter anything" 
                onChange={this.charCreater} 
                value = {this.state.charList}
            />
            <Content charList={this.state.charList} />
            <Characters update={this.updateState}  CharacterList={this.state.charList} />
        </div>
        );
    }
}

export default App;
