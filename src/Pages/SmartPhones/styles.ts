import styled from "styled-components";

export const SmartPhonesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CreateButtonLink = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-end;
  & a {
    text-decoration: none;
    color: #ffffff;
    background-color: #333333;
    padding: 10px;
    margin: 0 25px 10px 0;
  }
`;

export const Heading = styled.h2`
  padding: 10px 10px 0px 25px;
  color: ${({ theme }) => theme.menuColor};
`;
