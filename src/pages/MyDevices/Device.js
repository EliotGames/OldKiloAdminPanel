import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import { API, formatLastUpdateMessage } from "../../helpers";

export default ({ device, isSelected, onClick }) => {
  const [lastUpdateMessage, setLastUpdateMessage] = useState("");
  const [isLoading, setLoading] = useState(true);

  const { _id, name, product, currentWeight, maxWeight } = device;

  const weightInPercentages = maxWeight && ((currentWeight / maxWeight) * 100).toFixed(0);

  useEffect(() => {
    API.get(`measure/${_id}`).then(measure => {
      const message = measure ? formatLastUpdateMessage(measure.date) : "Never updated yet";

      setLastUpdateMessage(message);
    });
  }, []);

  useEffect(() => {
    if (lastUpdateMessage) {
      setLoading(false);
    }
  }, [lastUpdateMessage]);

  return (
    <div className={`card ${isSelected && "selected"}`} onClick={onClick}>
      {isLoading ? (
        <div className="loader">
          <Loader type="Oval" color="white" height={80} width={80} />
        </div>
      ) : (
        <React.Fragment>
          <div className="header">
            <div className="title">
              <h4>{name}</h4>
              <p>
                Last update <strong>{lastUpdateMessage}</strong>
              </p>
            </div>
          </div>
          <div className="content">
            <p>
              Product: <em>{product.name}</em>
            </p>
            <p>
              {currentWeight} gram left
              {weightInPercentages && <strong>({weightInPercentages}%)</strong>}
            </p>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
