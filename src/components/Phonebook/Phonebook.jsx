
import FormAddContact from "./FormAddContact/FormAddContact";
import ContactList from "./ContactList/ContactList";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Phonebook.module.css";
import { fetchContacts, addContact, removeContact} from "redux/Contacts/Contacts-operation";
import { setFilter } from "redux/Filter/Filter-slice";
import { getFilter } from "redux/Filter/Filter-selectors";
import { getFilteredContacts, getState } from "redux/Contacts/Contacts-selectors";
import { useEffect } from "react";


const Phonebook = () => {
  
    const contacts = useSelector(getFilteredContacts);
    const { loading, error } = useSelector(getState);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);

    
    const onAddContact = (contact) => {
        const action = addContact(contact);
        dispatch(action);
    }
    
    const onRemoveContact = (id) => {
       const action = removeContact(id);
        dispatch(action);
    }

    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }
  
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Contacts</h2>
            <div className={styles.contactBlock}>
                <div>
                    <FormAddContact onSubmit={onAddContact} />
                    <h3>Find contacts by name</h3>
                    <input type="text" name="filter" onChange={handleChange} value={filter} className={styles.filter} placeholder="Filter" />
                    {!loading && contacts.length > 0 && <ContactList items={contacts} removeContact={onRemoveContact} />}
                    {loading && <p>...loading</p>}
                    {error && <p>oops, something went wrong</p>}
                    
                </div>
            </div>
        </div>
    )   
    }

export default Phonebook;