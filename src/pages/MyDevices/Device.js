import React from "react";

export default ({ device }) => {
  const { name, currentWeight } = device;

  return (
    <div className="row">
      <div className="card">
        <div className="header">
          <div className="title">
            <h4>{name}</h4>
            <p>
              Last update <strong>20 min ago</strong>
            </p>
          </div>
        </div>
        <div className="content">
          <p>
            Product: <em>Herbal tea</em>
          </p>
          <p>
            {currentWeight} gram left <strong>(30%)</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
