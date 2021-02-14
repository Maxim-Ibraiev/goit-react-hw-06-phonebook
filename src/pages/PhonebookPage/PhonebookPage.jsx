import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsActions';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import { TIMEOUT_LONGER } from '../../const';

class PhonebookPage extends Component {
  componentDidMount() {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));

    if (localContacts) {
      this.props.onSetContacts(localContacts);
    }
  }

  componentDidUpdate() {
    const { contacts } = this.props;

    localStorage.setItem('contacts', JSON.stringify(contacts));
  }

  render() {
    const { contacts } = this.props;

    return (
      <div className={s.container}>
        <Logo appear timeout={TIMEOUT_LONGER} />

        <ContactForm />

        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter isShow={contacts.length > 1} />}

        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onSetContacts: arr => dispatch(actions.addItems(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
