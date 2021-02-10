import styled from "styled-components";

export const Button = styled.button`
  border: none;
  outline: none !important;
  cursor: pointer;
  padding: 8px;
  font-weight: bold;
  transition: 0.5s;
  background-color: ${(props) => props.bgColor};
  color: blanchedalmond;

  :hover {
    background-color: lightslategrey;
    margin-top: -8px;
  }

  width: 100%;
  border-bottom-left-radius: ${props=>props.radiusBL};
  border-bottom-right-radius: ${props=>props.radiusBR};
  margin-bottom: -9px;
`;
