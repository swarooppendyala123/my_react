import { useState } from "react";

export default function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);
  const [didEidt, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);
    setDidEdit(false);
  }
  
  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    value : enteredValue,
    didEidt,
    handleInputBlur,
    handleInputChange,
    hasError : didEidt && !valueIsValid
  }
}