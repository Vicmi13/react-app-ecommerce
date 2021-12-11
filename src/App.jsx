import "./App.css";
import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import create from "./services/ProductService";
import Header from "./components/Header";
import ProductList from "./components/ProductList";

/**
 * Defina aqui el state para manejar estrellas  - CHECK
 * que llegue a component Review - CHECK
 * y handle it aqui
 */

const App = () => {
  const [nameState, setNameState] = useState(""); // Esto regresa ARRAY
  const [year, setyear] = useState("");
  const [starsNumber, setstarsNumber] = useState(1);
  const [form, setForm] = useState({}); // SE VA A MANIPULAR UB OBJECT
  const [user, setuser] = useState("");

  /*
    {
      name: 'vane',
      photoUrl: '',
      price: 4
    }
  */

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

  const handleStars = (e, nombre, edad) => {
    console.log("nombre", nombre);
    console.log("edad", edad);
    const { value } = e.target;
    setstarsNumber(value);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log("form", form);
    try {
      const result = await create(form);
      console.log("user info in APP ", result);
    } catch (error) {
      console.log("error", error);
    }

    /**
     * INSTRUCCIONES DEL FORM
     *
     * 1. QUE SE GUARDA EL FORM
     * 2. QUE SE VAYA AL SERVICIO DE CREAR PRODUCTO
     *    URL localhost:5000/api/info-products
     * 3. NOS REGRESA RESPUESTA EXITOSA O FALLIDA
     * 4. SI ES EXITOSA MOSTRARLO EN LISTA EL PRODCUTO AGREGADO\
     *
     * PASAR VALORES ENTRE COMPONENTES HERMANO
     */
  };

  const handleResetForm = () => {
    // SETEAR LA FORMA
    setForm({});
  };

  const handleUser = (user) => setuser(user);

  return (
    <div className="App">
      {/* HIJO A */}
      <Header yearByprops={year} handleUser={handleUser} />

      <div>
        <h4>
          Formulario {year} - numero de estrellas {starsNumber}
        </h4>
        <label htmlFor="Ingresar texto"></label>
        <input type="text" value={nameState} onChange={(e) => handleName(e)} />

        <form
          style={{
            border: "2px solid red",
            marginTop: 40,
            padding: 20,
            width: 500,
            height: 400,
            margin: "0 auto",
          }}
        >
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            size="30px"
            placeholder="Enter product name"
            value={form.name || ""}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <br />
          <label htmlFor="furl">Photo URL:</label>
          <input
            type="text"
            id="furl"
            name="furl"
            size="30px"
            placeholder="Enter product photo url"
            value={form.image || ""}
            onChange={(e) => {
              setForm({ ...form, image: e.target.value });
            }}
          />
          <br />
          <label htmlFor="fprice">Price:</label>
          <input
            type="number"
            id="fprice"
            name="fprice"
            placeholder="Enter product price"
            value={form.price || ""}
            onChange={(e) => {
              setForm({ ...form, price: e.target.value });
            }}
          />
          <br />
          <label htmlFor="fquantity">Quantity:</label>
          <input
            type="number"
            id="fStock"
            name="fStock"
            placeholder="Enter product quantity"
            value={form.countInStock || ""}
            onChange={(e) => {
              setForm({ ...form, countInStock: e.target.value });
            }}
          />
          <br />
          <label htmlFor="fRaiting">Raiting:</label>s
          <input
            type="number"
            id="fRaiting"
            size="30px"
            name="fRaiting"
            placeholder="Enter product raiting"
            value={form.rating || ""}
            onChange={(e) => {
              setForm({ ...form, rating: e.target.value });
            }}
          />
          <br />
          <label htmlFor="fReviews">No. Reviews:</label>
          <input
            type="number"
            id="fReviews"
            name="fReviews"
            placeholder="Enter Number Reviews"
            value={form.numReviews || ""}
            onChange={(e) => {
              setForm({ ...form, numReviews: e.target.value });
            }}
          />
          <br />
          <label htmlFor="fdesc">Description:</label>
          <input
            type="text"
            id="fdesc"
            name="fdesc"
            placeholder="Enter product description"
            value={form.description || ""}
            onChange={(e) => {
              setForm({ ...form, description: e.target.value });
            }}
          />
          <br />
          <br />
          <span>
            <button
              type="submit"
              className="form_button"
              onClick={(e) => handleSubmitForm(e)}
            >
              Submit
            </button>
          </span>
          <span>
            <button
              type="reset"
              className="form_button"
              onClick={() => handleResetForm()}
            >
              Cancel
            </button>
          </span>
        </form>
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
        // HIJO B
        <Footer
          user={user}
          stars={starsNumber}
          nameState={nameState}
          yearByprops={(yearparam, month) => setyear(`${yearparam} ${month}`)}
          handleStars={(eventito, nombre, edad) =>
            handleStars(eventito, nombre, edad)
          }
        />
      )}
      {nameState === "" && <h3>Name sigue vacio</h3>}

      <ProductList />
    </div>
  );
};

export default App;
