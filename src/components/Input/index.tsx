import React from "react";
import { StyledDiv, StyledLabel, StyledInput, Error } from "./styles";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  options: {
    id: string;
    label: string;
    shrink: string | undefined;
  };
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ options: { id, label, shrink }, ...props }, ref) => (
    <StyledDiv>
      <StyledLabel htmlFor={id}>{label}:</StyledLabel>
      {shrink && <Error>{shrink}</Error>}
      <StyledInput aria-invalid={!!shrink} id={id} {...props} ref={ref} />
    </StyledDiv>
  )
);

export default Input;
