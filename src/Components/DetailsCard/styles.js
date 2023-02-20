import styled from "styled-components";
import * as colors from "../../styles/variables";

export const DetailsCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6vh;
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

  background-color: ${colors.white};

  span svg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.3rem;
    margin-right: 0.8rem;
  }
`;
export const FlagImg = styled.img`
  width: 85%;
`;
export const CountryInfoCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 3vh;

  width: 85%;
`;
export const CountryName = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 2.2rem;
`;
export const Info = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.3rem;
  color: ${colors.veryDarkBlueText};

  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;
export const BorderCountriesTitle = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: bold;
`;
export const BorderCountriesCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;

  margin: 2vh 0 5vh 0;
  gap: 2vh;
`;
export const BorderCountriesButton = styled.button`
  flex: 0 0 30%;

  min-height: 4vh;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 40%);
  border: none;

  background-color: ${colors.white};
`;
