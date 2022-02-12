import { useState } from "react";

import FilterCard from "./FilterCard";
import classes from "./FilterComponent.module.css";

function FilterComponent(props) {
  const [prodState, setProdState] = useState("");
  const [cityState, setCityState] = useState("");

  let Products = props.products;
  let States = [];
  let Cities = [];
  let StatesAndCities = props.statesAndCities;
  statesToBeRendered();
  citiesToBeRendered();

  function statesToBeRendered() {
    let ind = props.products.findIndex((prod) => prod.name === prodState);
    States = [];
    if (ind === -1) {
      States = props.states;
    } else {
      props.products[ind].elem.forEach((elem) => {
        let ind2 = States.findIndex((state) => state === elem.address.state);
        if (ind2 === -1) States.push(elem.address.state);
      });
    }
  }

  function citiesToBeRendered() {
    let ind = StatesAndCities.findIndex((elem) => elem.state === cityState);
    Cities = [];
    if (ind === -1) {
      Cities = props.cities;
    } else {
      StatesAndCities[ind].cities.forEach((elem) => {
        Cities.push(elem);
      });
    }
  }

  function prodEventHandler(event) {
    setProdState(event.target.value);
    statesToBeRendered();
  }

  function cityEventHandler(event) {
    setCityState(event.target.value);
    citiesToBeRendered();
  }

  return (
    <FilterCard>
      <p className={classes.heading}>Filters</p>
      <div className={classes.line_break} />

      <select
        className={classes.products_filter}
        value={prodState}
        onChange={prodEventHandler}
      >
        <option selected>Products</option>
        {Products.map(({ name, elem }, index) => (
          <option key={index} value={name}>
            {name}
          </option>
        ))}
      </select>

      <select
        className={classes.state_filter}
        value={cityState}
        onChange={cityEventHandler}
      >
        <option selected>State</option>
        {States.map((state, index) => (
          <option key={index} value={state}>
            {state}
          </option>
        ))}
      </select>

      <select className={classes.city_filter}>
        <option selected>City</option>
        {Cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </FilterCard>
  );
}

export default FilterComponent;
