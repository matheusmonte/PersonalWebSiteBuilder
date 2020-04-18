import React from "react";
import Link from "../../components/link/link";
import './SocialMedia.css';

class SocialMedia extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="socialmedia_container">
                {this.props.content.forEach(element => {
                    return(
                        <Link source={element.link} text={element.title} />
                    )    
                })
                }
            </div>
        )
    }
}

export default SocialMedia;