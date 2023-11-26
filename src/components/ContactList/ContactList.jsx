import css from './ContactList.module.css';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <div className={css.div}>
            <div>
              <p className={css.name}>{name}: </p>
            </div>
            <div>
              <p className={css.name}>{number}</p>
            </div>
            <button
              type="button"
              onClick={() => onDelete(id)}
              className={css.button}
            >
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
