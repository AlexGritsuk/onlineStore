import iphones from "./images/iphones/CatalogIphone.png";
import airPods from "./images/airpods/catalogAirPods.png";
import macBooks from "./images/macbooks/catalogMac.png";
import appleWatch from "./images/appleWatch/CatalogWatch.png";
import iphonesMain from "./images/iphones/CatalogMainiPhones.png";
import airPodsMain from "./images/airpods/CatalogMainairPods.png";
import macBooksMain from "./images/macbooks/macMain.png";
import appleWatchMain from "./images/appleWatch/CatalogMainWatch.png";




export const catalogImg = {
    catalog: [iphones, airPods, macBooks, appleWatch],
    catalogMain: [iphonesMain, airPodsMain, macBooksMain, appleWatchMain]
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