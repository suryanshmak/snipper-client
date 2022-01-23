import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Nav = styled.nav`
  padding: 2px calc((100% - 1000px) / 2) 0;
  border-bottom: 1px solid #e4e5e7;
  padding-top: 17px;
  padding-bottom: 15px;
  background: #f7f9fa;
  height: 60px;
  display: flex;
  align-items: center;
  color: #6a6c6f;
`;

export const Title = styled(Link)`
  font-size: 2rem;
  font-weight: bold;
  height: 30px;
  padding-left: 50px;
  color: #34495e;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  background-image: -webkit-linear-gradient(
    left,
    #34495e,
    #34495e 25%,
    #9b59b6 25%,
    #9b59b6 35%,
    #3498db 35%,
    #3498db 45%,
    #62cb31 45%,
    #62cb31 55%,
    #ffb606 55%,
    #ffb606 65%,
    #e67e22 65%,
    #e67e22 75%,
    #e74c3c 85%,
    #e74c3c 85%,
    #c0392b 85%,
    #c0392b 100%
  );
  background-image: -moz-linear-gradient(
    left,
    #34495e,
    #34495e 25%,
    #9b59b6 25%,
    #9b59b6 35%,
    #3498db 35%,
    #3498db 45%,
    #62cb31 45%,
    #62cb31 55%,
    #ffb606 55%,
    #ffb606 65%,
    #e67e22 65%,
    #e67e22 75%,
    #e74c3c 85%,
    #e74c3c 85%,
    #c0392b 85%,
    #c0392b 100%
  );
  background-image: -ms-linear-gradient(
    left,
    #34495e,
    #34495e 25%,
    #9b59b6 25%,
    #9b59b6 35%,
    #3498db 35%,
    #3498db 45%,
    #62cb31 45%,
    #62cb31 55%,
    #ffb606 55%,
    #ffb606 65%,
    #e67e22 65%,
    #e67e22 75%,
    #e74c3c 85%,
    #e74c3c 85%,
    #c0392b 85%,
    #c0392b 100%
  );
  background-image: linear-gradient(
    to right,
    #34495e,
    #34495e 25%,
    #9b59b6 25%,
    #9b59b6 35%,
    #3498db 35%,
    #3498db 45%,
    #62cb31 45%,
    #62cb31 55%,
    #ffb606 55%,
    #ffb606 65%,
    #e67e22 65%,
    #e67e22 75%,
    #e74c3c 85%,
    #e74c3c 85%,
    #c0392b 85%,
    #c0392b 100%
  );
  background-size: 100% 6px;
  background-repeat: no-repeat;
  border-bottom: 1px solid #e4e5e7;
  overflow: auto;
  padding-top: 20px;
  padding-bottom: 12px;
  text-align: center;
`;

const LinkStyles = css`
  color: #62cb31;
  display: inline-block;
  :hover {
    color: #4eb722;
    text-decoration: underline;
  }
`;

export const StyledA = styled(Link)`
  ${LinkStyles}
  margin-right: 2em;
`;

export const Button = styled.button`
  border: none;
  background: none;
  margin-left: 28px;
  ${LinkStyles}
  outline: none;
`;

export const Div = styled.div`
  width: 50%;
  float: left;

  &:last-child {
    text-align: right;

    a {
      margin-left: 1.5em;
      margin-right: 0;
    }
  }
`;
