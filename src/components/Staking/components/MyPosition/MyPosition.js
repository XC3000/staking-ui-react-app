import React from "react";

import {
  IdoDetails,
  IdoHeading,
  IdoIcon,
  LockIcon,
  StakeButton,
  StakedDetails,
  StakeInputWrapper,
  Tag,
  UnstakeDetails,
} from "./MyPosition.styles";

import Asva from "./assets/asva.png";
import Lock from "./assets/lock.png";
const MyPosition = () => {
  return (
    <>
      <IdoDetails>
        <IdoIcon src={Asva} alt="asva" />
        <IdoHeading>ASVA IDO</IdoHeading>
        <Tag type="interest">Interest 10.5% APY</Tag>
        <Tag type="time">
          <LockIcon src={Lock} alt="lock" />
          07 Days
        </Tag>
      </IdoDetails>
      <StakedDetails>
        <h1>My Staked Amount</h1>
        <p>$54,098,909</p>
      </StakedDetails>

      <UnstakeDetails>
        <h1>Available for unstake</h1>
        <p>$54,098,909</p>
      </UnstakeDetails>

      <StakeInputWrapper>
        <p>0.0</p>
        <p>Max</p>
      </StakeInputWrapper>

      <StakeButton>UNSTAKE ASVA</StakeButton>
    </>
  );
};

export default MyPosition;
