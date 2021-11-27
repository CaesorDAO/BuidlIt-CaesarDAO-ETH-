import React from "react";
import Icon1 from "../../images/rich.png";
import Icon2 from "../../images/money.png";
import Icon3 from "../../images/meetup.png";
import Icon4 from "../../images/dao.png";
import Icon5 from "../../images/usage.png";
import Icon6 from "../../images/access.png";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

import styled from "styled-components";

const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 4rem);
  color: white;
  letter-spacing: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media screen and (max-width: 500px) {
    max-width: 400px;
  }
`;

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <HeroH1>Kraznik Underverse Membership Perks</HeroH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Community Fund</ServicesH2>
            <ServicesP>
              {" "}
              As a proud Ape holder, you play a critical role in shaping our
              community fund. To catalyze the initial funding, 70% of the
              initial sale proceeds will be allocated directly into the
              community-managed fund.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Work-to-Earn Model</ServicesH2>
            <ServicesP>
              {" "}
              A key benefit to owning an Ape is the opportunity to work part or
              full-time in the crypto and NFT ecosystem. The dedicated research
              team will source projects and opportunities, which will be shared
              with every Ape holder.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Physical Meetups</ServicesH2>
            <ServicesP>
              {" "}
              Ape holders will be granted access to a bi-annual physical meetup
              featuring airdrops, prizes, rewards, and of course, community
              bonding. The first meeting is slated to take place in Bali!
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon6} />
            <ServicesH2>Access to the Kraznik DAO</ServicesH2>
            <ServicesP>
              {" "}
              All Ape owners are members of the Kraznik DAO, which features the
              research team, passive earning opportunities, a community-managed
              fund, and plenty more.{" "}
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon4} />
            <ServicesH2>Ape's Private Newsletter</ServicesH2>
            <ServicesP>
              {" "}
              The research team’s primary objective is to source information for
              new investment opportunities. The team will then assemble private
              weekly newsletters, which will be distributed to all holders.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon5} />
            <ServicesH2>Usage Rights Included</ServicesH2>
            <ServicesP>
              {" "}
              When you purchase an Ape, you are the proud owner of the
              commercial usage right to that Ape. If your Ape art is featured in
              a merch drop, you will retain a royalty on every sale made.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
