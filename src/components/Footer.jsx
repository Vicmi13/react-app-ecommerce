import React, { useState, useEffect } from "react";
import Review from "./Review";

const Footer = ({ nameState, stars, yearByprops }) => {
  /**
   * DEL PADRE AL HIJO SE RECUPERA
   * POR atributo de un OBJECT
   * props.nameState
   */

  const [year] = useState(2021);
  console.log("nameState", nameState);

  useEffect(() => {
    // SE PASA POR PROPS,
    // CUANDO ES DEL HIJO AL PADRE
    //es una FUNCION
    yearByprops(year, "December");
    // props.yearByprops()
  }, []);

  // aqui va pasar el props
  return (
    <div>
      Este es el footer {nameState}
      <br />
      Copyright {year}
      <Review stars={stars} />
    </div>
  );
};

export default Footer;
