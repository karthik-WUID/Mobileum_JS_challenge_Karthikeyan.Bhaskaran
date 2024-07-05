import styled from "styled-components";

export const DashboardTileContainer = styled.div`
  display: flex;
  width: 20%;
  margin: 10px 10px;
  background-color: #eaeaea;
  padding: 10px;
  position: relative;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DashboardTileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 27px;
  margin: 0px 0px;
`;

export const ImageContainer = styled.div`
  display: flex;
  & img {
    border: 1px solid #cccccc;
    border-radius: 50%;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
`;

export const NameContent = styled.div`
  font-weight: bold;
  padding: 0 15px 0 10px;
  font-size: 11pt;
`;

export const BrandDetails = styled.div`
  font-size: 9pt;
  padding: 5px 0 0 10px;
`;

export const CloseButton = styled.span`
  background-color: #ffffff;
  line-height: 0;
  position: absolute;
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  padding: 10px 0 0 8px;
  font-weight: bold;
  -webkit-box-shadow: -1px 3px 17px -7px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: -1px 3px 17px -7px rgba(0, 0, 0, 0.75);
  box-shadow: -1px 3px 17px -7px rgba(0, 0, 0, 0.75);
  border: 1px solid #cccccc;
  cursor: pointer;
  &:hover {
    background-color: #333333;
    color: #ffffff;
  }
`;

export const DashboardListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px;
  padding: 10px;
  position: relative;
  flex: 1;
  width: 95%;
  margin: 0 auto;
  border: 1px solid #cccccc;
`;

export const DashboardListContainer = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #cccccc;
  padding: 15px;
  box-sizing: border-box;
`;

export const ListNameContent = styled.div`
  padding: 0 15px 0 25px;
  font-size: 11pt;
  flex: 1;
  font-weight: bold;
  color: ${({ theme }) => theme.menuColor};
`;

export const ListBrandDetails = styled.div`
  font-size: 9pt;
  padding: 5px 0 0 10px;
  flex: 1;
  color: ${({ theme }) => theme.menuColor};
`;

export const ListDescriptions = styled.div`
  font-size: 9pt;
  padding: 5px 0 0 10px;
  flex: 4;
  color: ${({ theme }) => theme.menuColor};
`;

export const ListImageContainer = styled.div`
  display: flex;
  width: 80px;
  & img {
    border: 1px solid #cccccc;
    border-radius: 50%;
  }
`;
