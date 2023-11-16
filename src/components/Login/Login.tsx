import { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { AuthContext } from '../store/auth-context';
import Input from '../UI/Input/Input';

// Helper functions:
const checkEmailValid = (email: string) => {
  return email.includes('@');
};

const checkPasswordValid = (password: string) => {
  return password.trim().length > 6;
};

// Password reducer
type PasswordActionType =
  | { type: 'USER_PASSWORD_INPUT'; payload: string }
  | { type: 'PASSWORD_INPUT_BLUR' };

const initialPasswordState = {
  value: '',
  isValid: false,
};

const passwordReducer = (
  state: typeof initialPasswordState,
  action: PasswordActionType
) => {
  if (action.type === 'USER_PASSWORD_INPUT') {
    return {
      value: action.payload,
      isValid: checkPasswordValid(action.payload),
    };
  }

  if (action.type === 'PASSWORD_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: checkPasswordValid(state.value),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

// Email reducer
type EmailActionType =
  | { type: 'USER_EMAIL_INPUT'; payload: string }
  | { type: 'EMAIL_INPUT_BLUR' };

const initialEmailState = {
  value: '',
  isValid: false,
};

const emailReducer = (
  state: typeof initialEmailState,
  action: EmailActionType
) => {
  if (action.type === 'USER_EMAIL_INPUT') {
    return {
      value: action.payload,
      isValid: checkEmailValid(action.payload),
    };
  }

  if (action.type === 'EMAIL_INPUT_BLUR') {
    return {
      value: state.value,
      isValid: checkEmailValid(state.value),
    };
  }

  return {
    value: '',
    isValid: false,
  };
};

const Login = () => {
  const [formIsValid, setFormIsValid] = useState<boolean>(false);
  const { onLogin } = useContext(AuthContext);

  const [emailState, dispatchEmail] = useReducer(
    emailReducer,
    initialEmailState
  );

  const [passwordState, dispatchPassword] = useReducer(
    passwordReducer,
    initialPasswordState
  );

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    setFormIsValid(emailIsValid && passwordIsValid);
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchEmail({ type: 'USER_EMAIL_INPUT', payload: e.target.value });
  };

  const passwordChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatchPassword({ type: 'USER_PASSWORD_INPUT', payload: e.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'EMAIL_INPUT_BLUR' });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'PASSWORD_INPUT_BLUR' });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onLogin(/* emailState.value, passwordState.value */);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          type="email"
          label="E-Mail"
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          isValid={emailState.isValid}
        />

        <Input
          type="password"
          label="Password"
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          isValid={passwordState.isValid}
        />

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
