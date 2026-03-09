import React from "react";
import Carousel from "./_components/Carousel";
import Category from "./_components/Category";
import Card from "./_components/Card";
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
