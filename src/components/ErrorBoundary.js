import React from 'react';

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            hasError :false
        }
    }
    render(){
    if(this.state.hasError){
        return <h1>Ooops ! Sorry, We ran into an unexpected error</h1>
    } else{
        return this.props.children
    }
    }
}


export default ErrorBoundary;