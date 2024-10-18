import React from "react";
import Hero from "../components/Hero/Hero";
import Popular from "../components/Popular/Popular";
import Offer from "../components/offer/Offer";
import Collections from "../components/Collections/Collections";
import Subscription from "../components/EmailSubscription/Subscription";

const Shop = () => {
  return (
    <div className="">
      <Hero />
      <Popular />
      <Offer />
      <Collections />
      <Subscription />
    </div>
  );
};

export default Shop;
