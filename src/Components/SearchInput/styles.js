import styled from "styled-components";
import * as colors from "../../styles/variables";

export const SearchInputBox = styled.div`
  display: flex;
  align-items: center;

  border: none;
  border-radius: 0.5rem;
  width: 100%;
  height: 4rem;
  background-color: ${colors.white};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);
`;
export const SearchIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${colors.darkGray};

  width: 1.8rem;
  height: 1.8rem;

  padding: 0 2.5rem;
`;

export const SearchInput = styled.input`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.2rem;
  /* color: ${colors.darkGray} */
  margin-right: 2.5rem;

  outline: none;
  border: none;
  width: 100%;
`;
