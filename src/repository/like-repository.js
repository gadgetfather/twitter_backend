const { Like } = require("../models/user");

// export like repository

async function create(data) {
  try {
    console.log(data);
    const result = await Like.create(data);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}

async function destroy(id) {
  try {
    const result = await Like.findByIdAndDelete(id);
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}

async function update(id, data) {
  try {
    const result = await Like.findByIdAndUpdate(id, data, { new: true });
    return result;
  } catch (error) {
    console.log("Something went wrong in crud repo");
    throw error;
  }
}

module.exports = {
  create,
  destroy,
  update,
};
