import React from "react";
import Alert from "react-bootstrap/Alert";

const AlertComponent = props => {
  return <Alert variant={props.variant}>{props.children}</Alert>;
};

AlertComponent.defaultProps = {
  variant: "info",
};

export default AlertComponent;
