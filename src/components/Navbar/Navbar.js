import React, { useEffect } from "react";
import {
  ConnectWalletButton,
  ConnectWalletButtonText,
  NavbarContainer,
  NavbarContainerWrapper,
  NavbarItems,
  NavbarLogo,
  NavbarShape,
  NavItem,
  NavList,
  NetworkButton,
  NetworkImg,
  NetworkText,
} from "./Navbar.style";

import Polygon from "./assets/polygon.png";
import Logo from "./assets/logo.png";
import Design from "./assets/shape.png";
import { web3Class } from "../../Web3/web3Class";
import { fetchAccountDetails } from "../../Web3/web3";

const Navbar = () => {
  const getDetails = async () => {
    let web3Instance = new web3Class();
    let account = await web3Instance.fetchAccountDetails();
    console.log(account);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <NavbarContainerWrapper>
      <NavbarContainer>
        <NavbarLogo src={Logo} alt="MetaMask" />
        <NavbarItems>
          <NavList>
            <NavItem>Stake</NavItem>
            <NavItem active>Pools</NavItem>
            <NavItem>Giant</NavItem>
            <NavItem>Support</NavItem>
          </NavList>
          <NetworkButton>
            <NetworkImg src={Polygon} alt="Polygon" />
            <NetworkText>Polygon</NetworkText>
          </NetworkButton>

          <ConnectWalletButton>
            <ConnectWalletButtonText>0x34...3245</ConnectWalletButtonText>
          </ConnectWalletButton>
        </NavbarItems>
      </NavbarContainer>
      <NavbarShape src={Design} alt="Shape" />
    </NavbarContainerWrapper>
  );
};

export default Navbar;
