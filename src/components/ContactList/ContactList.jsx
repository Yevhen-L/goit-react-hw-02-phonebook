import React from 'react';

export const ContactList = ({ contacts }) => (
  <ul>
    {contacts.map(contact => (
      <li key={contact.id}>{contact.name}</li>
    ))}
  </ul>
);
