import React from "react";

import Logo from "./assets/logo.png";
import { FooterContainer, FooterImg, FooterText } from "./Footer.style";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterImg src={Logo} alt="Logo" />
      <FooterText>Multi-chain metaverse launchpad</FooterText>
    </FooterContainer>
  );
};

export default Footer;
