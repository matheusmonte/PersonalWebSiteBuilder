import React from 'react';
import Image from "../../components/image/Image";
import './Profile.css';


class Profile extends React.Component{
    render(){
        return(
            <div className="profile_container">
                <div className="profile_image_container">
                    <Image style="profile_image" src={this.props.content.image} />
                </div>
                <div className="profile_text_container">
                    <p className="profile_text_introduce">{this.props.content.text.introduce}</p>
                    <p className="profile_text_bio">{this.props.content.text.bio}</p>
                </div>
            </div>
        )
    }
}

export default Profile;