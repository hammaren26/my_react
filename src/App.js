import React, {Component} from 'react'
import Header from './my_components/Header/Header.js'
import Nav from './my_components/Nav/Nav.js'
import Footer from './my_components/Footer/Footer.js'
import Profile from './my_components/Profile/Profile.js'
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