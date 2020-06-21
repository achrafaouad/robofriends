import React,{Component} from 'react';


class ErrorBoundry extends Component{
	constructor(props){
        super(props);
        this.State={
      hasError : false
        }
	}
     componentDidCatch(error, info){
 this.setState({hasError: true})
    }
	render(){
		if(this.State.hasError){
			return <h1> oooops. that is not good </h1>
		}
		return this.props.children;
	}
}
export default ErrorBoundry;