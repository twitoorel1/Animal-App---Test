const Animal = require("../models/animal.models");

// Create New Animal
exports.newAnimal = async (req, res) => {
  try {
    const { title, image } = req.body;
    if (!title) return res.status(401).send("Please Provide Title");
    if (!image) return res.status(401).send("Please Provide Image");
    const newAnimal = await Animal.create(req.body);
    res.status(201).json(newAnimal);
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// Delete Animal By Id
exports.deleteAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    await Animal.findByIdAndDelete(id);
    res.status(200).json("The Animal has been deleted");
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// Update Animal By Id
exports.updateAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const updateAnimal = await Animal.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateAnimal);
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// Find One Animal By Id
exports.oneAnimal = async (req, res) => {
  try {
    const { id } = req.params;
    const animal = await Animal.findById(id);
    res.status(200).json(animal);
  } catch (error) {
    res.status(403).json(error.message);
  }
};

// Get All Animals
exports.allAnimals = async (req, res) => {
  try {
    const allAnimals = await Animal.find();
    res.status(200).json(allAnimals.reverse());
  } catch (error) {
    res.status(403).json(error.message);
  }
};
