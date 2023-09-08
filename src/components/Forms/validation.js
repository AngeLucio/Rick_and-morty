export const validation = (values) => {
  let errors = {};
  const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;

  const regexPrimerNumero = /^[0-9]/;
  if (!values.email) {
    errors.email = "El email debe ser requerido";
  } else if (!regexEmail.test(values.email)) {
    errors.email = "El email es invalido";
  }
  if (values.password.length > 35) {
    errors.password = "Password muy largo";
  } else if (!values.password) {
    errors.password = "La contraseña es requerida";
  } else if (regexPrimerNumero.test(values.password)) {
    errors.password = "La contraseña no puede comenzar con un número";
  }
  if (values.password.length < 6 || values.password.length > 10) {
    errors.password = "La contraseña debe cumplir entre 6 y 10 caracteres";
  }
  return errors;
};

export default validation;
