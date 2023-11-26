import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  inputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { onSubmit } = this.props;
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <label className={css.name}>Name</label>
          <input
          className={css.input}
            onChange={this.inputChange}
            type="text"
            name="name"
            value={name}
          />
        
        <label className={css.name}>Number</label>
          <input
          className={css.input}
            onChange={this.inputChange}
            type="tel"
            name="number"
            value={number}
          />
        
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;