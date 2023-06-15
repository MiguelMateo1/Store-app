import navImg from '../../assets/nav-img.png';
import { FaAccusoft } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

function Nav () {
    return (
     <>
        <nav>
            <img src={navImg} alt="navigation-imgage" className="nav-img"></img>
            <div className="nav-toggle"><FaBars/></div>
            <aside className="logo">
                <a><FaAccusoft /></a>
            </aside>
            <aside className="nav-menu">
                <ul>
                    <li>About</li>
                    <li>Sneakers</li>
                    <li>Accessories</li>
                    <li>Contacts</li>
                </ul>
            </aside>
            <aside className="nav-socials-links">
                <ul>
                    <li><FaInstagram/></li>
                    <li><FaTwitter/></li>
                    <li><FaFacebookSquare/></li>
                    <li><FaGooglePlusSquare/></li>
                </ul>
            </aside>
        </nav>
    </>   
    )
}

export default Nav ;