const validationCreate = (form) => {
  let errors = {};
  let regexComments = /^.{1,255}$/;

  if (!form.name.trim()) {
    errors.name = "Se requiere un nombre";
  }

  // if (!form.image.trim()) {
  //   errors.image = "Se requiere un nombre";
  // }

  if (!form.summary.trim()) {
    errors.summary = "Se requiere un resumen de la receta";
  } else if (!regexComments.test(form.summary.trim())) {
    errors.summary = "El campo summary no debe exceder los 255 caracteres";
  }

  if (!form.healthScore.trim()) {
    errors.healthScore = "Se requiere dar un score a la receta";
  }

  if (!form.steps.trim()) {
    errors.steps = "Se requiere indicar los pasos de la receta";
  }

  if (form.diets.length === 0) {
    errors.diets = "Se debe elegir al menos un tipo de dieta";
  }

  return errors;
};

export default validationCreate;
