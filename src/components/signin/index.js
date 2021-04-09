import Button from '../forms/Buttons';
import './style.scss';
import {signInWithGoogle} from './../../firebase/utlis';
import { Component } from 'react';

class SignIn extends Component{

    handleSubmit = async e =>{
        e.preventDefault();
    }

    render(){
    return(
        <div className="signin">
            <div className="wrap">
                <h2>SignIn</h2>
                <div className="form-wrap">
                    <form onSubmit={this.handleSubmit}>
                        <div className="socialsignin">
                            <div className="row">
                                <Button onClick={signInWithGoogle}>
                                    Login with Google
                                </Button>
                            </div>

                            <div className="row">
                                <Button>
                                    Login with Facebook
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </div>
    )
    }
}

export default SignIn;