import React, { useState } from "react";
import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 5px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
`;

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      id: Date.now(),
      name,
      email,
      phone,
    };

    onAddContact(contact);

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Nome:
        <Input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Label>
      <Label>
        Email:
        <Input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Telefone:
        <Input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </Label>
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default ContactForm;
