import { useSelector } from 'react-redux';
import { isLogin } from 'redux/Auth/auth-selectors';
import NavbarAuth from './NavbarAuth/NavbarAuth';
//import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarUserMenu from './NavbarUserMenu/NavbarUserMenu';
import styles from './Navbar.module.css';
import { Navigation } from 'components/Navigation/Navigation';


export default function Navbar() {
    const isUserLogin = useSelector(isLogin);
    return (
        <nav className={styles.navbar}>
            <div className="container">
                <div className={styles.row}>
                    <Navigation />
                    {isUserLogin ? <NavbarUserMenu /> : <NavbarAuth />}
                </div>
            </div>
        </nav>
    )
}