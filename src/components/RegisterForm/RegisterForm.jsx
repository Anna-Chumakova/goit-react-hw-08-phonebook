import { useState, useMemo } from 'react';
import { nanoid } from "nanoid";
import propTypes from "prop-types";
import styles from "../LoginForm/LoginForm.module.css";

export default function RegisterForm({ onSubmit }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(() => nanoid(), []);
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
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
        onSubmit({ name, email, password });
        setName("");
        setEmail("");
        setPassword("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.container}>
                <label htmlFor={nameId}>Name: </label>
                <input className={styles.input} id={nameId} onChange={handleChange}
                    name="name"
                    value={name}
                    type="text"
                    label="User name"
                    placeholder="name"
                    required={true} />
            </div>
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

RegisterForm.propTypes = {
    onSubmit: propTypes.func.isRequired
}