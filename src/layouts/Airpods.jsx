import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import AirPodsPage from "../page/airPodsPage/airPodsPage";
import ProductListPage from "../page/productListPage/productListPage";

const Airpods = ({ history }) => {
  const params = useParams();
  const { airPodsId } = params;
  return (
    <div>
      {airPodsId ? <ProductListPage productId={airPodsId}/> : <AirPodsPage />}
    </div>
  );
};

export default Airpods;
