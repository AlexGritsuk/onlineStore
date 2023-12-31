import React from "react";
import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import GroupList from "../../components/common/groupList/groupList";

const AirPodsPage = () => {
  const {
    cartProducts,
    countCart,
    handleAddCartProducts,
    handleDeleteCartProducts,
    isHave,
  } = useCart();
  return (
    <div className={root.container}>
      <div className={style.iphonePage}>
        <div className={style.iphonePage__groupList}>
          <GroupList />
        </div>
        <div className={style.iphonePage__iphoneGrid}>
          <ProductsGrid
            products={cartProducts}
            onAddCart={handleAddCartProducts}
            onDeleteCart={handleDeleteCartProducts}
            isHave={isHave}
          />
        </div>
      </div>
    </div>
  );
};

export default AirPodsPage;
