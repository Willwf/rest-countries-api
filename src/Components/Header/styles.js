import styled from "styled-components";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 2.5rem 1.5rem;

  box-shadow: 0px 2px 5px 0px rgb(0 0 0 / 10%);

  background-color: ${(props) => props.theme.element};

  .homeTitle {
    color: black;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    padding: 2.5rem 6rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem 7rem;
  }
`;
export const Title = styled.h1`
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.4rem;
  color: ${(props) => props.theme.text};

  @media (min-width: 1024px) {
    font-size: 2rem;
  }
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

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.text};

    svg {
      width: 1.7rem;
      margin-right: 0.8rem;
    }
  }
`;
