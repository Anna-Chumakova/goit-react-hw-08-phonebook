import { NavLink } from "react-router-dom";
import styles from "./NavbarAuth.module.css";

export default function NavbarAuth() {
    const getClassName = ({isActive}) => {
    return isActive ? `${styles.link} ${styles.active}` : styles.link;
}
    return (
        <div className={styles.conteiner}>
            <NavLink className={ getClassName} to="/register">Register</NavLink>
            <NavLink className={ getClassName} to="/login">Login</NavLink>
        </div>
    )
}