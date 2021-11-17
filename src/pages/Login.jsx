import React from 'react';
import { connect } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';

import { loginUser } from '../redux/actions/user'
import Layout from '../layout/Layout';

import { ReactComponent as Google } from '../assets/icons/google.svg';
// import './Login.css'



const Login = (props) => {

    const navigate = useNavigate();
    const { loginUser, userData } = props;

    if (userData !== null) {
        // console.log(userData.multiFactor.user.displayName)
        navigate("/", { replace: true });
    }
    return (
        <Layout>
            <div className="login-page">

                <h1 className="h2">Login</h1>
                <p>Alege providerul cu care vrei să vrei să te loghezi:</p>

                <button
                    className="btn btn-outline-dark d-flex align-items-center"
                    onClick={() => loginUser()}
                >
                    <Google className="w-50 mr-3" />
                    <span className="text-nowrap">Loghează-te cu Google</span>
                </button>
            </div>
        </Layout>
    );

}


function mapStateToProps(state) {
    return {
        loading: state.user.loading,
        userData: state.user.data
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser: () => { dispatch(loginUser()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);