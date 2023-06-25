// img
import navImg from '../../assets/nav-img.png';
// icons
import { FaAccusoft } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
// react
import { useContext } from 'react';
import DataContext from '../../context/DataContext';
import { Link } from 'react-router-dom';
import { accessories, shoes } from '../../products';

function Nav () {
    const { setProductList, setCurrentList, setSelectedProduct } = useContext(DataContext);

    const handleAcceClick = () => {
        setProductList(accessories)
        setCurrentList(accessories)
        setSelectedProduct(accessories[0])
    }
    const handleShoesClick = () => {
        setProductList(shoes)
        setCurrentList(shoes)
        setSelectedProduct(shoes[0])
    }

    return (
     <>
        <nav>
            <img src={navImg} alt="navigation-imgage" className="nav-img"></img>
            <div className="nav-toggle"><FaBars/></div>
            <aside className="logo">
                <Link to='/'><FaAccusoft /></Link>
            </aside>
            <aside className="nav-menu">
                <ul>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link onClick={handleShoesClick} to='/'>Sneakers</Link></li>
                    <li><Link onClick={handleAcceClick} to='/'>Accessories</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
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