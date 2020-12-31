import React, { Component } from 'react'
import Header from './my_components/Header.js'
import Nav from './my_components/Nav.js'
import Footer from './my_components/Footer.js'
import Profile from './my_components/Profile.js'
import './App.scss'


const App = () => {
	return (
	  <div className='app_wrapper'>
	  	<Header/>
	  	<Nav/>
	  	<Profile/>
	  	<Footer/>
	  </div>
	);
}

export default App;