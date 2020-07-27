import React from 'react';
import './link.css';

class Link extends React.Component{
    render(){
        return(
            <a  href={this.props.source}> {this.props.text}</a>
        )
    }
}

export default Link;