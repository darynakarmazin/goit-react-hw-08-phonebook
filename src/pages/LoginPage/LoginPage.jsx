import { Header } from 'components/App.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Input, Form, Button } from 'components/contactForm/ContactForm.styled';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Header>Login</Header>

      <Form onSubmit={handleSubmit}>
        <label>
          Email
          <Input type="email" name="email" />
        </label>
        <label>
          Password
          <Input type="password" name="password" />
        </label>
        <Button type="submit">Log In</Button>
      </Form>
    </>
  );
}
