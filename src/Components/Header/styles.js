import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 1.5rem;

  box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 10%);
`;
export const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.4rem;
`;
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: "Nunito Sans", sans-serif;
  font-size: 1.4rem;
  font-weight: 600;

  border: none;
  background-color: transparent;

  cursor: pointer;

  span svg {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 1.7rem;
    margin-right: 1rem;
  }
`;
