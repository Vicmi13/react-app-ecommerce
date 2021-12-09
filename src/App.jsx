import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";

const App = () => {
  const [nameState, setNameState] = useState(""); // Esto regresa ARRAY
  const [year, setyear] = useState("");

  const rating = 5;
  // [primerElemento, segundoElemento ]

  useEffect(() => {
    // ESTO SOLO SE EJECUTA LA PRIMERA VEZ
    console.log("primer hook");
  }, []);

  useEffect(() => {
    console.log("Se lanza hook de nameState", nameState);
  }, [nameState]);

  const handleName = (e) => {
    const { value } = e.target;
    setNameState(value);
  };

  const receivedYearParam = (year, month) => {
    // 2021 December
    setyear(`${year} ${month}`);
  };

  return (
    <div className="App">
      <div>
        <h4>Formulario {year}</h4>
        <label htmlFor="Ingresar texto"></label>
        <input type="text" value={nameState} onChange={(e) => handleName(e)} />
      </div>

      {/* SI nombre vacio mostrar
      un label que diga que no hay nada 
      en caso contrario mostrar <Footer /> */}

      {nameState === "" ? (
        // <React.Fragment></React.Fragment>
        <>
          <h5> Nombre </h5>
          <h5> vacio</h5>
        </>
      ) : (
        // HIJO
        <Footer
          stars={rating}
          nameState={nameState}
          yearByprops={(yearparam, month) => setyear(`${yearparam} ${month}`)}
        />
      )}

      {nameState === "" && <h3>Name sigue vacio</h3>}
    </div>
  );
};

export default App;
