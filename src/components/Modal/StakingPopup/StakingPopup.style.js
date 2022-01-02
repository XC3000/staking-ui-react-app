import styled, { css } from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-items: center;
  z-index: 10;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  /* height: 649px; */
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #24262e;
  color: #000;
  /* display: grid;
  grid-template-columns: 1fr 1fr; */
  position: relative;
  z-index: 15;
  border-radius: 10px;
  margin: 0 auto;
  padding: 24px;
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 30px;
`;

export const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  color: #ffffff;
  /* height: 32px; */
  padding: 0;
  z-index: 10;
  font-size: 20px;
`;

export const IdoDetails = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 38px;
`;

export const IdoIcon = styled.img`
  width: 36px;
  height: 36px;
  display: block;
  margin-right: 16px;
`;

export const IdoHeading = styled.h1`
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  margin-right: 20px;
`;

export const Tag = styled.span`
  padding: 6px 18px;
  /* background: rgba(103, 200, 171, 0.1); */
  border-radius: 34px;
  display: flex;
  align-items: center;
  margin-left: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  background: ${(props) =>
    props.type === "interest" && "rgba(103, 200, 171, 0.1)"};
  color: #67c8ab;

  background: ${(props) => props.type === "time" && "#8F94FF"};
  color: ${(props) => props.type === "time" && "#Fff"}; ;
`;

export const StakedDetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  align-items: center;
  gap: 6px;
  margin-bottom: 25px;
`;

export const StakedDetails = styled.div`
  ${(props) =>
    props.flex &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    `}

  background: linear-gradient(121.51deg, rgba(255, 255, 255, 0.0444) 31%, rgba(255, 108, 160, 0.12) 106.5%);
  backdrop-filter: blur(74px);
  padding: 20px 5px;

  h1 {
    font-weight: 500;
    font-size: 18px;
    line-height: 32px;
    color: #ffffff;
  }

  p {
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const ClaimButton = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 9px 16px;
  color: #ffffff;
  background: #53af78;
  cursor: pointer;
`;

export const Tabs = styled.div`
  background: rgba(0, 0, 0, 0.23);
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 6px;
  margin-bottom: 32px;
`;

export const Tab = styled.div`
  background: rgba(0, 0, 0, 0.23);
  padding: 8px 0;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  opacity: 0.7;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      background: #2f313c;
      box-shadow: 0px 2px 4px rgba(56, 55, 88, 0.1);
      opacity: 1;
    `}
`;

export const OtherDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;

  & h1 {
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.6;
  }

  & p {
    font-size: 12px;
    line-height: 16px;
    color: #ffffff;
    opacity: 0.6;
  }
`;

export const StakeInputWrapper = styled.div`
  padding: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 26px;
  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const StakeButton = styled.button`
  width: 100%;
  padding: 18px 0 14px;
  font-weight: 500;
  font-size: 18px;
  line-height: 32px;
  color: #ffffff;
  text-transform: uppercase;
  background: linear-gradient(118.21deg, #ec4781 22.9%, #921c49 130.15%);
  cursor: pointer;
`;
