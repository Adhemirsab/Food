const validations = (form) => {
  let errors = {};
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  // let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "El campo nombre es requerido";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "El campo Nombre solo acepta letras y espacios en blanco";
  }

  if (!form.email.trim()) {
    errors.email = "El campo email es requerido";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.email = "El campo email es incorrecto";
  }

  if (!form.password.trim().match(/\d/)) {
    errors.password = "La contraseña debe contener al menos un numero";
  } else if (form.password.length < 6 || form.password.length > 10) {
    errors.password = "La contraseña debe contener entre 6 y 10 caracteres";
  }

  return errors;
};

export default validations;
