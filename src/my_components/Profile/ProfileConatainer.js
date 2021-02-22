import React, {Component} from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {myAPI} from "../../api/api";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        // let base_url = `https://social-network.samuraijs.com/api/1.0/profile/` + userId;
        // axios.get(base_url).then(response => {
        //     this.props.setUserProfile(response.data);
        // })
        myAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        })
    }


    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);