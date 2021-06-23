import React from 'react';
let CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => (
  <div className="credCard" uk-grid>
    <div>
      <div
        className="filipe"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <p>{type}</p>
        <h3 className="card-title">{number.slice()}</h3>
        <p>{expirationMonth}</p> <p>{expirationYear}</p>
        <p>{bank}</p>
        <p>{owner}</p>
        <style>{bgColor}</style>
      </div>
    </div>
  </div>
); 

export default CreditCard;
 