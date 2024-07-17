import React from "react";
import style from "./comparisonList.module.css";
import CompareFactory from "./compareFactory";

const CompareParametrsMacBooks = ({ compareProducts }) => {
  return (
    <div className={style.comparisonList__wrapper}>
      <div className={style.comparisonList__factory}>
        <h3>Заводские данные</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Страна</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.factoryData.made
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Год релиза</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.factoryData.date
                }
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
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.display.diagonal
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Разрешение</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.display
                    .ScreenResolution
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Тип дисплея</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.display.typeDisplay
                }
              />
            ))}
          </div>
        </div>
      </div>

      <div className={style.comparisonList__factory}>
        <h3>Процессор</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Оперативная памать, Gb</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={compareMacBooks.specificationsMacBooks.processor.ram}
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Линейка процессора</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={compareMacBooks.specificationsMacBooks.processor.line}
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Количество ядер</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={compareMacBooks.specificationsMacBooks.processor.core}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={style.comparisonList__factory}>
        <h3>Батарея</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Тип батареи</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={compareMacBooks.specificationsMacBooks.battery.type}
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Время работы</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={compareMacBooks.specificationsMacBooks.battery.typeOn}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={style.comparisonList__factory}>
        <h3>Размеры и вес</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Габариты</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.DimensionsAndWeight
                    .Dimensions
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Вес</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareMacBooks) => (
              <CompareFactory
                key={compareMacBooks._id}
                factory={
                  compareMacBooks.specificationsMacBooks.DimensionsAndWeight
                    .weight
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareParametrsMacBooks;
