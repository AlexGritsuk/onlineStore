import React from "react";
import Loading from "../../components/common/loading/loading";
import ProductPage from "./productPage";
import { getIphoneById } from "../../store/iphones";
import { useSelector } from "react-redux";
import { getAirPodsById } from "../../store/airPods";
import { getMacBooksById } from "../../store/macBooks";

const ProductListPage = ({ productId }) => {  
   
 
  const iphones = useSelector(getIphoneById(productId));
  const airPods = useSelector(getAirPodsById(productId));
  const macBooks = useSelector(getMacBooksById(productId));  

  if (iphones) {
    return <ProductPage product={iphones} push={"Iphones"} />;
  } else if (airPods) {
    return <ProductPage product={airPods} push={"Airpods"} />;
  } else if (macBooks) {
    return <ProductPage product={macBooks} push={"MacBooks"} />;
  }
  return <Loading />;
};

export default ProductListPage;
