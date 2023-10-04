import { useEffect, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

type LoginPropsType = {
  onLogin: (enteredEmail: string, enteredPassword: string) => void;
};

const Login = ({ onLogin }: LoginPropsType) => {
  const [enteredEmail, setEnteredEmail] = useState<string>('');
  const [emailIsValid, setEmailIsValid] = useState<boolean>(true);
  const [enteredPassword, setEnteredPassword] = useState<string>('');
  const [passwordIsValid, setPasswordIsValid] = useState<boolean>(true);
  const [formIsValid, setFormIsValid] = useState<boolean>(false);

  useEffect(() => {
    setFormIsValid(
      enteredEmail.includes('@') && enteredPassword.trim().length > 6
    );
  }, [enteredEmail, enteredPassword]);

  useEffect(() => {
    setFormIsValid(
      enteredPassword.trim().length > 6 && enteredEmail.includes('@')
    );
  }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredEmail(e.target.value.trim());
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredPassword(e.target.value.trim());
  };

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>

        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>

        <div className={classes.actions}>
          <Button
            type="submit"
            className={classes.btn}
            disabled={!formIsValid}
            onClick={() => {}}
          >
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
