import { useDispatch } from "react-redux";
import { signup } from "redux/Auth/auth-operations";
import RegisterForm from "components/RegisterForm/RegisterForm";

export default function RegisterPage () {
    const dispatch = useDispatch();

    const onRegister = (data) => {
        dispatch(signup(data));
    }
    return (
        <div>
            <h1>Register page</h1>
            <RegisterForm onSubmit={onRegister} />
        </div>
    )
} 

 