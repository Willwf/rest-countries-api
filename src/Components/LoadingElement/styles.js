import styled from "styled-components";

export const LoadingElement = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // background-color: ${(props) => props.theme.body};
`;
export const LoadingText = styled.p`
  font-family: "Nunito Sans", sans-serif;
  font-size: 2rem;
  font-weight: bold;

  margin-top: 30vh;

  // color: ${(props) => props.theme.text};
`;
