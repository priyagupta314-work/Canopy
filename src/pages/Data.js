import React from "react";
import faker from "faker";
export const featuredCategories = [
  {
    categoryImage: require("../images/severin-candrian-IQqGwks_QPM-unsplash.jpg"),
    name: "AIR-PURIFYING"
  },
  {
    categoryImage: require("../images/severin-candrian-5PFskYdiYFo-unsplash.jpg"),
    name: "HANGING"
  },
  {
    categoryImage: require("../images/tomoko-uji-CT3tMN9CUZI-unsplash.jpg"),
    name: "FLOWERING"
  },
  {
    categoryImage: require("../images/severin-candrian-E1TcypjMSPE-unsplash.jpg"),
    name: "EASY-TO-CARE"
  }
];
export const categories = [
  "AIR-PURIFYING",
  "FLOWERING",
  "HANGING",
  "EASY-TO-CARE"
];

//use faker to get random products until back-end is ready
export const data = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  category: categories[Math.floor(Math.random() * categories.length)]
}));
faker.seed(123);
