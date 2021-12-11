import React, { useState, useEffect } from "react";

function Header({ yearByprops, handleUser }) {
  // props.yearByprops
  // props.function

  const [user, setuser] = useState("");

  // DIDMOUNT
  useEffect(() => {
    setuser("Vane 😎");

    // '' SIGUE VACIO, ESTA MAL
    // handleUser(user);
  }, []);

  // se debe de mandar cuando ya tengo valor el state user
  useEffect(() => {
    if (user !== "") handleUser(user);
  }, [user]);

  return (
    <div>
      <h4>Header de nuestra app</h4>
      <h6>Year {yearByprops} </h6>
      <h6>Welcome {user}</h6>
    </div>
  );
}

export default Header;
