import s from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../store/contacts/contacts-operations';

export default function ContactForm() {
  const dispatch = useDispatch();

  const onAddContact = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const contact = {
      name: form.elements.name.value,
      number: form.elements.number.value,
    };
    dispatch(addContact(contact));
    form.reset();
  };

  return (
    <form onSubmit={onAddContact} className={s.form}>
      <label className={s.input}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={s.input}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={s.button}>
        Add contact
      </button>
    </form>
    );
};