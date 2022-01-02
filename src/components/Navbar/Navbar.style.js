import styled from "styled-components";

export const NavbarContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0e0f18;
  padding: 15px;
`;

export const NavbarContainerWrapper = styled.div`
  position: relative;
  color: #fff;
`;

export const NavbarItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-center: center;
  gap: 30px;
  list-style: none;
  margin-right: 30px;
`;

export const NavbarLogo = styled.img`
  width: 232px;
`;

export const NavItem = styled.li``;

export const NetworkButton = styled.button`
  background: linear-gradient(77.66deg, #52398f 10.08%, #4f2aaf 56.17%);
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  width: 147px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-right: 10px;
`;

export const ConnectWalletButton = styled.button`
  border: 1.5px solid #ffffff;
  background: transparent;
  outline: none;
  width: 147px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

export const ConnectWalletButtonText = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: #e8e7eb;
`;

export const NetworkImg = styled.img`
  width: 32px;
  height: 32px;
`;
export const NetworkText = styled.p`
  color: #ffffff;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

export const NavbarShape = styled.img`
  width: 331px;
  height: 21px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
`;
