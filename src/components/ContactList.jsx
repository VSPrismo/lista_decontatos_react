import React from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 20px;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #f2f2f2;
  margin-bottom: 10px;
`;

const ContactList = ({ contacts, onRemoveContact, onEditContact }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <div>
            <strong>{contact.name}</strong> - {contact.email} - {contact.phone}
          </div>
          <div>
            <button onClick={() => onRemoveContact(contact.id)}>Remover</button>
            <button onClick={() => onEditContact(contact.id)}>Editar</button>
          </div>
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
