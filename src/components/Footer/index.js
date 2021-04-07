import './styles.scss';
import fblogo from './Facebook-logo.png';
import inlogo from './instagram-logo.jpg';
import twlogo from './twitter-logo.png';
const Footer = props => {
    return (
        <div className="footer">
            <div className="about">
                <b>About us :</b><br/>
                The founders of Facebook initially limited membership to Harvard students.<br />
             Membership was expanded to Columbia, Stanford, and Yale before being expanded to<br/> the rest of the Ivy League, MIT, and higher education institutions in the Boston area
            </div>
            <div class="copyright">
                copyright © 2021 by Abhishek Singh
            </div>
        </div>
    )
}
export default Footer;