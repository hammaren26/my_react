import React from 'react'
import './Nav.scss'

export default function Header () {
	return (
		<nav className='nav'>
			<div className='item'>Profile</div>
			<div className='item'>News</div>
			<div className='item'>Settings</div>
			<div className='item'>Music</div>
		</nav>
  );
}