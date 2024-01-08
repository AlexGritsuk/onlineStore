import React from "react";
import root from "../../style/root__style.module.css";
import { useState } from "react";
import { useEffect } from "react";
import API from "../../api";
import Loading from "../../components/common/loading/loading";

const ProductListPage = ({ productId }) => {
  const [product, setProduct] = useState();
  const [product2, setProduct2] = useState();

  useEffect(() => {
    API.iphones.getById(productId).then((data) => setProduct(data));
  }, []);

  useEffect(() => {
    API.airPods.getById(productId).then((data) => setProduct2(data));
  }, []);

  if (product) {
    return (
      <div className={root.container}>
        <div>{product.name.name}</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  } else if (product2) {
    return (
      <div className={root.container}>
        <div>{product2.name.name}</div>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
  return <Loading />;
};

export default ProductListPage;
