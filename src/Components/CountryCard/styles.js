import styled from "styled-components";
import * as colors from "../../styles/variables";

export const CountryCard = styled.div`
  width: 70vw;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);

  background-color: ${(props) => props.theme.element};
`;

export const FlagImg = styled.img`
  width: 100%;
  border-radius: 0.5rem 0.5rem 0 0;
`;

export const Info = styled.div`
  margin: 10% 10% 15% 10%;
`;

export const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.7rem;

  color: ${(props) => props.theme.text};

  margin-bottom: 1rem;
`;

export const InfoData = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};

  margin-bottom: 0.5rem;

  span {
    font-weight: bold;
  }
`;
