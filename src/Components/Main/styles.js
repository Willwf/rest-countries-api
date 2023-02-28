import styled from "styled-components";
// import * as colors from "../../styles/variables";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;

  gap: 6vh;

  background-color: ${(props) => props.theme.body};

  @media (min-width: 768px) {
    padding: 2.5rem 6rem;
  }
`;

export const SearchElements = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 6vh;

  width: 100%;

  @media (min-width: 768px) {
    width: 70vw;
  }
`;
