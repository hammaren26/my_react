import React, {Component} from 'react';
import './Header.scss';
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {myAPI} from "../../api/api";

class HeaderContainer extends Component {

	componentDidMount() {
		// let base_url = `https://social-network.samuraijs.com/api/1.0/auth/me`;
		// axios.get(base_url, {
		// 	withCredentials: true
		// }).then(response => {
		// 	if (response.data.resultCode === 0) {
		// 		let {login, id, email} = response.data.data;
		// 		this.props.setAuthUserData(id, email, login);
		// 	}
		// })

		myAPI.getAuthMe().then(response => {
			if (response.resultCode === 0) {
				let {login, id, email} = response.data;
				this.props.setAuthUserData(id, email, login);
			}
		})
	}

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

export default connect(mapStateToProps, {
	setAuthUserData
})(HeaderContainer);