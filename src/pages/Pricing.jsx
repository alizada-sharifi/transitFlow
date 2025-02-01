import React from "react";
import Banner from "../components/Banner";
import PriceContainer from "../components/pricing/PriceContainer";
import TestmonialContainer from "../components/testmonial/TestmonialContainer";

function Pricing() {
  return (
    <>
      <Banner
        title={"Pricing"}
        className={"bg-ProjectDetailBanner mb-10"}
        info={"Our Best Price"}
      />
      {/* =========== pricing section ========== */}
      <PriceContainer />
      <div className="bg-secondary-100 mt-10">
        <TestmonialContainer />
      </div>
    </>
  );
}

export default Pricing;
