import React from "react";
import IphonesPage from "../page/iphonesPage/iphonesPage";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductListPage from "../page/productListPage/productListPage";

const Iphones = () => {
  const params = useParams();
  const { iphoneId } = params;
  return (
    <div>
      {iphoneId ? (
        <ProductListPage productId={iphoneId} />
      ) : (
        <IphonesPage />
      )}
    </div>
  );
};

export default Iphones;
