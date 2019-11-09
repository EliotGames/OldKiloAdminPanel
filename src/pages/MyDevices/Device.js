import React, { useState, useEffect } from "react";
import Loader from "react-loader-spinner";

import { API, formatLastUpdateMessage } from "../../helpers";

export default ({ device, onClick }) => {
  const [lastWeightUpdateMessage, setLastWeightUpdateMessage] = useState("");
  const [product, setProduct] = useState("");
  const [isLoading, setLoading] = useState(true);

  const { _id, name, currentWeight, maxWeight } = device;
  const weightInPercentages = maxWeight && ((currentWeight / maxWeight) * 100).toFixed(0);

  useEffect(() => {
    API.get(`measure/${_id}`).then(measure => {
      if (measure) {
        setLastWeightUpdateMessage(formatLastUpdateMessage(measure.date));
      } else {
        setLastWeightUpdateMessage("Never updated yet");
      }
    });
  }, []);

  useEffect(() => {
    if (lastWeightUpdateMessage) {
      setLoading(false);
    }
  }, [lastWeightUpdateMessage]);

  return (
    <div className="row" onClick={onClick}>
      <div className="card">
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
                  Last update <strong>{lastWeightUpdateMessage}</strong>
                </p>
              </div>
            </div>
            <div className="content">
              <p>
                Product: <em>{}</em>
              </p>
              <p>
                {currentWeight} gram left{" "}
                {weightInPercentages && <strong>({weightInPercentages}%)</strong>}
              </p>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};
