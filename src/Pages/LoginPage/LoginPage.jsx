import { useDispatch } from "react-redux";
import LoginForm from "components/LoginForm/LoginForm";
import { login } from "redux/Auth/auth-operations";


export default function LoginPage() {
    const dispatch = useDispatch();

    const onLogin = (data) => {
        dispatch(login(data));
    }
    return (
        <div>
            <h1>Login page</h1>
            <LoginForm onSubmit={onLogin} />
        </div>
    )
}