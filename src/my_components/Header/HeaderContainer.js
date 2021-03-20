import React, {Component} from 'react';
import './Header.scss';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reducer";

class HeaderContainer extends Component {
	render () {
		return (
			<Header {...this.props}/>
		);
	}
}


const mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		login: state.auth.login,
		email: state.auth.email,
		userId: state.auth.userId
	}
}

export default connect(mapStateToProps, {logout})(HeaderContainer);