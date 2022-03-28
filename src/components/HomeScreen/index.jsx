import React from "react";
import Introduction from "../Introduction";

function HomeScreen() {
  return (
    <div>
      <Introduction />
    </div>
  );
}

export default React.memo(HomeScreen);
