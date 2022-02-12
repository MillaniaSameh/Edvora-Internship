import classes from "./FilterCard.module.css";

function FilterCard(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default FilterCard;
