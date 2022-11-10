import items  from "./NavbarItems";
import { NavLink } from "react-router-dom";
import styles from "../NavbarUserMenu/NavbarUserMenu.module.css"

const NavbarMenu = () => {
    const elements = items.map(({ id, to, text }) => { return ( <li key={id} className={styles.link}>
            <NavLink className={styles.linkItem} to={to}>{text}</NavLink>

        </li>)
       
    });
    return (
        <ul>{ elements}</ul>
    )
}
export default NavbarMenu;