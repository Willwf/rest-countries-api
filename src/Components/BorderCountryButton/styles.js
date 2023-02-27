import styled from "styled-components";

export const BorderCountryButton = styled.button`
  flex: 0 0 30%;

  min-height: 4vh;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.text};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);
  border: none;

  background-color: ${(props) => props.theme.element};
`;
