import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import ProductListPage from "../page/productListPage/productListPage";
import MacBooksPage from "../page/macBookPage/macBookPage";

const MacBooks = ({ history }) => {
  const params = useParams();
  const { macBookId } = params;
  return (
    <div>
      {macBookId ? <ProductListPage productId={macBookId} /> : <MacBooksPage />}
    </div>
  );
};

export default MacBooks;
