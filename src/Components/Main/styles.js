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

  @media (min-width: 1024px) {
    padding: 2.5rem 0 0 0;
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

  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;

    width: 90vw;
  }
`;

export const CountriesDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 6vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: flex-start;

    flex-wrap: wrap;

    width: 100%;
    min-height: 80vh;
  }
`;

export const NotFoundElement = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 7rem;
  color: ${(props) => props.theme.text};
`;
