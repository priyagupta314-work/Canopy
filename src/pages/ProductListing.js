import { Action } from "history";
import { useReducer } from "react";
import { useCart } from "../contexts/CartContext";
import { data } from "./Data.js";
import { categories } from "./Data.js";
//comment
function ProductListing() {
  const { setItemsInCart } = useCart();
  const [{ sortBy, allProducts, filterBy }, dispatch] = useReducer(
    function reducer(state, action) {
      switch (action.type) {
        case "SORT":
          return {
            ...state,
            sortBy: action.payload
          };

        case "FILTER":
          return {
            ...state,
            allProducts: !state.allProducts
          };

        case "FILTER_BY_CATEGORY":
          return {
            ...state,

            filterBy: (function checkFilterAlreadyPresent() {
              if (state.filterBy.includes(action.payload)) {
                return state.filterBy.filter((cat) => cat !== action.payload);
              } else {
                return [...state.filterBy, action.payload];
              }
            })() //iife
          };
        default:
          return state;
      }
    },
    {
      sortBy: null,
      allProducts: false,
      filterBy: []
    }
  );

  // sort and filter data before rendering
  function getSortedData(productList, sortBy) {
    if (sortBy && sortBy === "PRICE_LOW_TO_HIGH") {
      return productList.sort((a, b) => a["price"] - b["price"]);
    }
    if (sortBy && sortBy === "PRICE_HIGH_TO_LOW") {
      return productList.sort((a, b) => b["price"] - a["price"]);
    }
    return productList;
  }

  function getFilteredData(productList, allProducts, filterBy) {
    console.log("allProducts: ", allProducts);
    console.log("filterBy: ", filterBy);
    if (filterBy.length > 0 && !allProducts) {
      return productList.filter(
        (product) =>
          filterBy.includes(product.category) && product.inStock === true
      );
    }

    if (filterBy.length > 0 && allProducts) {
      return productList.filter((product) =>
        filterBy.includes(product.category)
      );
    }

    if (filterBy.length === 0 && !allProducts) {
      return productList.filter((product) => product.inStock === true);
    }

    return productList;
  }

  const sortedData = getSortedData(data, sortBy);
  const filteredData = getFilteredData(sortedData, allProducts, filterBy);

  return (
    <div class="product-listing-page">
      <div>
        <fieldset>
          <legend> Sort by Price </legend>
          <input
            type="radio"
            name="sort-option"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_LOW_TO_HIGH" })
            }
            // checked={sortBy && sortBy === "PRICE_LOW_TO_HIGH"}
          />
          <label for="low-to-high"> Low to High </label> <br />
          <input
            type="radio"
            name="sort-option"
            onChange={() =>
              dispatch({ type: "SORT", payload: "PRICE_HIGH_TO_LOW" })
            }
            // checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          <label for="high-to-low"> High to Low </label> <br />
          <input
            type="radio"
            name="sort-option"
            onChange={() => dispatch({ type: "SORT", payload: "None" })}
            // checked={sortBy && sortBy === "PRICE_HIGH_TO_LOW"}
          />
          <label for="high-to-low"> None </label>
        </fieldset>
        <fieldset>
          <legend> Filter Options </legend>
          <input
            type="checkbox"
            name="filter-option"
            onChange={() =>
              dispatch({ type: "FILTER", payload: "INCLUDE_OUT_OF_STOCK" })
            }
          />
          <label> Include Out of Stock </label>
        </fieldset>
        <fieldset>
          <legend> Categories </legend>
          {categories.map((category) => {
            return (
              <>
                <input
                  type="checkbox"
                  name="filter-categories"
                  onChange={() =>
                    dispatch({ type: "FILTER_BY_CATEGORY", payload: category })
                  }
                />
                <label> {category} </label> <br />
              </>
            );
          })}
        </fieldset>
      </div>
      <div className="product-listing">
        {filteredData.map((item) => (
          <div key={item.id}>
            <div className="card-with-image">
              <div className="card-design product-list-item">
                <img src={item.image} />
                <div>
                  <div>{item.name}</div>
                </div>
                <div> Rs. {item.price}</div>
                <div> {item.category} </div>

                {item.inStock === false && <div> Out of stock </div>}
                <div className="card-buttons">
                  <button className="button button-secondary">
                    {" "}
                    <i class="far fa-heart"></i>{" "}
                  </button>
                  <button
                    className="button button-secondary"
                    onClick={() => setItemsInCart((items) => [...items, item])}
                  >
                    Add to Cart{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
