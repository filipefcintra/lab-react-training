import React from 'react';

function BoxColor({ r, g, b }) {
  return (
    <div className="Color" style={{ backgroundColor: `rgb(${r},${g},${b})` }}>
      <p>
        rgb{r},{g},{b}
      </p>
    </div>
  );
}

export default BoxColor;
