import 'styles/pages/login.css';

import LoginForm from '@components/login/loginForm';

export default function Login() {
  return (
    <div className="h-[calc(100vh-56px)] grid place-items-center">
      <div className="login-form">
        <div>
          Login to <span>ContactList</span>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}
