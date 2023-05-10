import { useState } from "react";
import axios from "axios";
export const useLogin = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validateForm(form));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(form));
    if (Object.keys(errors).length === 0) {
      axios.post("http://localhost:3001/auth/login").then((res) => {
        setForm(initialForm);
      });
    }
  };
  return {
    form,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  };
};
