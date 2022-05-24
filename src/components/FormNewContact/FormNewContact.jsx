import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getContactsSelector } from 'redux/contacts/contactsSelectors';

const FormNewContact = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(getContactsSelector);

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const hasName = name => {
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('This contact name already exists!');
      return true;
    }
    return false;
  };

  const handleSubmit = e => {
    const name = e.target.name.value;
    e.preventDefault();
    //check if name alrady exists
    if (hasName(name)) return;
    // dispath(addContact({ name, number }));
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };
  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        Name
        <input
          autoComplete="off"
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={handleChange}
        />
      </label>
      <label>
        Phone
        <input
          autoComplete="off"
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
      {/* <Loading /> */}
      {/* {isLoading && <Loading />} */}
      {/* {isLoading && showLoader && <Loading />} */}
    </form>
  );
};

export default FormNewContact;
