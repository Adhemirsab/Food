import React from "react";
import { useLogin } from "../../hooks/useLogin";

function LoginForm() {
  const initialForm = {
    email: "",
    password: "",
  };
  const { form, errors, handleChange, handleBlur, handleSubmit } = useLogin(
    initialForm
    // validateLogin
  );
  return (
    <div>
      <h1>hola desde Register form</h1>
      {/* <form onSubmit={handleSubmit}>
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
          name="password"
          placeholder="contrase;a"
          onChange={handleChange}
          onBlur={handleBlur}
          value={form.password}
          required
        />
        {errors.password && <p>{errors.password}</p>}
      
        <input type="submit" value="Enviar" />
      </form> */}
    </div>
  );
}

export default LoginForm;
