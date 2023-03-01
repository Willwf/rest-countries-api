import styled from "styled-components";

export const BorderCountryButton = styled.button`
  flex: 0 0 30%;

  min-height: 4vh;
  padding: 0 0.5rem;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  color: ${(props) => props.theme.text};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);
  border: none;

  background-color: ${(props) => props.theme.element};

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    flex: 0 0 15%;

    font-size: 1.3rem;

    min-height: 3rem;
    border-radius: 0.3rem;
  }
`;
