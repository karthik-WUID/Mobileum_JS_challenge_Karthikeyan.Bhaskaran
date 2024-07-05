import React, { useEffect, useContext, useState } from "react";
import { API } from "../../Providers/api";
import { DashboardContainer, Heading, SearchContainer } from "./styles";
import {
  GlobalContext,
  GlobalContextType,
} from "../../Providers/global-provider";
import Tile from "../../Components/Tile";

const Dashboard: React.FC = () => {
  const { smartPhoneData, setSmartPhoneData } = useContext(
    GlobalContext
  ) as GlobalContextType;
  const [filteredSmartPhone, setFilteredSmartPhone] = useState(smartPhoneData);

  useEffect(() => {
    if (!smartPhoneData || smartPhoneData.length < 1) {
      API.getAll()
        .then((response: any) => {
          setSmartPhoneData(response);
          setFilteredSmartPhone(response);
        })
        .catch((error) => {
          console.log("error - - - - - ", error);
        });
    }
  }, []);

  const HandleOnChange = (event: any) => {
    if (event.target.value) {
      setFilteredSmartPhone(
        smartPhoneData.filter(
          (smartphone) =>
            smartphone.name
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) ||
            smartphone.brand
              .toLowerCase()
              .includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setFilteredSmartPhone(smartPhoneData);
    }
  };

  return (
    <DashboardContainer>
      <Heading>Dashboard</Heading>
      <SearchContainer><input type="text" placeholder="Seach by Name or Brand..." onChange={HandleOnChange} /></SearchContainer>
      <Tile tileData={filteredSmartPhone} isTile={true} />
    </DashboardContainer>
  );
};

export default Dashboard;
