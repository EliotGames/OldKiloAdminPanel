import React, { useState, useEffect } from "react";
import Select from "react-select";

import TextInput from "../../components/FormInputs/TextInput";

export default function EditDevice({ device: selectedDevice, onSaveChangesClick }) {
  const [device, setDevice] = useState(selectedDevice);

  useEffect(() => {
    const selectedAnotherDevice = {
      name: '',
      currentWeight: 0,
      product: '',
      productType: '',
      maxWeight: '',
      zeroWeight: '',
      ...selectedDevice
    }

    setDevice(selectedAnotherDevice);
  }, [selectedDevice]);

  function handleChange(e) {
    setDevice({
      ...device,
      [e.target.name]: e.target.value
    });
  }

  function handleUseCurrentWeight(fileld) {
    setDevice({
      ...device,
      [fileld]: device.currentWeight
    });
  }

  return (
    <div className="edit-form">
      <div className="card">
        <div className="header">
          <h4 className="title">KiLo name:</h4>
          <TextInput type="text" name="name" value={device.name} onChange={handleChange} />
        </div>
        <div className="content">
          <h5 className="field">Product:</h5>
          <TextInput value={device.product} name="product" type="text" onChange={handleChange} />

          <h5 className="field">Product type:</h5>
          <TextInput
            value={device.productType}
            name="productType"
            type="text"
            onChange={handleChange}
          />

          <h5 className="field">Maximum product weight:</h5>
          <div className="field-with-button">
            <TextInput
              className="text-input"
              type="number"
              value={device.maxWeight}
              name="maxWeight"
              placeholder="e.g. 4300"
              helpText="grams"
              onChange={handleChange}
            />
            <button className="btn btn-fill" onClick={() => handleUseCurrentWeight("maxWeight")}>
              Use current weight
            </button>
          </div>

          <h5 className="field">Tare weight:</h5>
          <div className="field-with-button">
            <TextInput
              className="text-input"
              type="number"
              value={device.zeroWeight}
              name="zeroWeight"
              placeholder="e.g. 300"
              helpText="grams"
              onChange={handleChange}
            />
            <button className="btn btn-fill" onClick={() => handleUseCurrentWeight("zeroWeight")}>
              Use current weight
            </button>
          </div>

          <h5 className="field">Current weight:</h5>
          <p className="weight">{device.currentWeight} grams</p>

          <button className="submit btn btn-fill" onClick={() => onSaveChangesClick(device)}>
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
