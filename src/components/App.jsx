import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {

    const contact = {
    id: nanoid(),
    name,
    number,
    }

      if (this.state.contacts.find(prevState => prevState.name === contact.name)) {
      alert(
      `${contact.name} is already in contacts`
      )
      return;
    }
    
    return this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts]
    }))
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  filterContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const addContact = this.addContact;
    const changeFilter = this.changeFilter;
    const filterContacts = this.filterContacts();
    const deleteContact = this.deleteContact;

    return (
      <div>
        <h1>
          Phonebook
        </h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} changeFilter={changeFilter} />
          <ContactList
            contacts={filterContacts}
            onDelete={deleteContact}
          />
      </div>
    );
  }

  componentDidMount() {
    const saveContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(saveContacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
}
