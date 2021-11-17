import { useState } from "react";
import { ethers } from "ethers";

export const LogoSrc = (tokenAddress) => {
  const checksumAdd = ethers.utils.getAddress(tokenAddress);
  const logoLink =
    "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/smartchain/assets/" +
    checksumAdd +
    "/logo.png";

  const defaultLink =
    "https://us.123rf.com/450wm/arhimicrostok/arhimicrostok1709/arhimicrostok170901712/86906050-flag-icon-location-marker-symbol-flat-design-style-.jpg?ver=6";

  if (logoLink.statusCode === "404") {
    return defaultLink;
  } else {
    return logoLink;
  }
};
