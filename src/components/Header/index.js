import './styles.scss';
import logo from './feligtlogo.png';

const Header = props => {
    return (
        <div className="header">

            <div className="logo">
                <img src={logo} alt="felightlogo" />
            </div>
            
            <div className="reg-btn">
                <button>Register</button>
            </div>

        </div>
    )
}

export default Header;