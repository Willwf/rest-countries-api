import styled from "styled-components";
import * as colors from "../../styles/variables";

export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 4rem;
  background-color: ${(props) => props.theme.element};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);

  @media (min-width: 1024px) {
    max-width: 30%;
  }
`;
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};

  width: 1.8rem;
  height: 1.8rem;

  padding: 0 2.5rem;
`;

export const SearchInput = styled.input`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.2rem;
  color: ${(props) => props.theme.text};
  margin-right: 2.5rem;

  background-color: ${(props) => props.theme.element};

  outline: none;
  border: none;
  width: 100%;

  &::placeholder {
    font-family: "Nunito Sans", sans-serif;
    font-size: 1.2rem;
    color: ${(props) => props.theme.text};
  }
`;
