import { NavLink } from "react-router-dom";
import { isLogin } from "redux/Auth/auth-selectors";
import { useSelector } from "react-redux";
import styles from "./Navigation.module.css"

export const Navigation = () => {
    const isUserLogin = useSelector(isLogin);

    return (
        <nav>
            <NavLink className={styles.linkItem} to="/">Home</NavLink>
            {isUserLogin && (<NavLink className={styles.linkItem} to="/contacts">Contacts</NavLink>)}
        </nav>
    )
}