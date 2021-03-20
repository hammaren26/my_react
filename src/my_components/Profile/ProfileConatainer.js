import React, {Component} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatus, updateStatus} from "../../Redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


class ProfileContainer extends Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 15043;

            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props}/>
        );
    }
}

// let AuthRedirectComponent = (props) => {
//     if (!this.props.isAuth) {
//         return (
//             <Redirect to={"/login"}/>
//         )
//     }
//     return <ProfileContainer {...props}/>
// }

let mapStateToProps = (state) => ({
    profile: state.profilePage.userProfile,
    status: state.profilePage.userStatus
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter
    // withAuthRedirect
)(ProfileContainer);

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);
// export default connect(mapStateToProps, {getProfile})(WithUrlDataContainerComponent);