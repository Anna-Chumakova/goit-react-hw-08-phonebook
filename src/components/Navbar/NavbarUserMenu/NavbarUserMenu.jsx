import { useDispatch, useSelector } from "react-redux";
import { logout } from "redux/Auth/auth-operations";
import { getUser } from "redux/Auth/auth-selectors";

export default function NavbarUserMenu() {
    const dispatch = useDispatch();
    const { email } = useSelector(getUser);

    const onlogout = () => {
        dispatch(logout());
    }

    return (
        <div>
            <p>{email}</p>
            <button onClick={onlogout}>logout</button>
        </div>
    )
}