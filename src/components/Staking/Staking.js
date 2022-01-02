import React, { useState } from "react";

import {
  ClaimButton,
  Heading,
  OverviewContent,
  OverviewHeading,
  OverviewItem,
  OverviewList,
  OverviewText,
  Right,
  StakingContainerWrapper,
  StakingContent,
  StakingHeader,
  StakingTab,
} from "./Staking.styles";

import MyPosition from "./components/MyPosition/MyPosition";
import StakingScreen from "./components/StakingScreen/StakingScreen";
import StakingPopup from "../Modal/StakingPopup/StakingPopup";

const Staking = () => {
  const [currentTab, setCurrentTab] = useState("My Position");
  const [showStakingPopup, setShowStakingPopup] = useState(false);

  const openStakingPopup = () => setShowStakingPopup(true);

  return (
    <>
      <StakingPopup
        showStakingPopup={showStakingPopup}
        setShowStakingPopup={setShowStakingPopup}
      />
      <StakingContainerWrapper>
        <div>
          <Heading>Overview</Heading>

          <OverviewList>
            <OverviewItem>
              <OverviewHeading>$54,098,909</OverviewHeading>
              <OverviewText>Total Value Locked</OverviewText>
            </OverviewItem>

            <OverviewItem>
              <OverviewHeading>$54,098,909</OverviewHeading>
              <OverviewText>Total Value Locked</OverviewText>
            </OverviewItem>

            <OverviewItem>
              <OverviewContent>
                <div>
                  <OverviewHeading>$54,098,909</OverviewHeading>
                  <OverviewText>Total Value Locked</OverviewText>
                </div>
                <ClaimButton>Claim</ClaimButton>
              </OverviewContent>
            </OverviewItem>
          </OverviewList>
        </div>

        <Right>
          <StakingHeader>
            <StakingTab
              onClick={() => {
                setCurrentTab("Staking");
              }}
              active={currentTab === "Staking"}
            >
              <p>Staking</p>
            </StakingTab>
            <StakingTab
              onClick={() => {
                setCurrentTab("My Position");
              }}
              active={currentTab === "My Position"}
            >
              <p>My Position</p>
            </StakingTab>
          </StakingHeader>
          <StakingContent>
            {currentTab === "My Position" && <MyPosition />}
            {currentTab === "Staking" && <StakingScreen />}
          </StakingContent>
        </Right>
      </StakingContainerWrapper>
    </>
  );
};

export default Staking;
