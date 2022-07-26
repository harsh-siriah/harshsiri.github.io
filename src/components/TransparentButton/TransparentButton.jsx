import React from "react";
import { Button } from "react-bootstrap";
import "./TransparentButton.css";

function TransparentButton({ onClick, children, style }) {
  return (
    <Button
      variant="no-outline-primary"
      onClick={onClick}
      style={style}
      className="btn-transparent"
    >
      {children}
    </Button>
  );
}

export default React.memo(TransparentButton);
