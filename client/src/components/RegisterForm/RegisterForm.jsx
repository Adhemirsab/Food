import React from "react";
import { useRegister } from "../../hooks/useRegister";
import styles from "./RegisterForm.module.css";
import validateRegister from "./validateRegister.js";
import Message from "../../helpers/Message";
import Loaderr from "../../helpers/Loaderr";

function RegisterForm() {
  const initialForm = {
    name: "",
    email: "",
    password: "",
  };
  const {
    form,
    errors,
    loading,
    response,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useRegister(initialForm, validateRegister);
  return (
    <div className={styles.container}>
      <div className={styles.register_container}>
        <h1>Crear Cuenta</h1>
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
          {errors.name && (
            <p className={styles.register_error}>{errors.name}</p>
          )}
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
          {errors.email && (
            <p className={styles.register_error}>{errors.email}</p>
          )}
          <input
            className={styles.form_input}
            type="text"
            name="password"
            placeholder="contraseña"
            onChange={handleChange}
            onBlur={handleBlur}
            value={form.password}
            required
          />
          {errors.password && (
            <p className={styles.register_error}>{errors.password}</p>
          )}
          <input
            type="submit"
            value="Registrarse"
            className={styles.form_button}
          />
        </form>
        {loading && <Loaderr />}
        {response && <Message msg="Se registro exitosamente" />}
      </div>
    </div>
  );
}

export default RegisterForm;
