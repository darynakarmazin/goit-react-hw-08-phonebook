import { Header } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Input, Form, Button } from 'components/contactForm/ContactForm.styled';

export default function RegisterPage() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
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
          <Input type="text" name="name" />
        </label>
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Register</Button>
      </Form>
    </>
  );
}
