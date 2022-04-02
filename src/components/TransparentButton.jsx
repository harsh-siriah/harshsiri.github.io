import React from "react";
import { Button } from "react-bootstrap";

function TransparentButton({ onClick, children, style, className }) {
  return (
    <Button
      variant="no-outline-primary"
      onClick={onClick}
      style={style}
      className={className}
    >
      {children}
    </Button>
  );
}

export default React.memo(TransparentButton);
