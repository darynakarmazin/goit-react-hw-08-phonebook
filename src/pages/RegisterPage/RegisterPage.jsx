import { Header } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Form, Button } from 'components/contactForm/ContactForm.styled';
import { useState } from 'react';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    form.reset();
  };

  return (
    <>
      <Header>Registration</Header>
      <Form onSubmit={handleSubmit}>
        <label>
          Username
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
}
