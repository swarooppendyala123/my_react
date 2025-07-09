import Input from "./Input.jsx";
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation.js"
import useInput from "../hooks/useInput.jsx";

export default function Login() {
  const {
    value : emailValue,
    handleInputBlur : handleEmailBlur,
    handleInputChange : handleEmailChange,
    hasError : emailHasError
  } = useInput('', (value) => isEmail(value) && isNotEmpty(value));

  const {
    value : passwordValue,
    handleInputBlur : handlePasswordBlur,
    handleInputChange : handlePasswordChange,
    hasError : passwordHasError
  } = useInput('', (value) => isNotEmpty(value) && hasMinLength(value,6));

  function handleSubmit(event) {
    event.preventDefault();

    console.log(emailValue, passwordValue);
  }

  return (
    <form noValidate onSubmit={handleSubmit}>
    <h2>Login</h2>

    <div className="control-row">
      <Input 
        label ='Email' 
        id="email"
        type="email"
        name="email"
        onBlur = {handleEmailBlur}
        onChange={handleEmailChange} 
        value = {emailValue}
        error = {emailHasError && 'Please enter a valid Email.'}
      />

      <Input
        label='Password'
        id="password"
        type="password"
        name="password"
        onBlur = {handlePasswordBlur}
        onChange={handlePasswordChange}
        value={passwordValue}
        error={passwordHasError && 'Please enter a valid Password.'}
      />
    </div>

    <p className="form-actions">
      <button type="reset" className="button button-flat"  >Reset</button>
      <button className="button" >Login</button>
    </p>
  </form>
  );
}
