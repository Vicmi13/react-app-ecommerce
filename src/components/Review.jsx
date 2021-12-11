import React from "react";

function Review({ stars, handleStars }) {
  // props.stars

  return (
    <div>
      <h3>Component Review</h3>
      <br />
      <label htmlFor="stars number">Numero de estrellas</label>
      <input
        type="text"
        value={stars}
        onChange={(e) => handleStars(e, "Vane", 27)}
      />
    </div>
  );
}

export default Review;
