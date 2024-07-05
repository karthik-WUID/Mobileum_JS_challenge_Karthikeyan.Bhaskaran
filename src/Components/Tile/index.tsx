import React, { useContext } from "react";

import {
  DashboardTileContainer,
  ImageContainer,
  ContentContainer,
  DashboardTileWrapper,
  NameContent,
  BrandDetails,
  CloseButton,
  DashboardListWrapper,
  DashboardListContainer,
  ListNameContent,
  ListBrandDetails,
  ListDescriptions,
  ListImageContainer,
} from "./styles";

import {
  GlobalContext,
  GlobalContextType,
} from "../../Providers/global-provider";
import { API, Smartphone } from "../../Providers/api";
import { smartPhoneTypes } from "../../Utilities/constants";

interface TileProps {
  tileData: smartPhoneTypes[];
  isTile: boolean;
  setFilteredSmartPhone?: React.Dispatch<React.SetStateAction<smartPhoneTypes[]>>;
}

const Tile: React.FC<TileProps> = ({ tileData, isTile, setFilteredSmartPhone }) => {
  const { setSmartPhoneData } = useContext(GlobalContext) as GlobalContextType;

  const RemoveSmartPhone = (smartPhone: smartPhoneTypes) => {
    API.remove(smartPhone.id)
      .then((response: Smartphone[]) => {
        setSmartPhoneData(response);
        setFilteredSmartPhone && setFilteredSmartPhone(response)
      })
      .catch((error) => {
        console.log("error - - - - - ", error);
      });
  };

  return (
    <>
      {isTile ? (
        <DashboardTileWrapper>
          {tileData &&
            tileData.map((smartPhone: smartPhoneTypes) => {
              return (
                <DashboardTileContainer key={ smartPhone.name }>
                  <CloseButton onClick={() => RemoveSmartPhone(smartPhone)}>
                    x
                  </CloseButton>
                  <ImageContainer>
                    <img src={`${smartPhone.image}`} width={80} height={80} />
                  </ImageContainer>
                  <ContentContainer>
                    <NameContent>{smartPhone.name}</NameContent>
                    <BrandDetails>{smartPhone.brand}</BrandDetails>
                  </ContentContainer>
                </DashboardTileContainer>
              );
            })}
        </DashboardTileWrapper>
      ) : (
        <DashboardListWrapper>
          <DashboardListContainer >
            <ListImageContainer>&nbsp;</ListImageContainer>
            <ListNameContent>Name</ListNameContent>
            <ListBrandDetails>Brand</ListBrandDetails>
            <ListDescriptions>Description</ListDescriptions>
          </DashboardListContainer>
          {tileData &&
            tileData.map((smartPhone: smartPhoneTypes) => {
              return (
                <DashboardListContainer key={ smartPhone.name }>
                  <ImageContainer>
                    <img src={`${smartPhone.image}`} width={80} height={80} />
                  </ImageContainer>
                  <ListNameContent>{smartPhone.name}</ListNameContent>
                  <ListBrandDetails>{smartPhone.brand}</ListBrandDetails>
                  <ListDescriptions>{smartPhone.description}</ListDescriptions>
                </DashboardListContainer>
              );
            })}
        </DashboardListWrapper>
      )}
    </>
  );
};

export default Tile;
