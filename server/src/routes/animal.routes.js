const router = require("express").Router();
const animalController = require("../controllers/animal.controllers");

// router.delete("/:id", animalController.deleteAnimal);
// router.put("/:id", animalController.updateAnimal);
// router.get("/:id", animalController.oneAnimal);
// router.get("/", animalController.allAnimals);
// router.post("/", animalController.newAnimal);
router
  .route("/")
  .get(animalController.allAnimals)
  .post(animalController.newAnimal);

router
  .route("/:id")
  .delete(animalController.deleteAnimal)
  .put(animalController.updateAnimal)
  .get(animalController.oneAnimal);

module.exports = router;
