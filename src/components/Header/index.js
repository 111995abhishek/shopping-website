import './styles.scss';
import logo from './feligtlogo.png';
import { Link } from 'react-router-dom';
const Header = props => {
    return (
        <div className="header">

            <div class="inner-wrapper">
                <Link to="/">
                    <img src={logo} alt="felightlogo" />
                </Link>


                <nav>
                    <ul className="nav-area">

                        <li>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>
                        </li>

                        <li>
                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>


    )
}

export default Header;