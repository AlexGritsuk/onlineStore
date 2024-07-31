
import mainImage1 from "./images/main/iPhone15ProTitanium.webp"
import mainImage2 from "./images/main/AirPodsPro.webp"
import mainImage3 from "./images/main/iPhone14Pro.webp"
import mainImage4 from "./images/main/iPhone15New.webp"
 
export const mainImg = {
    mainSlider: [mainImage1, mainImage2, mainImage3, mainImage4]
}

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(mainImg)
        }, 0)
    });

export default {
    fetchAll
}