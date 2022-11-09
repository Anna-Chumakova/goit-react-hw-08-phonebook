import NavbarItems  from "./NavbarItems";
import { NavLink } from "react-router-dom";


const NavbarMenu = () => {
    const elements = NavbarItems.map(({ id, to, text }) => {
        <li key={id}>
            <NavLink to={to}>{text}</NavLink>

        </li>
    });
    return (
        <ul>{ elements}</ul>
    )
}
export default NavbarMenu;