import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsActions';
import ContactItem from './ContactItem';
import s from './ContactList.module.scss';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    onDeleteContacts: PropTypes.func,
  };

  state = {
    isShow: false,
  };

  componentDidMount() {
    this.handleShow();
  }

  componentDidUpdate() {
    this.handleShow();
  }

  handleShow = () => {
    const { contacts } = this.props;
    const { isShow } = this.state;

    if (contacts[0] && !isShow) {
      this.setState({ isShow: true });
    }
  };

  render() {
    const { contacts, onDeleteContacts } = this.props;
    const { isShow } = this.state;

    return (
      <>
        {isShow && (
          <TransitionGroup component="ul" className={s.container}>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContacts={onDeleteContacts}
              />
            ))}
          </TransitionGroup>
        )}
      </>
    );
  }
}

const filteredContacts = (items, filter) =>
  items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase()),
  );

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: filteredContacts(items, filter),
});

const mapDispatchToProps = {
  onDeleteContacts: actions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
