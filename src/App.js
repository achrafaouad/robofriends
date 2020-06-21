import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css' ;
import Scroll from './Scroll';
import ErrorBoundry from'./ErrorBoundry';
class App extends Component {
	constructor(){
		super()
		this.State = {
			robots: robots,
            Searchfeild: ''
		}
		
	}

   onSearchChange = (event) => {
     this.setState({ Searchfeild:event.target.value },function () {
    console.log(this.state.Searchfeild);})
     console.log("onSearchChange");

       }


      componentDidMount(){
	fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots}));
      }

	render(){ 
		const {robots , Searchfeild} = this.State;
		const filtredrobots = robots.filter(robot =>{
   		return robot.name.toLowerCase().includes(Searchfeild.toLowerCase()) ;
   	})
		if(robots.length ===0)return <h1> loading </h1>
			else{
	return (
		<div className='tc'>
		<h1 className='f1'>robotfriends </h1> 
		<SearchBox SearchChange={ this.onSearchChange }/>
		<Scroll>
		<ErrorBoundry>
		<Cardlist robots={filtredrobots}/>
		</ErrorBoundry>
		</Scroll>
		</div>
		);
}
  }
}
export default App; 