import User from "./user.model.js";

export const whoAmI = (req, res) => {
  res.status(200).json({ data: req.user });
};
export const updateMe = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user._id, req.body, {
      new: true,
    });
    res.status(200).json({ data: user });
  } catch (err) {
    res.status(400).end();
  }
};
