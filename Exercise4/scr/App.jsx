import React, { useState } from "react";

function App() {
  /* Contants used in this component */
  const DOLLAR_TO_EURO_RATIO = 0.92;
  const DOLLAR_TO_DONG_RATIO = 24560;

  let valueDollars = 15;

  // Convert the given value in dollars to a value in euro
  function dollarToEuro(valueInDollars) {
    return (valueInDollars * DOLLAR_TO_EURO_RATIO).toFixed(2); // Keep 2 decimal places
  }

  // Convert the given value in dollars to a value in dong
  function dollarToDong(valueInDollars) {
    return (valueInDollars * DOLLAR_TO_DONG_RATIO).toFixed(0); // No decimal places for Dong
  }

  return (
    <main>
      <h1>Device conversions</h1>

      <p>
        <label>Current value in dollars</label>
        <input disabled value={valueDollars} />

        {/* Display the value in dongs */}
        <label>Value in Dong</label>
        <input disabled value={dollarToDong(valueDollars)} />

        {/* Display the value in euros */}
        <label>Value in Euro</label>
        <input disabled value={dollarToEuro(valueDollars)} />
      </p>
    </main>
  );
}

export default App;