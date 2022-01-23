import styled from "styled-components";

export const Page = styled.div`
  height: 60vh;
  width: 100%;
  display: grid;
  place-items: center;
`;

export const Snippet = styled.div`
  background-color: #ffffff;
  border: 1px solid #e4e5e7;
  border-radius: 3px;
  width: 1000px;
`;

export const MetaData = styled.div`
  background-color: #f7f9fa;
  color: #6a6c6f;
  padding: 0.75em 18px;
  overflow: auto;
`;

export const Strong = styled.strong`
  color: #34495e;
`;

export const Pre = styled.pre`
  padding: 18px;
  border-top: 1px solid #e4e5e7;
  border-bottom: 1px solid #e4e5e7;
`;

export const Time = styled.time`
  display: inline-block;
  :first-child {
    float: left;
  }
  :last-child {
    float: right;
  }
`;
