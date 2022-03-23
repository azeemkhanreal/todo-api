export const getOne = (model) => async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await model.findById(id);
    res.status(200).json({ data: doc });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export const getMany = (model) => async (req, res) => {
  try {
    const docs = await model.find();
    res.status(200).json({ data: docs });
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
};
export const createOne = (model) => async (req, res) => {
  try {
    const doc = await model.create(req.body);
    res.status(200).json({ data: doc });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const updateOne = (model) => async (req, res) => {
  try {
    const doc = await model.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    });
    res.status(200).json({ data: doc });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
export const removeOne = (model) => async (req, res) => {
  try {
    await model.findByIdAndRemove(req.params.id);
    res.status(200).json({ ok: 1 });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Generic function
export const crudControllers = (model) => ({
  getOne: getOne(model),
  getMany: getMany(model),
  createOne: createOne(model),
  updateOne: updateOne(model),
  removeOne: removeOne(model),
});
