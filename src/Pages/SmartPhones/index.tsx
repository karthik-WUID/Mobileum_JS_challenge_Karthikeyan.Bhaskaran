import React, { useContext, useEffect } from "react";
import {
  GlobalContext,
  GlobalContextType,
} from "../../Providers/global-provider";
import { API } from "../../Providers/api";
import { Link } from "react-router-dom";
import Tile from "../../Components/Tile";

import { SmartPhonesContainer, CreateButtonLink, Heading } from "./styles";
import { smartPhoneTypes } from "../../Utilities/constants";

const SmartPhones: React.FC = () => {
  const { smartPhoneData, setSmartPhoneData } = useContext(
    GlobalContext
  ) as GlobalContextType;

  useEffect(() => {
    if (!smartPhoneData || smartPhoneData.length < 1) {
      API.getAll()
        .then((response: smartPhoneTypes[]) => {
          setSmartPhoneData(response);
        })
        .catch((error) => {
          console.log("error in SmartPhones.tsx - - - - - ", error);
        });
    }
  }, []);

  return (
    <SmartPhonesContainer>
      <Heading>SmartPhones</Heading>
      <CreateButtonLink>
        <Link to={`/create-smartphone`}>Create SmartPhone</Link>
      </CreateButtonLink>
      <Tile tileData={smartPhoneData} isTile={false} />
    </SmartPhonesContainer>
  );
};

export default SmartPhones;
