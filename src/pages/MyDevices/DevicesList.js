import React, { useState, useEffect } from "react";

import { API } from "../../helpers";
import Device from "./Device";

export default function DevicesList({ onDeviceSelect }) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    getDevices().then(data => {
      setDevices(data);
    });
  }, []);

  async function getDevices() {
    return await API.get("device");
  }

  return (
    <div className="list">
      {devices.map(device => (
        <Device key={device._id} device={device} onClick={() => onDeviceSelect(device)} />
      ))}
    </div>
  );
}
