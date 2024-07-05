import styled from "styled-components";

export const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h2`
  padding: 10px 10px 10px 25px;
  color: ${({ theme }) => theme.menuColor};
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  & input {
    width: 20%;
    padding: 10px;
    background-color: #eaeaea;
    border:1px solid #eaeaea;
    margin-left: 35px;
  }
`;
