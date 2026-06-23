import React from "react";

import { ButtonContainer } from "./styles";
import { IButton } from "./types";

const Button = ({ title, variant = "primary", onClick }: IButton) => {
  return (
    <ButtonContainer as="button" variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

export { Button };
