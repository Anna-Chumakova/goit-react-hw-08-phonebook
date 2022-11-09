import { useState } from "react";
import { nanoid } from "nanoid";
import propTypes from "prop-types"
import styles from "./FormAddContact.module.css";


const FormAddContact = ({ onSubmit }) => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const nameId = nanoid();
    const phoneId = nanoid();

    const handleChange = e => {
        const { name, value } = e.target;
        switch (name) {
            case 'name':
                setName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            default:
                return;
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ name, phone });
        setName('');
        setPhone('');
    }
    return (
            <form onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label htmlFor={nameId}>Name: </label>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        id={nameId}
                        value={name}
                        onChange={handleChange}
                        className="field"
                        placeholder="Name"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor={phoneId}>Phone:  </label>
                    <input
                        id={phoneId}
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        className="field"
                        placeholder="Phone"
                        type="tel"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required />
                </div>
                <button className={styles.btn}>Add contact</button>
        </form>
        )
}
FormAddContact.propTypes = {
    onSubmit: propTypes.func.isRequired
}

export default FormAddContact;