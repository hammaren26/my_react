import React from 'react'
import './Nav.scss'
import {NavLink} from "react-router-dom";

export default function Header () {
	return (
		<nav className='nav'>
			<div className='item'>
				<NavLink to="/profile">Profile</NavLink>
			</div>
			<div className='item'>
				<NavLink to="/dialogs">Dialogs</NavLink>
			</div>
			<div className='item'>
				<NavLink to="/news">News</NavLink>
			</div>
			<div className='item'>
				<NavLink to="/settings">Settings</NavLink>
			</div>
			<div className='item'>
				<NavLink to="/music">Music</NavLink>
			</div>
		</nav>
  );
}