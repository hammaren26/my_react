import React from 'react'
import './Nav.scss'
import {NavLink} from "react-router-dom";

export default function Header () {
	return (
		<nav className='nav'>
			<div className='nav_item'>
				<NavLink to="/profile" activeClassName='activeLink'>Profile</NavLink>
			</div>
			<div className='nav_item'>
				<NavLink to="/dialogs" activeClassName='activeLink'>Dialogs</NavLink>
			</div>
			<div className='nav_item'>
				<NavLink to="/users" activeClassName='activeLink'>Users</NavLink>
			</div>
			<div className='nav_item'>
				<NavLink to="/news" activeClassName='activeLink'>News</NavLink>
			</div>
			<div className='nav_item'>
				<NavLink to="/settings" activeClassName='activeLink'>Settings</NavLink>
			</div>
			<div className='nav_item'>
				<NavLink to="/music" activeClassName='activeLink'>Music</NavLink>
			</div>
		</nav>
  );
}