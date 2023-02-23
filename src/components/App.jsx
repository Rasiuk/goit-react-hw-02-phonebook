import { Component } from 'react';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  onInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  addContactToList = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div>
        <form>
          <label>
            <input
              onChange={this.onInputChange}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <button type="submit" onSubmit={this.addContactToList}>
            Add contact
          </button>
        </form>
        <ul></ul>
      </div>
    );
  }
}
