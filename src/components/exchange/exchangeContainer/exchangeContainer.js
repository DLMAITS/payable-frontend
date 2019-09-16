import React from "react";
import NavigationBar from "../../layout/navigation/NavigationBar/NavigationBar";
import {
  EXCHANGEROUTE,
  EXCHANGEINBOUNDROUTE,
  EXCHANGEOUTBOUNDROUTE
} from "../../../constants/Constants";

const ExchangeContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Exchange"}
        headers={{
          Overview: EXCHANGEROUTE,
          Inbound: EXCHANGEINBOUNDROUTE,
          Outbound: EXCHANGEOUTBOUNDROUTE
        }}
      />
    </div>
  );
};

export default ExchangeContainer;
