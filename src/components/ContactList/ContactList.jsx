import { ContactListItem } from './ContactListItem';

const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactListItem
          name={contact.name}
          number={contact.number}
          key={contact.id}
        />
      ))}
    </ul>
  );
};

export { ContactList };
