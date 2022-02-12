import React from "react";
import { useState, useEffect } from "react";

import FilterComponent from "./components/filter/FilterComponent";
import ProductSection from "./components/products/ProductSection";

function App() {
  const Products = [{ name: "", elem: [] }];
  const States = [];
  const Cities = [];
  const StatesAndCities = [{ state: "", cities: [] }];

  const [isLoading, setIsLoading] = useState(true);
  const [loadedDataProducts, setLoadedDataProducts] = useState([
    { name: "", elem: [] },
  ]);
  const [loadedDataStates, setLoadedDataStates] = useState([]);
  const [loadedDataCities, setLoadedDataCities] = useState([]);
  const [loadedDataStatesAndCities, setLoadedDataStatesAndCities] = useState([
    { state: "", cities: [] },
  ]);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://assessment-edvora.herokuapp.com/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        Products.shift();
        StatesAndCities.shift();

        for (const key in data) {
          const Product = {
            ...data[key],
          };

          // ---------------- insert into Products array ----------------
          let ind = Products.findIndex(
            (prod) => prod.name === Product.product_name
          );
          if (ind === -1) {
            Products.push({ name: Product.product_name, elem: [] });
            ind = Products.length - 1;
          }
          Products[ind].elem.push(Product);

          // ---------------- insert into States array ----------------
          let ind2 = States.findIndex(
            (state) => state === Product.address.state
          );
          if (ind2 === -1) {
            States.push(Product.address.state);
            StatesAndCities.push({ state: Product.address.state, cities: [] });
            ind2 = States.length - 1;
          }
          let i = StatesAndCities[ind2].cities.findIndex(
            (elem) => elem === Product.address.city
          );
          if (i === -1) {
            StatesAndCities[ind2].cities.push(Product.address.city);
          }

          // ---------------- insert into Cities array ----------------
          let ind3 = Cities.findIndex((city) => city === Product.address.city);
          if (ind3 === -1) {
            Cities.push(Product.address.city);
          }
        }

        setIsLoading(false);
        setLoadedDataProducts(Products);
        setLoadedDataStates(States);
        setLoadedDataCities(Cities);
        setLoadedDataStatesAndCities(StatesAndCities);
        // console.log(data);
        // console.log(Products);
        // console.log(States);
        // console.log(Cities);
        // console.log(StatesAndCities);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <React.Fragment>
      <FilterComponent
        products={loadedDataProducts}
        states={loadedDataStates}
        cities={loadedDataCities}
        statesAndCities={loadedDataStatesAndCities}
      />
      <div>
        <p className="edvora">Edvora</p>
        <p className="products">Products</p>
      </div>
      <table className="table_styling">
        <tbody>
          {loadedDataProducts.map(({ name, elem }, index) => (
            <tr key={index}>
              <td>
                <ProductSection prodName={name} productA={elem} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default App;
