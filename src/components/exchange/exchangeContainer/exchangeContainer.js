import React from "react";
import NavigationBar from "../../layout/NavigationBar/NavigationBar";

const ExchangeContainer = () => {
  return (
    <div>
      <NavigationBar
        title={"Exchange"}
        headers={{
          Overview: "/exchange",
          Inbound: "/exchange/inbound",
          Outbound: "/exchange/outbound"
        }}
      />
    </div>
  );
};

export default ExchangeContainer;
