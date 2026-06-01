import React from "react";
import Carousel from "./_components/Carousel";
import Category from "./_components/Category";
import FeaturedProduct from "./_components/featured-product";

const page = () => {
  return (
    <div>
      <Carousel />
      <Category />
      <FeaturedProduct />
    </div>
  );
};

export default page;
