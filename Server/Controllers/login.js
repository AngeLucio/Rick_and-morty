

// Importa el arreglo de usuarios desde donde esté ubicado
const users = require("../utils/users")

// Exporta la función login que recibe req y res como parámetros
module.exports = function (req, res) {
  // Obtiene los valores de email y password desde la Query
  const { email, password } = req.query;

  // Verifica si existe un usuario con el email y la contraseña proporcionados
  const user = users.find(user => user.email === email && user.password === password);

  // Si se encuentra un usuario que coincide, responde con access: true
  if (user) {
    res.status(200).json({ access: true });
  } else {
    // Si no se encuentra un usuario que coincida, responde con access: false
    res.status(200).json({ access: false });
  }
};
