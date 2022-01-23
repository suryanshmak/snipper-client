import styled from "styled-components";

export const Heading = styled.h2`
  font-size: 24px;
  margin-bottom: 36px;
  margin-top: 18px;
  text-align: center;
`;

export const Table = styled.table`
  background: white;
  border: 1px solid #e4e5e7;
  border-collapse: collapse;
  width: 60%;
`;

const TDTRStyles = `
  text-align: left;
  padding: 9px 18px;
  
  :last-child {
    text-align: right;
    color: #6a6c6f;
  }
`;

export const StyledTD = styled.td`
  ${TDTRStyles}
`;
export const StyledTH = styled.th`
  ${TDTRStyles}
`;

export const StyledTR = styled.tr`
  border-bottom: 1px solid #e4e5e7;
  :nth-child(2n) {
    background-color: #f7f9fa;
  }
`;
