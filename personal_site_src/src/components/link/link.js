import React from 'react';
import './link.css';

class Link extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            color : true
        }
        this.colors = ["red","blue","gray", "orange"];
    }

    componentDidMount() {
        setInterval(() => this.changeColor(), 2000);  
    }

    changeColor(){
        this.setState({
            color : this.colors[Math.floor((Math.random() * 4))]
        });
    }


    
    render(){
        return(
            <a  className={this.state.color} href={this.props.source}> {this.props.text}</a>
        )
    }
}

export default Link;