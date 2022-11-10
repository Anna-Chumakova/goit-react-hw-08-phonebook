import { useState, useMemo } from 'react';
import { nanoid } from "nanoid";
import propTypes from "prop-types";
import styles from "./LoginForm.module.css";

export default function LoginForm({ onSubmit }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'email':
                setEmail(value);
                break;
            case 'password':
                setPassword(value);
                break;
            default:
                return;
        }       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ email, password });
        setEmail("");
        setPassword("");
    }
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label htmlFor={emailId}>Email: </label>
                <input className={styles.input} id={emailId} onChange={handleChange}
                    label="User email"
                    name="email"
                    value={email}
                    type="email"
                    placeholder="email"
                    required={true} />
            </div>
            <div>
                <label htmlFor={passwordId}>Password: </label>
                <input className={styles.input} id={passwordId} onChange={handleChange}
                    label="User password"
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password (min 6 symbols)"
                    required={true} />
            </div>
            <button onClick={handleSubmit} className={styles.btn} >Login</button>
        </form>
    )
}

LoginForm.propTypes = {
    onSubmit: propTypes.func.isRequired
}