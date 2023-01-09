import React, { useState } from "react";
import Button from "../Button/Button";
import { useContextAnimals } from "../../context/Animals.context";

const inputText = [
  {
    name: "title",
    label: "Title Animal",
    placeholder: "Please Enter Name",
    type: "text",
  },
  {
    name: "image",
    label: "Image Src Animal",
    placeholder: "Please Enter Image Src",
    type: "text",
  },
];

const Form = () => {
  const { postFunctionAnimals } = useContextAnimals();
  const [valuesInput, setValuesInput] = useState();

  const handleChange = e => {
    setValuesInput({
      ...valuesInput,
      [e.target.name]: e.target.value,
    });
  };

  const buttonSubmit = async e => {
    e.preventDefault();
    await postFunctionAnimals("animal", valuesInput);
    setValuesInput("");
  };

  return (
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="flex flex-col items-center m-4">
          <h1 className="font-semibold  text-2xl mb-6 text-gray-900">
            Add New Animal
          </h1>
          <form
            className="flex items-center justify-center flex-col"
            onSubmit={buttonSubmit}
          >
            {inputText.map((input, index) =>
              <input
                className="shadow rounded border border-gray-200 py-1 px-3 mb-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
                onChange={handleChange}
                key={index}
                required
              />
            )}
            <Button type="submit">Add New</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
