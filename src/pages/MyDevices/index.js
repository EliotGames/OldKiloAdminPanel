import React, { useState, useEffect } from "react";
import Device from "./Device";

function MyDevices(props) {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    fetch("http://eliot-project.herokuapp.com/api/device")
      .then(res => res.json())
      .then(data => {
        setDevices(data);
      });
  });

  return (
    <div className="content mydevices">
      <div className="container-fluid">
        {devices.map(device => (
          <Device device={device} />
        ))}
      </div>
    </div>
  );
}

export default MyDevices;
