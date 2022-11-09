import styles from "./ContactList.module.css"
import propTypes from "prop-types";

const ContactList = ({ items, removeContact }) => {
    
    const elements = items?.map(({name, phone, id}) => {
        return <li key={id} className={styles.item}>{name}: {phone} <span onClick={() => removeContact(id)} className={styles.remove}>delete</span></li>
    })
    return (
        <>
            <h4 className={styles.title}>Contacts</h4>
            <ol>{elements}</ol>
        </>
    )
}

ContactList.defaultProps = {
    items: []
}
ContactList.propTypes = {
    
    items: propTypes.arrayOf(propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    phone: propTypes.string.isRequired,
    }))
}
export default ContactList;