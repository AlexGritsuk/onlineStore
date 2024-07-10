import React from "react";
import style from "./comparisonList.module.css";
import CompareFactory from "./compareFactory";

const CompareParametrsAirPods = ({ compareProducts }) => {
  return (
    <div>
      <div className={style.comparisonList__factory}>
        <h3>Заводские данные</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Страна</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={compareAirPods.specificationsAirPods.factoryData.made}
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Год релиза</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={compareAirPods.specificationsAirPods.factoryData.date}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={style.comparisonList__factory}>
        <h3>Общее</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>Амбушюры наушников</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={compareAirPods.specificationsAirPods.General.Earpads}
              />
            ))}
          </div>
        </div>        
      </div>

      <div className={style.comparisonList__factory}>
        <h3>Время работы</h3>
        <div className={style.comparisonList__factory_item}>
          <h5>В зарядном футляре, ч</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={compareAirPods.specificationsAirPods.timeJob.case}
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Прослушивание музыки, ч</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={
                    compareAirPods.specificationsAirPods.timeJob.fullTime
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Время разговора</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={compareAirPods.specificationsAirPods.timeJob.timeCall}
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
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={
                    compareAirPods.specificationsAirPods.DimensionsAndWeight.Dimensions
                }
              />
            ))}
          </div>
        </div>
        <div className={style.comparisonList__factory_item}>
          <h5>Вес</h5>
          <div className={style.comparisonList__factory_element}>
            {compareProducts.map((compareAirPods) => (
              <CompareFactory
                key={compareAirPods._id}
                factory={
                    compareAirPods.specificationsAirPods.DimensionsAndWeight.weight
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareParametrsAirPods;
