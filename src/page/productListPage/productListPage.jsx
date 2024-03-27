import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import API from "../../api";
import Loading from "../../components/common/loading/loading";
import ProductPage from "./productPage";

const ProductListPage = ({ productId }) => {
  const [productIphones, setProduct] = useState();
  const [productAirPods, setProduct2] = useState();
  const [productMacBooks, setProduct3] = useState();
  useEffect(() => {
    API.iphones.getById(productId).then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    API.airPods.getById(productId).then((data) => setProduct2(data));
  }, []);

  useEffect(() => {
    API.macBooks.getById(productId).then((data) => setProduct3(data));
  }, []);

  if (productIphones) {
    return <ProductPage product={productIphones} push={"Iphones"} />;
  } else if (productAirPods) {
    return <ProductPage product={productAirPods} push={"Airpods"} />;
  } else if (productMacBooks) {
    return <ProductPage product={productMacBooks} push={"MacBooks"} />;
  }
  return <Loading />;
};

export default ProductListPage;
