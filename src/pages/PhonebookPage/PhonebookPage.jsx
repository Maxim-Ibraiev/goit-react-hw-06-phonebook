import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsActions';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import { TIMEOUT_LONGER } from '../../const';

function PhonebookPage({ contacts }) {
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

const mapStateToProps = state => ({
  contacts: state.contacts.items,
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onSetContacts: arr => dispatch(actions.items(arr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
