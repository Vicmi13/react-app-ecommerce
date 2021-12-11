import React, { useEffect, useState } from "react";
import findAllUsers from "../services/UserService";

const ProductList = () => {
  const [pokemonsArray, setpokemonsArray] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const { data } = await findAllUsers();
    console.log("result", data);
    setpokemonsArray(data.results);
  };

  // pokemonsArray
  // recorrer pokemonsArray

  // map() regresa un array y forEach no regresan NADA, for no regresa NADA

  return (
    <>
      <h3>Lista de productos</h3>
      {pokemonsArray.length !== 0 ? (
        pokemonsArray.map((pokemonObject, index) => (
          <h5 key={index}> {pokemonObject.name}</h5>
        ))
      ) : (
        <h6>Cargando pokemones</h6>
      )}
    </>
  );
};

export default ProductList;
