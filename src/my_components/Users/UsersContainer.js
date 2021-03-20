import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    follow,
    getUsers,
    setCurrentPage,
    unfollow
} from '../../Redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/Preloader';
import {withAuthRedirect} from "../../HOC/WithAuthRedirect";
import {compose} from "redux";
import {
    getPageUsers,
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount
} from "../../Redux/users-selectors";

class UsersContainer extends Component {


    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return (
            <>
                {
                    this.props.isFetching
                        ? <Preloader/>
                        : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isFetching: state.usersPage.isFetching,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };

// let mapDispatchToProps = (dispatch) => {
//     return {
//         my_follow: (userID) => {
//             dispatch(followAC(userID));
//         },
//         unfollow: (userID) => {
//             dispatch(unfollowAC(userID));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setUsersTotalCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }
//     }
// }


let mapStateToProps = (state) => {
    return {
        users: getPageUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingProgress(state)
    }
};


export default compose(
    connect(mapStateToProps, {follow, unfollow, setCurrentPage, getUsers}),
    withAuthRedirect
)(UsersContainer);