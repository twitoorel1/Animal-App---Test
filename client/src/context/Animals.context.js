import React, { createContext, useState, useContext } from "react";
import axios from "axios";
const ENDPOINT = "http://localhost:9000";

const AnimalsContext = createContext();

export const useContextAnimals = () => useContext(AnimalsContext);

export default function AnimalsProvider({ children }) {
  const [animalsList, setAnimalsList] = useState([]);

  // Get Function With Route
  const getFunctionAnimals = async route => {
    const res = await fetch(`${ENDPOINT}/${route}`);
    const data = await res.json();
    return data;
  };

  // Post Function With Route
  const postFunctionAnimals = async (route, body) => {
    const { data } = await axios.post(`${ENDPOINT}/${route}`, body);
    return data;
  };

  // Delete Function With Route
  const deleteFunctionAnimals = async (route, id) => {
    const { data } = await axios.delete(`${ENDPOINT}/${route}/${id}`);
    return data;
  };

  // Context Values
  const contextValues = {
    getFunctionAnimals,
    postFunctionAnimals,
    deleteFunctionAnimals,

    animalsList,
    setAnimalsList,
  };

  return (
    <AnimalsContext.Provider value={contextValues}>
      {children}
    </AnimalsContext.Provider>
  );
}
