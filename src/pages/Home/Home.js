import React from "react";
import { Navbar, Footer } from "../../components";
import Hero from "../../components/Hero/Hero";
import Staking from "../../components/Staking/Staking";
import { HomeContainer } from "./Home.style";

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <Hero />
      <Staking />
      <Footer />
    </HomeContainer>
  );
};

export default Home;
