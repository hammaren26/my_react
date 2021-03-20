import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {login} from "../../Redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="email" placeholder='login' component="input"/>
            </div>
            <div>
                <Field name="password" placeholder='password' component="input" type='password'/>
            </div>
            <div>
                <Field name="rememberMe" type='checkbox' component="input"/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm);



const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return (
            <Redirect to={"/profile"}/>
        )
    }

    return (
        <div className='form'>
            <h1>
                Login
            </h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}


const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);