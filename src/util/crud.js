export const getOne = async (model) => {};
export const getMany = async (model) => {};
export const createOne = async (model) => {};
export const updateOne = async (model) => {};
export const removeOne = async (model) => {};

export const crudControllers = (model) => ({
  getOne: getOne,
  getMany: getMany,
  createOne: createOne,
  updateOne: updateOne,
  removeOne: removeOne,
});
