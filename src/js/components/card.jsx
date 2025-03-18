import React from "react";

const Card = (props) => {
  const { image, title, description } = props.cards;
  return (
    <div className="card h-100">
      <div className="card-img-top" style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
        <div style={{ height: '100%', width: '100%', display: 'flex' }}>
          {image}
        </div>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <hr style={{ border: 'none', height: '1px', backgroundColor: '#343a40', margin: '0 -15px', marginBottom: '20px' }} />
        <button className="btn btn-primary">
          Find out More!
        </button>
      </div>
    </div>
  );
};

export default Card;

