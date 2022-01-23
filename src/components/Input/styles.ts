import React from "react";
import styled, { css } from "styled-components";

export const StyledDiv = styled.div`
  margin-bottom: 18px;
  :last-child {
    border-top: 1px dashed #e4e5e7;
  }
`;

const labelStyles = css`
  display: inline-block;
  margin-bottom: 9px;
`;

export const StyledLabel = styled.label`
  ${labelStyles}
`;

export const Error = styled.label`
  ${labelStyles}
  color: #c0392b;
  font-weight: bold;
  display: block;
`;

const inputStyles = css`
  padding: 0.75em 1rem;
  width: 100%;
`;

export const InputTextArea = css`
  color: #6a6c6f;
  background: #ffffff;
  border: 1px solid #e4e5e7;
  border-radius: 3px;
`;

export const StyledInput = styled.input`
  ${InputTextArea}
  ${inputStyles}
  &#delete {
    border: 1px solid #e4e5e7;
    outline: none;
    border-radius: 0;
    padding: 5px;
    width: 70px;
  }
  border-color: ${(props) =>
    props["aria-invalid"] ? "#c0392b !important" : ""};
  border-width: ${(props) => (props["aria-invalid"] ? "2px !important" : "")};
`;
