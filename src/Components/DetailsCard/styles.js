import styled from "styled-components";
import * as colors from "../../styles/variables";

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6vh;

  background-color: ${(props) => props.theme.body};

  @media (min-width: 1024px) {
    justify-content: flex-start;
    height: 93vh;
  }
`;
export const BackButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-left: 7.5%;
  margin-top: 6vh;

  width: 28vw;
  height: 4vh;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1.3rem;

  align-self: flex-start;

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);
  border: none;

  background-color: ${(props) => props.theme.element};
  color: ${(props) => props.theme.text};

  span svg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.3rem;
    margin-right: 0.8rem;
  }

  &:hover {
    opacity: 80%;
    cursor: pointer;
  }

  &:active {
    opacity: 70%;
  }

  @media (min-width: 1024px) {
    width: 8vw;
    height: 4vh;

    margin-left: 7rem;
    font-size: 1.6rem;

    border-radius: 0.5rem;
  }
`;

export const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6vh;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 100%;
  }
`;

export const FlagImg = styled.img`
  width: 85%;

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);

  @media (min-width: 1024px) {
    width: 35%;
    margin: 0 7rem;
  }
`;
export const CountryInfoCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3vh;

  width: 85%;

  @media (min-width: 1024px) {
    margin: 0 7rem;

    & div:nth-child(4) {
      display: flex;
    }
  }
`;
export const CountryName = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 2.2rem;
  color: ${(props) => props.theme.text};

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;
export const Info = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};

  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }

  @media (min-width: 1024px) {
    font-size: 1.6rem;
  }
`;

export const BorderCountriesTitle = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};

  @media (min-width: 1024px) {
    min-width: 22%;
  }
`;
export const BorderCountriesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  margin: 2vh 0 5vh 0;
  gap: 2vh;

  @media (min-width: 1024px) {
    margin: 0;

    width: 100%;
  }
`;
