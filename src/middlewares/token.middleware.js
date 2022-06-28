export async function Verificar(req, res, next) 
{
  //Obtener el token de los headers
  const bearerHeader = req.headers['authorization'];
  const bearer = bearerHeader.split(" ");
  const token = bearer[1];

  //Si el usuario no ha ingresado el token
  if (!token) {
    return res
      .status(401)
      .send({ auth: false, msg: "Ha olvidado el token" });
  }
  else { next() }
  
}