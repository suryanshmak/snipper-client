import styled, { keyframes } from "styled-components"

const Spinner = keyframes`
    to {transform: rotate(360deg);}
`

export const SpinnerDiv = styled.div`
    content: '';
    box-sizing: border-box;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 20px;
    height: 20px;
    margin-top: -10px;
    margin-left: -10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    border-top-color: #000;
    animation: ${Spinner} .6s linear infinite;
`

