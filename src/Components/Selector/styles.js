import styled from "styled-components";
import * as colors from "../../styles/variables";

export const SelectorElement = styled.div`
  align-self: flex-start;
  position: relative;
`;

export const Selector = styled.div`
  div {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  display: flex;
  align-items: center;
  align-self: flex-start;
  margin: 3rem 0 0 1.5rem;
  cursor: pointer;

  border: none;
  border-radius: 0.5rem;
  width: 36vw;
  height: 4rem;
  padding: 0 1.5rem;
  background-color: ${colors.white};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);

  svg {
    width: 1rem;
  }
`;

export const Title = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
`;

export const OptionMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin-left: 1.5rem;
  gap: 0.5rem;

  position: absolute;
  margin-top: 0.5rem;

  border: none;
  border-radius: 0.5rem;
  width: 36vw;
  padding: 1rem 1.5rem;
  background-color: ${colors.white};

  box-shadow: 0px 0px 5px 0px rgb(0 0 0 / 10%);
`;

export const Option = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
