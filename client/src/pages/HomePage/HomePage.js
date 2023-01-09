import React, { useEffect } from "react";
import { useContextAnimals } from "../../context/Animals.context";
import Form from "../../components/Form/Form";
import Card from "../../components/Card/Card";

const HomePage = () => {
  const {
    getFunctionAnimals,
    animalsList,
    setAnimalsList,
  } = useContextAnimals();

  useEffect(
    () => {
      getFunctionAnimals("animal").then(setAnimalsList);
    },
    [animalsList]
  );

  return (
    <div>
      <Form />
      <div className="flex items-center justify-evenly flex-wrap p-10">
        {animalsList.map((animal, index) =>
          <Card key={index} animal={animal} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
