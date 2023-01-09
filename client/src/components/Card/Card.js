import React from "react";
import { GiTrashCan } from "react-icons/gi";
import { useContextAnimals } from "../../context/Animals.context";

const Card = ({ animal }) => {
  const { deleteFunctionAnimals } = useContextAnimals();
  const { _id, title, image } = animal;

  const handleClickToDelete = () => {
    deleteFunctionAnimals("animal", _id);
  };

  return (
    <div className="flex flex-col mt-5 items-center lg:flex-row border rounded-lg shadow-md md:flex-row md:max-w-sm hover:bg-gray-100 flex-nowrap">
      <img
        src={image}
        className="object-cover w-full rounded h-32 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        alt="ss"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-4 text-2xl font-bold tracking-tight gray-900">
          {title}
        </h5>
        <span className="flex items-center justify-center bg-slate-600 rounded-full py-2 cursor-pointer shadow-md">
          <GiTrashCan
            onClick={handleClickToDelete}
            className="text-4xl text-white"
          />
        </span>
      </div>
    </div>
  );
};

export default Card;
