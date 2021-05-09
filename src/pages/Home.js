import React from "react";
import { Link } from "react-router-dom";
import { featuredCategories } from "./Data";
import { data } from "./Data";
export default function Home({}) {
  return (
    <div>
      <div class="hero">
        <img
          src={require("../images/shahadat-rahman-VoGzDzqjcW0-unsplash.jpg")}
          class="hero-img"
          alt="plant"
        />
        <Link to="ProductListing">
          <button class="hero-btn button-primary">
            {" "}
            SHOP NOW <i class="fas fa-arrow-right"></i>{" "}
          </button>
        </Link>
      </div>
      <div>
        <h1 className="fc-heading"> FEATURED CATEGORIES </h1>
      </div>

      <div>
        <div className="home-cards">
          {featuredCategories.map((featuredCategory) => {
            return (
              <div className="card-design home-card">
                <Link to="ProductListing">
                  <img
                    src={featuredCategory.categoryImage}
                    width="250px"
                    alt="category"
                  />
                  <div> {featuredCategory.name} </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
