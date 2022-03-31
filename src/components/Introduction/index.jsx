import React from "react";
import Stack from "react-bootstrap/Stack";
import copyTexts from "../../utils/copyTexts";
import Bubble from "./Bubble";
import "./introduction.css";

function Introduction(props) {
  return (
    <Stack>
      <h3>{copyTexts.hiMyNameIs}</h3>
      <h1>{copyTexts.name}</h1>
      <Stack direction="horizontal" gap={1}>
        <Bubble text={copyTexts.bubble1} />
        <Bubble text={copyTexts.bubble2} />
        <Bubble text={copyTexts.bubble3} />
      </Stack>
    </Stack>
  );
}

export default React.memo(Introduction);
