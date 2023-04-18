import React from "react";
import { UseForm } from "../../hooks/useForm";
import styles from "./LoginForm.module.css";
import validateForm from "./validateForm.js";

function LoginForm() {
  const initialForm = {
    name: "",
    email: "",
    subject: "",
    comments: "",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = UseForm(initialForm, validateForm);
  return (
    <div>
      <h1>hola desde login form</h1>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.form_input}
          type="text"
          name="name"
          placeholder="Escribe tu nombre"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          className={styles.form_input}
          type="email"
          name="email"
          placeholder="Escribe tu email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          className={styles.form_input}
          type="text"
          name="subject"
          placeholder="Asunto a tratar"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.subject}
          required
        />
        {errors.subject && <p>{errors.subject}</p>}
        <textarea
          className={styles.form_textarea}
          name="comments"
          cols="50"
          row="5"
          placeholder="Escribe tus comentarios"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.comments}
          required
        ></textarea>
        {errors.comments && <p>{errors.comments}</p>}
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default LoginForm;
