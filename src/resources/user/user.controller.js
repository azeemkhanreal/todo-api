export const whoAmI = (req, res) => {
  res.json({ name: "Azeem Khan" });
};
export const updateMe = (req, res) => {
  res.end("from updateme controller");
};
