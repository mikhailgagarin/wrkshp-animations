import React, {useState} from "react";

import {ButtonSecondary} from "components/Button";
import Fade from "components/Fade";

export default function AnotherRoute() {
  const [isShown, setIsShown] = useState(false);

  return (
    <>
      <h1>It's another route</h1>

      <ButtonSecondary onClick={() => setIsShown(isShown => !isShown)}>
        {isShown ? "Hide" : "Show"}
      </ButtonSecondary>
      <Fade isShown={isShown}>
        <div>HELLO</div>
      </Fade>
    </>
  );
}
