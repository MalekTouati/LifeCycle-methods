import React from 'react';

export default class FirstAlert extends React.Component{
    render(){
        return <div></div>
    }
    componentWillMount(){
        console.log("Hello")
    }
    componentDidMount(){
        console.log("Goodbye")
    }
    
}
