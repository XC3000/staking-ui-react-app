import React, { useRef } from "react";

import { animated, useSpring } from "react-spring";
import {
  Background,
  ClaimButton,
  CloseModalButton,
  IdoDetails,
  IdoHeading,
  IdoIcon,
  ModalHeader,
  ModalWrapper,
  OtherDetails,
  StakeButton,
  StakedDetails,
  StakedDetailsWrapper,
  StakeInputWrapper,
  Tab,
  Tabs,
  Tag,
} from "./StakingPopup.style";

import Asva from "./assets/asva.png";

const StakingPopup = ({ showStakingPopup, setShowStakingPopup }) => {
  const modalRef = useRef();

  // const animation = useSpring({
  //   config: {
  //     duration: 250,
  //   },
  //   opacity: showStakingPopup ? 1 : 0,
  //   transform: showStakingPopup ? `translateY(0%)` : `translateY(-100%)`,
  // });

  return showStakingPopup ? (
    <Background>
      <ModalWrapper>
        <ModalHeader>
          <CloseModalButton
            aria-label="Close Modal"
            onClick={() => setShowStakingPopup(false)}
          />
        </ModalHeader>
        <IdoDetails>
          <IdoIcon src={Asva} alt="asva" />
          <IdoHeading>ASVA IDO</IdoHeading>
          <Tag type="interest">10.5% APY | 30 Days </Tag>
        </IdoDetails>

        <StakedDetailsWrapper>
          <StakedDetails flex>
            <div>
              <h1>12.0029 ASVA</h1>
              <p>My Staked</p>
            </div>
          </StakedDetails>

          <StakedDetails flex>
            <div>
              <h1>45.0909 ASVA</h1>
              <p>Earned Reward</p>
            </div>
            <ClaimButton>Claim</ClaimButton>
          </StakedDetails>
        </StakedDetailsWrapper>

        <Tabs>
          <Tab active>Stake</Tab>
          <Tab>Withdraw</Tab>
        </Tabs>

        <OtherDetails>
          <h1>Available Wallet Balance</h1>
          <p>11233.56 ASVA ($34500.00)</p>
        </OtherDetails>

        <StakeInputWrapper>
          <p>0.0</p>
          <p>Max</p>
        </StakeInputWrapper>
        <StakeButton>STAKE ASVA</StakeButton>
      </ModalWrapper>
    </Background>
  ) : null;
};

export default StakingPopup;
