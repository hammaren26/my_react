import React from 'react';
import './App.scss';
import Nav from './my_components/Nav/Nav.js';
import Footer from './my_components/Footer/Footer.js';
import News from "./my_components/News/News";
import Music from "./my_components/Music/Music";
import Settings from './my_components/Settings/Settings'
import  DialogsContainer from "./my_components/Dialogs/DialogsContainer";
import UsersContainer from "./my_components/Users/UsersContainer";
import ProfileContainer from "./my_components/Profile/ProfileConatainer";
import {BrowserRouter, Route} from "react-router-dom";
import HeaderContainer from "./my_components/Header/HeaderContainer";
import LoginPage from "./my_components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./my_components/common/preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp(); //thunk
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <BrowserRouter>
                <div className='app_wrapper'>
                    <HeaderContainer/>
                    <Nav/>
                    <div className='app_wrapper_content'>
                        <Route
                            path='/profile/:userId?'
                            render={() => <ProfileContainer/>}
                        />
                        <Route exact path='/dialogs' render={() => <DialogsContainer/>}/>
                        <Route exact path='/users' render={() => <UsersContainer/>}/>

                        <Route exact path='/news' component={News}/>
                        <Route exact path='/music' component={Music}/>
                        <Route exact path='/settings' component={Settings}/>
                        <Route exact path='/login' compo nent={LoginPage}/>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})


export default connect(mapStateToProps, {initializeApp})(App);