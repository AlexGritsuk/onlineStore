import iphones from "./images/iphones/CatalogIphone.png";
import airPods from "./images/airpods/catalogAirPods.png";
import macBooks from "./images/macbooks/catalogMac.png";
import appleWatch from "./images/appleWatch/CatalogWatch.png";

export const catalogImg = {
    catalog: [iphones, airPods, macBooks, appleWatch]
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(catalogImg)
        }, 0)
    });

export default {
    fetchAll
}