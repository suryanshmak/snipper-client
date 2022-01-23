import { StyledDiv } from "../Input/styles";
import { Submit } from "./styles";

type ButtonProps = {
  value: string;
};

const SubmitButton = ({ value }: ButtonProps) => (
  <StyledDiv>
    <Submit type="submit" value={value} />
  </StyledDiv>
);

export default SubmitButton;
