import React from "react";
import Item from "./Item";
import classes from "./ProductsCarsouel.module.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function ProductsCarsouel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 4,
    },
  };

  return (
    <div className={classes.background}>
      <div className={classes.carsouel}>
        <Carousel responsive={responsive}>
          {props.productA.map((product, index) => (
            <Item
              key={index}
              image={product.image}
              prodName={product.product_name}
              brandName={product.brand_name}
              price={product.price}
              state={product.address.state}
              city={product.address.city}
              date={product.date}
              discription={product.discription}
            />
          ))}
        </Carousel>
        ;
      </div>
    </div>
  );
}

export default ProductsCarsouel;
