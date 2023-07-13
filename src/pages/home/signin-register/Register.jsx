import { useRef } from "react";
import styles from "./Register.module.css";
// form dang ky nhan email
function Register() {
  const emailInput = useRef();
  function submitHandler() {
    let emailInputValue = emailInput.current.value;
    if (emailInputValue !== "") {
      // luu dl email vao local storage
      localStorage.setItem("isLogin", "1");
      localStorage.setItem("email", emailInputValue);
    } else {
      alert("Please enter your email!!!");
    }
  }
  return (
    <div className={styles.container}>
      <h1>Save time, save money</h1>
      <p>sign up and we send this best deal to you</p>
      <div class={styles.emailForm}>
        <input ref={emailInput} type="email" placeholder="Your Email"></input>
        <button type="submit" onClick={submitHandler}>
          Subcribe
        </button>
      </div>
    </div>
  );
}

export default Register;
