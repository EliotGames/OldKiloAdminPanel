import React, { useState, useEffect } from "react";

import { API } from "../../helpers";
import DevicesList from "./DevicesList";
import EditDevice from "./EditDevice";

export default function MyDevices() {
  const [selectedDevice, setSelectedDevice] = useState(null);

  function handleDeviceSelect(device) {
    setSelectedDevice(device);
  }

  function handleSaveChangesClick(device) {
    API.patch(`device/${device._id}`, device)
      .then(res => {
        
        setSelectedDevice(null);
      })
      .catch(e => {
        console.error(e);
      });
  }

  return (
    <div className="mydevices content">
      <div className="container-fluid">
        <div className="row">
          {selectedDevice ? (
            <React.Fragment>
              <div className="col-lg-7">
                <DevicesList onDeviceSelect={handleDeviceSelect} />
              </div>
              <div className="col-lg-5">
                <EditDevice device={selectedDevice} onSaveChangesClick={handleSaveChangesClick} />
              </div>
            </React.Fragment>
          ) : (
            <div className="col-lg-12">
              <DevicesList onDeviceSelect={handleDeviceSelect} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
