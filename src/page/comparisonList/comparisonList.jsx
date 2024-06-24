import React from "react";
import CompareEmpty from "./compareEmpty";
import style from "./comparisonList.module.css";
import ProductCompare from "./productCompare";
import AddCompareProduct from "../../components/common/addCompareProduct/addCompareProduct";
import { useSelector } from "react-redux";
import { getCompare } from "../../store/compare";
import CompareFactory from "./compareFactory";

const ComparisonList = () => {
  const compareProducts = useSelector(getCompare());
  console.log(compareProducts);
  if (compareProducts.length > 0) {
    return (
      <div>
        <div
          className={
            compareProducts.length < 2
              ? style.comparisonList__flex
              : style.comparisonList__noflex
          }
        >
          <div className={style.comparisonList}>
            {compareProducts.map((compareIphone) => (
              <ProductCompare key={compareIphone._id} {...compareIphone} />
            ))}
          </div>
          <div
            className={
              compareProducts.length < 2
                ? style.comparisonList__addCompare
                : style.disactive
            }
          >
            <AddCompareProduct />
          </div>
        </div>
        <div className={style.comparisonList__factory}>
          <h3>Заводские данные</h3>
          <div className={style.comparisonList__factory_item}>
            <h5>Страна</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.factoryData.made}
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Год релиза</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.factoryData.date}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.comparisonList__factory}>
          <h3>Экран</h3>
          <div className={style.comparisonList__factory_item}>
            <h5>Диагональ</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.display.diagonal}
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Разрешение экрана</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={
                    compareIphone.Specifications.display.ScreenResolution
                  }
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Матрица</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.display.matrix}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.comparisonList__factory}>
          <h3>Фотокамера</h3>
          <div className={style.comparisonList__factory_item}>
            <h5>Камера</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.photoCamera.camera}
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Дополнительная камера</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={
                    compareIphone.Specifications.photoCamera.additionalCamera
                  }
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Фронтальная камера</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.photoCamera.frontCamera}
                />
              ))}
            </div>
          </div>
        </div>

        <div className={style.comparisonList__factory}>
          <h3>Габариты и вес</h3>
          <div className={style.comparisonList__factory_item}>
            <h5>Габариты</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={compareIphone.Specifications.DimensionsAndWeight.Dimensions}
                />
              ))}
            </div>
          </div>
          <div className={style.comparisonList__factory_item}>
            <h5>Вес</h5>
            <div className={style.comparisonList__factory_element}>
              {compareProducts.map((compareIphone) => (
                <CompareFactory
                  key={compareIphone._id}
                  factory={
                    compareIphone.Specifications.DimensionsAndWeight.weight
                  }
                />
              ))}
            </div>
          </div>          
        </div>
      </div>
    );
  }
  return <CompareEmpty />;
};

export default ComparisonList;
