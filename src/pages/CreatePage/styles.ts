import styled from "styled-components";
import { InputTextArea } from "../../components/Input/styles";

export const StyledForm = styled.form`
  width: 80%;
  margin: 1rem auto auto auto;
`;

export const StyledTxt = styled.textarea`
  ${InputTextArea}
  padding: 18px;
  width: 100%;
  height: 266px;
  border-color: ${(props) =>
    props["aria-invalid"] ? "#c0392b !important" : ""};
  border-width: ${(props) => (props["aria-invalid"] ? "2px !important" : "")};
`;
