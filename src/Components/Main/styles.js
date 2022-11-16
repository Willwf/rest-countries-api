import styled from "styled-components";
import * as colors from "../../styles/variables";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 6vh;

  background-color: ${colors.veryLightGray};
`;

export const CountryCard = styled.div`
  width: 70vw;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);

  background-color: ${colors.white};
`;

export const FlagImg = styled.img`
  width: 100%;
`;

export const Info = styled.div`
  margin: 10% 10% 15% 10%;
`;

export const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.7rem;

  margin-bottom: 1rem;
`;

export const InfoData = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.3rem;
  color: ${colors.veryDarkBlueText};

  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;
