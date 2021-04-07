import './styles.scss';
import logo from './feligtlogo.png';
import {Link} from 'react-router-dom';
const Header = props => {
    return (
        <div className="header">

            <div className="logo">
                <Link to="/">
                <img src={logo} alt="felightlogo" />
                </Link>
            </div>

            <div className="reg-btn">
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>

        </div>
    )
}

export default Header;