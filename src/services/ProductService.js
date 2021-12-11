import axios from "axios";

// POST
const create = async (productObject) => {
  const objectUser = {
    name: "Tony",
    last_name: "StarkVIII",
    email: "inav9l@hotmail.com",
    age: 47,
    role: "INVITE",
    is_active: true,
  };

  //metodo de post REGRESA UNA PROMESA POR LO TANTO SE  TIENE QUE MANIPULAR
  try {
    const { data } = await axios.post(
      "http://localhost:3300/users",
      objectUser
    );

    // key: value
    // const returnObject =  { user, message };
    return data;
  } catch (error) {
    console.log("error", error);
  }

  /**
   *  CALLBACK
   *
   * EJEMPLO DE CREACION
   *  new Promise( (resolve, reject) => {
   *  resolve('Platillo entregado')
   *
   * reject('No ahy hamburguesa)
   * } )
   *
   *
   * EJEMPLO DE MANIPULACION
   *
   * //PRIMER FORMA
   * async await MUST try {} catch {}
   *
   *
   * // SEGUNDA FORMA
   * .then()
   * .catch()
   *
   */

  // fetch.get
};

/**
 * CRUD
 *
 * GET recuperar TODOS
 * GET solo uno mandar id
 *
 * POST CREAR req.body
 *
 * DELETE ELIMINAR by id
 *
 * PATCH  ACTUALIZACION  Se modifica algo en especifico de ub objeto
 *
 * PUT  ACTUALIZACION Se actualiza tods los elementos de un objeto
 */

export default create;
