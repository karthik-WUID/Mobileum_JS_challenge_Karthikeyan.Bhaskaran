import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.body};
  min-height: 100vh;
  height: 100%;
`;
