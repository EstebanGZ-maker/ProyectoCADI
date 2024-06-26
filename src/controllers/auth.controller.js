import User from "../models/users.model.js"
import bcrypt from "bcryptjs"
import { createAccesToken } from "../libs/jwt.js";
import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";



//REGISTRO
export const register = async (req, res) => {

   const {email, password , username, roles } = req.body
   
   try {
       //Buscar y reegistrar usuarios nuevos 

    const userFound = await User.findOne({email}); 
    if (userFound)
      return res.status(400).json( ["El correo ya esta registrado"]); 

    const passwordHash = await bcrypt.hash(password, 10)

    const newUser = new User({
        username,
        email,
        password : passwordHash, 
        roles: roles ? roles : ["user"]
       }); 

    const userSaved = await newUser.save();
    const token = await createAccesToken({id: userSaved._id, user: userSaved.username, roles: userSaved.roles});

    console.log(token)
    
    //lo que va a responder del usuario 
        res.cookie("token", token, { httpOnly: true }); 
        res.json({
        message: "User created successfuly",
        id: userSaved._id,
        username: userSaved.username,
        email: userSaved.email, 
        roles: userSaved.roles, 
        createdAt: userSaved.createdAt,
        updatedAt:userSaved.updatedAt, 
       }) 
           
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

//LOGIN
export const login = async (req, res) => {

    const {email, password} = req.body
 
    try {

      const userFound = await User.findOne({ email });
      if (!userFound)
        return res.status(400).json({message: "Use not found"});

      const isMatch = await bcrypt.compare(password, userFound.password); 
      if (!isMatch) {
        return res.status(401).json({ message: "Correo y/o Contraseña incorrecto " })
      };

    const token = await createAccesToken({id: userFound._id, username: userFound.username, roles: userFound.roles});
    
     //lo que va a responder del usuario 
    res.cookie("token", token, {httOnly : true});
    res.json({
         message: "Sesión iniciada correctamente",
         id: userFound._id,
         username: userFound.username,
         email: userFound.email, 
         roles: userFound.roles,
         createdAt: userFound.createdAt,
         updatedAt:userFound.updatedAt, 
        }) 
            
   }catch (error) {
    res.status(500).json({message: error.message });
   }

 };
 
//LOGOUT 
export const logout = (req, res) => {
    res.cookie("token", "", {
        expires: new Date(0)
    })
    return res.sendStatus(200);
};

//PROFILE (rutas protegidas)
export const profile = async (req, res) => {
  const userFound = await User.findById(req.user.id)

  if (!userFound) return res.status(400).json({ message: "User not found" });

  return res.json({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt
  });
}; 

export const verifyToken = async (req, res) => {
  const {token} = req.cookies; 

  if(!token) return res.status(401).json({message: "Usuario no autorizado" }); 

  jwt.verify(token, TOKEN_SECRET, async (err, user) => {
    if(err) return res.status(401).json({ message: "Usuario no autorizado" }); 

    const userFound = await User.findById(user.id); 
    if(!userFound) return res.status(401).json({ message: "Usuario no autorizado"});

    return res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email, 
    });
  });
}; 


 