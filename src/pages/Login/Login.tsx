import { forwardRef, useRef, useState } from "react";
import styles from "./Login.module.scss";
import cx from "classnames";
import { performLogin } from "./helpers/login";

const LoginPage = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const [errorStates, setErrorStates] = useState({
    email: false,
    password: false,
  });

  const [loginError, setLoginError] = useState("");

  const onSubmit = async () => {
    setLoginError("");

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    setErrorStates({
      email: !email,
      password: !password,
    });

    if (!email || !password) return;

    try {
      const result = await performLogin({
        email,
        password,
      });

      if (result.status === 401)
        return setLoginError("Invalid Email or password");
      else if (!result.ok) return setLoginError("Oops. Something went wrong");
    } catch (e: any) {}
  };

  return (
    <main className={cx("container", styles.container)}>
      <div className="grid">
        <InputElement
          error={errorStates.email}
          label="Email"
          placeholder="Email id"
          errorMessage="Email cannot be empty"
          ref={emailRef}
        />
        <InputElement
          error={errorStates.password}
          label="Password"
          placeholder="Password"
          errorMessage="Password cannot be empty"
          ref={passwordRef}
        />
        <button onClick={onSubmit}>Submit</button>
        <small
          className={cx({
            [styles.showError]: loginError,
            [styles.hideError]: !loginError,
          })}
          id="invalid-helper"
        >
          {loginError}
        </small>
      </div>
    </main>
  );
};

interface InputElementProps {
  placeholder: string;
  label: string;
  errorMessage: string;
  error: boolean;
}

const InputElement = forwardRef<HTMLInputElement, InputElementProps>(
  (props, ref) => {
    const error = props.error;

    return (
      <div>
        <label>{props.label}</label>
        <input
          ref={ref}
          aria-invalid={error ? true : undefined}
          placeholder={props.placeholder}
        />
        <small
          className={cx({
            [styles.showError]: error,
            [styles.hideError]: !error,
          })}
          id="invalid-helper"
        >
          {props.errorMessage}
        </small>
      </div>
    );
  }
);

export { LoginPage };
