import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

import { API } from "../../helpers";
import DevicesList from "./DevicesList";
import EditDevice from "./EditDevice";

export default function MyDevices() {
  const [devices, setDevices] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState(null);

  const getDevices = async () => {
    try {
      return await API.get("device");
    } catch (error) {
      alert(error);
    }
  };

  const handleDeviceSelect = device => {
    setSelectedDevice(device);
  };

  const handleSaveChangesClick = async device => {
    try {
      API.patch(`device/${device._id}`, device);

      setSelectedDevice(null);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getDevices().then(data => {
      setDevices(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className="mydevices content">
      <div className="container-fluid">
        <div className="row">
          {selectedDevice ? (
            <React.Fragment>
              <div className="col-lg-7 animate-none">
                <DevicesList
                  devices={devices}
                  isLoading={isLoading}
                  selectedDevice={selectedDevice}
                  onDeviceSelect={handleDeviceSelect}
                />
              </div>
              <div className="col-lg-5">
                <EditDevice device={selectedDevice} onSaveChangesClick={handleSaveChangesClick} />
              </div>
            </React.Fragment>
          ) : (
            <div className="col-lg-12 animate-width">
              <DevicesList
                devices={devices}
                isLoading={isLoading}
                onDeviceSelect={handleDeviceSelect}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
