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
`;
