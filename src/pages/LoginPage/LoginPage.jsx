import { Header, Wrapper } from 'components/App.styled';

export default function LoginPage() {
  return (
    <Wrapper>
      <Header>Login</Header>
      <form autoComplete="off">
        <label>
          Email
          <input type="email" name="email" />
        </label>
        <label>
          Password
          <input type="password" name="password" />
        </label>
        <button type="submit">Log In</button>
      </form>
    </Wrapper>
  );
}
