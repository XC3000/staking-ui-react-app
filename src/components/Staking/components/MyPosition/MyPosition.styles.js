import styled from "styled-components";

export const StakingContainerWrapper = styled.div`
  padding: 26px;
  max-width: 1178px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  // align-items: center;
  gap: 24px;
  background: rgba(0, 0, 0, 0.1);
`;

export const Heading = styled.h1`
  font-size: 32px;
  line-height: 64px;
  color: rgba(255, 255, 255, 0.93);
`;

export const Left = styled.div``;
export const Right = styled.div`
  height: 100%;
`;
export const OverviewList = styled.ul`
  display: flex;
  align-items: center;

  flex-direction: column;
  gap: 5px;
  list-style: none;
`;

export const OverviewItem = styled.div`
  background: linear-gradient(
    121.51deg,
    rgba(255, 255, 255, 0.0444) 31%,
    rgba(255, 108, 160, 0.12) 106.5%
  );
  backdrop-filter: blur(74px);
  padding: 48px;
  width: 100%;
`;

export const OverviewContent = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const OverviewHeading = styled.h1`
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
`;

export const OverviewText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  color: #ffffff;
  opacity: 0.6;
`;

export const ClaimButton = styled.button`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 14px 31px;
  color: #ffffff;
  background: #53af78;
  cursor: pointer;
`;

export const StakingHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export const StakingTab = styled.div`
  /* opacity: 0.7; */

  /* border-bottom: ${(props) =>
    props.active ? "4px solid #EC4781" : "none"}; */
  cursor: pointer;
  position: relative;

  &:after {
    position: absolute;
    content: "";
    height: 2px;
    width: 60px;
    bottom: -2px;
    border-top: ${(props) => (props.active ? "3px solid #EC4781" : "none")};
  }

  & p {
    font-size: 32px;
    line-height: 64px;
    color: rgba(255, 255, 255, 0.93);
    opacity: ${(props) => (props.active ? 1 : 0.7)};
  }
`;

export const StakingContent = styled.div`
  height: 89%;
  padding: 38px;
  background: linear-gradient(
    121.51deg,
    rgba(255, 255, 255, 0.0444) 31%,
    rgba(255, 108, 160, 0.12) 106.5%
  );
  backdrop-filter: blur(74px);
`;

export const IdoDetails = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  /* background: linear-gradient(121.51deg, #ff62aa 19%, #747474 0%); 
  backdrop-filter: blur(74px); */
`;

export const IdoIcon = styled.img`
  width: 36px;
  height: 36px;
  display: block;
  margin-right: 16px;
`;

export const LockIcon = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin-right: 6px;
`;

export const IdoHeading = styled.h1`
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  margin-right: 20px;
`;

export const Tag = styled.span`
  padding: 6px 7px;
  /* background: rgba(103, 200, 171, 0.1); */
  border-radius: 34px;
  display: flex;
  align-items: center;
  margin-right: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  background: ${(props) =>
    props.type === "interest" && "rgba(103, 200, 171, 0.1)"};
  color: ${(props) => props.type === "interest" && "#67C8AB"};

  background: ${(props) => props.type === "time" && "#8F94FF"};
  color: ${(props) => props.type === "time" && "#Fff"}; ;
`;

export const StakedDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 34px;

  background: linear-gradient(
    121.51deg,
    rgba(255, 255, 255, 0.0444) 31%,
    rgba(255, 108, 160, 0.12) 106.5%
  );
  backdrop-filter: blur(74px);

  & h1 {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #ffffff;
    opacity: 0.6;
  }

  & p {
    font-weight: 500;
    font-size: 20px;
    line-height: 32px;
    color: #ffffff;
  }
`;

export const UnstakeDetails = styled.div`
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
