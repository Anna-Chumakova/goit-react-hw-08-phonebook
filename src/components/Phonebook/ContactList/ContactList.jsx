import styles from "./ContactList.module.css"
import propTypes from "prop-types";
import { DeleteIcon } from '@chakra-ui/icons';



const ContactList = ({ items, removeContact }) => {
    
    const elements = items?.map(({name, number, id}) => {
        return <li key={id} className={styles.item}>{name}: {number}
            <DeleteIcon onClick={() => removeContact(id)} className={ styles.remove} /></li>
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
    number: propTypes.string.isRequired,
    }))
}
export default ContactList;