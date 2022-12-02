import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../CareerPage/Button/Button';
import Input from './Input';

import classes from './Form.module.css';
import { ValidateEmail, ValidatePassword } from '../SignUp/lib';
import LoadingSpinner from '../../Component/LoadingSpinner/LoadingSpinner';

const Form = (props) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailIsValid: false,
    passwordIsValid: false,
    emailIsFocus: false,
    passwordIsFocus: false,
  });

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      password: form.password,
    });
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id='email'
        label='Email'
        type='email'
        invalid={!form.emailIsValid && form.emailIsFocus ? 'invalid' : ''}
        placeholder='example@email.com'
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Enter a valid email</pre>
      )}
      <Input
        id='password'
        label='Password'
        type='text'
        invalid={!form.passwordIsValid && form.passwordIsFocus ? 'invalid' : ''}
        placeholder='Must be 7 characters'
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), a uppercase, a lowercase, and a number.
        </pre>
      )}

      <div className={classes.checkbox}>
        <div>
          <input
            type='checkbox'
            name='checkbox'
            value='value'
            id='checkbox'
            className={classes.checkbox__input}
          />
          <label htmlFor='checkbox' className={classes.label}>
            Remember me.
          </label>
        </div>
        <Link to='/forgot-password' className={classes.password}>
          Forgot password
        </Link>
      </div>

      <div style={{ margin: '3rem 0 0' }}>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p style={{ textAlign: 'center' }}>Signing in failed!. Try again</p>
        )}
      </div>

      <div className={classes.btn__box}>
        <Button id='btn__submit' type='submit' className={classes.button}>
          Sign In
        </Button>
      </div>
    </form>
  );
};
export default Form;
