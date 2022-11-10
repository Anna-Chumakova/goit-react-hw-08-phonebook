import { useDispatch } from "react-redux";
import LoginForm from "components/LoginForm/LoginForm";
import { login } from "redux/Auth/auth-operations";
import styles from "./LoginPage.module.css";


export default function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }
    return (
        <div className={styles.container}>
            <h1 className={styles.title} >Login page</h1>
            <LoginForm onSubmit={onLogin} />
        </div>
    )
}