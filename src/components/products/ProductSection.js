import ProductsCarsouel from "./ProductsCarsouel";
import classes from "./ProductSection.module.css";

function ProductSection(props) {
  return (
    <div className={classes.container}>
      <p className={classes.product_head}>{props.prodName}</p>
      <div className={classes.line_break} />
      <ProductsCarsouel productA={props.productA} />
    </div>
  );
}

export default ProductSection;
