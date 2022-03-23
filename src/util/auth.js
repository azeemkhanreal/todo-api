import User from "../resources/user/user.model.js";
import jwt from "jsonwebtoken";

export const newToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
};
export const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

export const signup = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = newToken(user);
    res.status(201).send({ token });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export const signin = async (req, res) => {
  const invalid = { message: "invalid email and password combination" };
  if (!req.body.email || !req.body.password) {
    return res.status(404).send({ message: "need email and password" });
  }
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(401).send(invalid);
    const match = await user.checkPassword(req.body.password);
    if (!match) return res.status(401).send(invalid);
    const token = newToken(user);
    res.status(200).send({ token });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
//protect middleware
export const protect = async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).end("need token for authorization");
  }
  const token = bearer.split(" ")[1].trim();
  let payload;
  try {
    payload = await verifyToken(token);
  } catch (e) {
    return res.status(401).end("Invalid token");
  }
  const user = await User.findById(payload.id);
  if (!user) res.status(401).end();
  req.user = user;
  next();
};
