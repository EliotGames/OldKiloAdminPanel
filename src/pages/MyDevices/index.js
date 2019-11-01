import React from "react";

class MyDevices extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content mydevices">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <div className="card">
                <div className="header">
                  <div className="title">
                    <h4>My device</h4>
                    <p>Last update 20 min ago</p>
                  </div>
                </div>
                <div className="content"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MyDevices;
