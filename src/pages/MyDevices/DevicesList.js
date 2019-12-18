import React from "react";

import CircleLoader from "../../components/CircleLoader";
import Device from "./Device";

export default function DevicesList({ devices, isLoading, selectedDevice, onDeviceSelect }) {
  return (
    <div className="list">
      {isLoading ? (
        <div className="loader">
          <CircleLoader />
        </div>
      ) : (
        devices.map(device => (
          <Device
            key={device._id}
            isSelected={selectedDevice && selectedDevice._id === device._id}
            device={device}
            onClick={() => {
              onDeviceSelect(device);
            }}
          />
        ))
      )}
    </div>
  );
}
