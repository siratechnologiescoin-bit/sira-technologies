// src/data/products.js

import cctvProducts from "./cctv";
import ledWallProducts from "./ledWallProducts";
import linuxProducts from "./linuxProducts";
import networkingProducts from "./networking";

export const products = [
  ...cctvProducts,
  ...ledWallProducts,
  ...linuxProducts,
  ...networkingProducts,
];

export default products;