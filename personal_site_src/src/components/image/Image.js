import React from 'react';


const resources = require.context('../../resources', true);

class Image extends React.Component{
    render(){
        return(
            <img className={this.props.style} src={resources("./" + this.props.src)} />
        );
    }
}

export default Image;