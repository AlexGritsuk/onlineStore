import { seriesIphone } from "./seriesIphone.api";
import { visualAppearance } from "./visualAppearance.api";

import iphone13Black from "./images/iphones/13/iphone13miniBlack.png";
import iphone13Black2 from "./images/iphones/13/iphone13miniBlack2.png";

import iphone13White from "./images/iphones/13/iphone13miniWhite.png";
import iphone13White2 from "./images/iphones/13/iphone13miniWhite2.png";

import iphone13Blue from "./images/iphones/13/iphone13miniBlue.png";
import iphone13Blue2 from "./images/iphones/13/iphone13miniBlue2.png";
import iphone13Blue3 from "./images/iphones/13/iphone13miniBlue3.png";

import iphone13Green from "./images/iphones/13/iphone13miniGreen.png";
import iphone13Green2 from "./images/iphones/13/iphone13miniGreen2.png";


import iphone13Pink from "./images/iphones/13/iphone13miniPink.png";
import iphone13Pink2 from "./images/iphones/13/iphone13miniPink2.png";

import iphone13Red from "./images/iphones/13/iphone13miniRed.png";
import iphone13Red2 from "./images/iphones/13/iphone13miniRed2.png";
import iphone13Red3 from "./images/iphones/13/iphone13miniRed3.png";

import iphoneSE2020Black from "./images/iphones/SE2020/SE2020Black.png";
import iphoneSE2020Black2 from "./images/iphones/SE2020/SE2020Black2.png";
import iphoneSE2020Black3 from "./images/iphones/SE2020/SE2020Black3.png";

import iphoneSE2020White from "./images/iphones/SE2020/SE2020White.png";
import iphoneSE2020White2 from "./images/iphones/SE2020/SE2020White2.png";

import iphoneSE2020Red from "./images/iphones/SE2020/SE2020Red.png";
import iphoneSE2020Red2 from "./images/iphones/SE2020/SE2020Red2.png";

import iphoneSE2022Black from "./images/iphones/SE2022/SE2022Black.png";
import iphoneSE2022Black2 from "./images/iphones/SE2022/SE2022Black2.png";
import iphoneSE2022Black3 from "./images/iphones/SE2022/SE2022Black3.png";

import iphoneSE2022White from "./images/iphones/SE2022/SE2022White.png";
import iphoneSE2022White2 from "./images/iphones/SE2022/SE2022White2.png";
import iphoneSE2022White3 from "./images/iphones/SE2022/SE2022White3.png";

import iphoneSE2022Red from "./images/iphones/SE2022/SE2022Red.png";
import iphoneSE2022Red2 from "./images/iphones/SE2022/SE2022Red2.png";


import iphone12Black from "./images/iphones/12/12Black.png";
import iphone12Black2 from "./images/iphones/12/12Black2.png";

import iphone12White from "./images/iphones/12/12White.png";
import iphone12White2 from "./images/iphones/12/12White2.png";

import iphone12ProWhite from "./images/iphones/12Pro/12ProWhite.png";
import iphone12ProWhite2 from "./images/iphones/12Pro/12ProWhite2.png";

import iphone12ProBlue from "./images/iphones/12Pro/12ProBlue.png";
import iphone12ProBlue2 from "./images/iphones/12Pro/12ProBlue2.png";

import iphone14Black from "./images/iphones/14/iphone14Black.png";

import iphone14White from "./images/iphones/14/iphone14White.png";
import iphone14White2 from "./images/iphones/14/iphone14White2.png";
import iphone14White3 from "./images/iphones/14/iphone14White3.png";

import iphone14Pink from "./images/iphones/14/iphone14Pink.png";

import iphone14ProBlack from "./images/iphones/14Pro/14ProBlack.png";
import iphone14ProWhite from "./images/iphones/14Pro/14ProWhite.png";
import iphone14ProGold from "./images/iphones/14Pro/14ProGold.png";

const simCard = {
    oneNanoSim: {
        _id: "67rdca3eeb6", name: "1 nano-SIM"
    },
    twoNanoSim: {
        _id: "67rdca3eeb7", name: "2 nano-SIM"
    },
    eSim: {
        _id: "67rdca3eeb8", name: "eSim"
    },
    nanoSim_eSim: {
        _id: "67rdca3eeb9", name: "nano-Sim/eSim"
    },
}

const memories = {
    sixfour: { _id: "67rdca3eeb7f6fgeed471822", memory: "64GB" },
    oneTwoEight: { _id: "67rdca3eeb7f6fgeed471818", memory: "128GB" },
    twoFiveSix: { _id: "67rdca3eeb7f6fgeed471820", memory: "256GB" },
    fiveOneTwo: { _id: "67rdca3eeb7f6fgeed471814", memory: "512GB" },
    giga: { _id: "67rdca3eeb7f6fgeed471819", memory: "1024GB" },
}

// const imageIphone = {
//     iphone13MiniBlack: "https://pitergsm.ru/upload/iblock/aaf/aaf63030ae8948d8f0ee62aad8391719.png",
//     iphone13MiniWhite: "https://pitergsm.ru/upload/iblock/35d/35deef4058c6626decd708968e5bf5f7.png",
//     iphone13MiniPink: "https://pitergsm.ru/upload/iblock/b97/b978aa20227e5f2d3f9a86096dbce3df.png",
//     iphone13MiniGreen: "https://pitergsm.ru/upload/iblock/25c/25c17c420a2e2a419766aaf8bdb4c181.jpg",
//     iphone13MiniRed: "https://pitergsm.ru/upload/iblock/720/720efe635ef2ec8d81f03fffe4bed2ab.png",      
// }
const imageIphone = {
    iphone13Mini: {
        black: [iphone13Black, iphone13Black2],
        white: [iphone13White, iphone13White2],
        pink: [iphone13Pink, iphone13Pink2],
        green: [iphone13Green, iphone13Green2],
        red: [iphone13Red, iphone13Red2, iphone13Red3],
        blue: [iphone13Blue, iphone13Blue2, iphone13Blue3],
    },
    iphone13: {
        black: [iphone13Black, iphone13Black2],
        white: [iphone13White, iphone13White2],
        pink: [iphone13Pink, iphone13Pink2],
        green: [iphone13Green, iphone13Green2],
        red: [iphone13Red, iphone13Red2, iphone13Red3],
        blue: [iphone13Blue, iphone13Blue2, iphone13Blue3],
    },
    iphoneSE2020: {
        black: [iphoneSE2020Black, iphoneSE2020Black2, iphoneSE2020Black3],
        white: [iphoneSE2020White, iphoneSE2020White2],
        red: [iphoneSE2020Red, iphoneSE2020Red2],
    },
    iphoneSE2022: {
        black: [iphoneSE2022Black, iphoneSE2022Black2, iphoneSE2022Black3],
        white: [iphoneSE2022White, iphoneSE2022White2, iphoneSE2022White3],
        red: [iphoneSE2022Red, iphoneSE2022Red2],
    },

    iphone12: {
        white: [iphone12White, iphone12White2],
        black: [iphone12Black, iphone12Black2],
    },

    iphone12Pro: {
        white: [iphone12ProWhite, iphone12ProWhite2],
        blue: [iphone12ProBlue, iphone12ProBlue2],
    },

    iphone14: {
        black: [iphone14Black, iphone13Black2],
        white: [iphone14White, iphone14White2, iphone14White3],
        pink: [iphone14Pink, iphone13Pink2],
    },

    iphone14Pro: {
        black: [iphone14ProBlack],
        white: [iphone14ProWhite],
        gold: [iphone14ProGold],
    },
}

const iphones = [
    {
        _id: "300631311",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.black,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 82900,
        bookmark: false,
        rating: 8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631312",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.black,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 77999,
        bookmark: false,
        rating: 8.1,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631323",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.green,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.green,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 74999,
        bookmark: false,
        rating: 8.2,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631324",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.green,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.green,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 74999,
        bookmark: false,
        rating: 8.3,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631335",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 75999,
        bookmark: false,
        rating: 8.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631336",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.white,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 75999,
        bookmark: false,
        rating: 8.5,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "3006313368",
        name: seriesIphone.iphone13,
        img: imageIphone.iphone13.red,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.red,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 78999,
        bookmark: false,
        rating: 8.5,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.65",
                weight: "173"
            }
        },
        describe: `Смартфон iPhone 13 — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "300631347",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.black,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 64999,
        bookmark: false,
        rating: 7.5,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "300631348",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.black,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 64999,
        bookmark: false,
        rating: 7.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "300631359",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.green,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.green,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 64900,
        bookmark: false,
        rating: 7.3,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "3006313510",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.green,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.green,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 69900,
        bookmark: false,
        rating: 7.2,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`
    },
    {
        _id: "3006313611",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.blue,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.blue,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 64900,
        bookmark: false,
        rating: 7.1,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "3006313612",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.blue,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.blue,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 69900,
        bookmark: false,
        rating: 7,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "3006313713",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 64900,
        bookmark: false,
        rating: 6.9,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "3006313714",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.white,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 69900,
        bookmark: false,
        rating: 6.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "30063137145",
        name: seriesIphone.iphone13mini,
        img: imageIphone.iphone13Mini.red,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.red,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 74900,
        bookmark: false,
        rating: 6.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "5.4",
                ScreenResolution: "2340 x 1080",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "64.2 x 131.5 x 7.65",
                weight: "140"
            }
        },
        describe: `Смартфон iPhone 13 mini — совершенный гаджет от Apple, работающий под управлением операционной системы iOS 15. Смартфон поддерживает диапазоны 5G, оснащен современным мощным и быстрым чипом A15 Bionic и системой двух 12 Мп камер, поддерживающими новые возможности вычислительной фотографии. Снимайте качественные фото и видео, играйте без тормозов, серфите и общайтесь!`

    },
    {
        _id: "300621",
        name: seriesIphone.iphoneSE2020,
        img: imageIphone.iphoneSE2020.red,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.red,
        simCard: [simCard.oneNanoSim],
        price: 35900,
        bookmark: false,
        rating: 9,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "148"
            }
        },
        describe: `Классический компактный дизайн, самый мощный процессор iPhone и масса других достоинств. iPhone SE создан, чтобы стать вашим идеальным смартфоном. Быстрый процессор A13 Bionic, видео 4К, технология Touch ID, True Tone, тактильный отклик при нажатии, быстрый Wi-Fi и сотовая связь, стереозвук, дополненная реальность.`

    },
    {
        _id: "30067622",
        name: seriesIphone.iphoneSE2020,
        img: imageIphone.iphoneSE2020.black,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.oneNanoSim],
        price: 38900,
        bookmark: false,
        rating: 9.5,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "148"
            }
        },
        describe: `Классический компактный дизайн, самый мощный процессор iPhone и масса других достоинств. iPhone SE создан, чтобы стать вашим идеальным смартфоном. Быстрый процессор A13 Bionic, видео 4К, технология Touch ID, True Tone, тактильный отклик при нажатии, быстрый Wi-Fi и сотовая связь, стереозвук, дополненная реальность.`

    },
    {
        _id: "30067623",
        name: seriesIphone.iphoneSE2020,
        img: imageIphone.iphoneSE2020.white,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.oneNanoSim],
        price: 38900,
        bookmark: false,
        rating: 9.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "148"
            }
        },
        describe: `Классический компактный дизайн, самый мощный процессор iPhone и масса других достоинств. iPhone SE создан, чтобы стать вашим идеальным смартфоном. Быстрый процессор A13 Bionic, видео 4К, технология Touch ID, True Tone, тактильный отклик при нажатии, быстрый Wi-Fi и сотовая связь, стереозвук, дополненная реальность.`

    },
    {
        _id: "300676231",
        name: seriesIphone.iphoneSE2020,
        img: imageIphone.iphoneSE2020.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.oneNanoSim],
        price: 42900,
        bookmark: false,
        rating: 9.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "148"
            }
        },
        describe: `Классический компактный дизайн, самый мощный процессор iPhone и масса других достоинств. iPhone SE создан, чтобы стать вашим идеальным смартфоном. Быстрый процессор A13 Bionic, видео 4К, технология Touch ID, True Tone, тактильный отклик при нажатии, быстрый Wi-Fi и сотовая связь, стереозвук, дополненная реальность.`

    },
    {
        _id: "3000165221",
        name: seriesIphone.iphoneSE2022,
        img: imageIphone.iphoneSE2022.white,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.oneNanoSim],
        price: 38990,
        bookmark: false,
        rating: 9.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "144"
            }
        },
        describe: `Apple iPhone SE 2022 — маленький и удобный смартфон 
        с производительной «начинкой». Модель оснащена сверхбыстрым чипом 
        A15 Bionic и достойной камерой на 12 Мп с 5-кратным цифровым зумом. 
        Благодаря мощному чипу загрузка приложений в Apple iPhone SE 2022 происходит 
        буквально молниеносно. А еще он помогает системе увеличить время работы без подзарядки.
        iPhone SE 2022 надежно защищен от воды и пыли по стандарту IP67. У смартфона диагональ 
        экрана составляет 4.7", разрешение — 1334 x 750 пикселей. Девайс поддерживает 
        технологию Touch ID — разблокировка айфона пальцем работает безотказно.`

    },
    {
        _id: "3000165222",
        name: seriesIphone.iphoneSE2022,
        img: imageIphone.iphoneSE2022.red,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.red,
        simCard: [simCard.oneNanoSim],
        price: 37900,
        bookmark: false,
        rating: 9.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "144"
            }
        },
        describe: `Apple iPhone SE 2022 — маленький и удобный смартфон 
        с производительной «начинкой». Модель оснащена сверхбыстрым чипом 
        A15 Bionic и достойной камерой на 12 Мп с 5-кратным цифровым зумом. 
        Благодаря мощному чипу загрузка приложений в Apple iPhone SE 2022 происходит 
        буквально молниеносно. А еще он помогает системе увеличить время работы без подзарядки.
        iPhone SE 2022 надежно защищен от воды и пыли по стандарту IP67. У смартфона диагональ 
        экрана составляет 4.7", разрешение — 1334 x 750 пикселей. Девайс поддерживает 
        технологию Touch ID — разблокировка айфона пальцем работает безотказно.`
    },
    {
        _id: "300016522223",
        name: seriesIphone.iphoneSE2022,
        img: imageIphone.iphoneSE2022.black,
        memories: memories.sixfour,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.oneNanoSim],
        price: 38900,
        bookmark: false,
        rating: 9.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "4.7",
                ScreenResolution: "1334 x 750",
                matrix: "HD"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "нет",
                frontCamera: "7"
            },
            DimensionsAndWeight: {
                Dimensions: "67.3 x 138.4 x 7.3",
                weight: "144"
            }
        },
        describe: `Apple iPhone SE 2022 — маленький и удобный смартфон 
        с производительной «начинкой». Модель оснащена сверхбыстрым чипом 
        A15 Bionic и достойной камерой на 12 Мп с 5-кратным цифровым зумом. 
        Благодаря мощному чипу загрузка приложений в Apple iPhone SE 2022 происходит 
        буквально молниеносно. А еще он помогает системе увеличить время работы без подзарядки.
        iPhone SE 2022 надежно защищен от воды и пыли по стандарту IP67. У смартфона диагональ 
        экрана составляет 4.7", разрешение — 1334 x 750 пикселей. Девайс поддерживает 
        технологию Touch ID — разблокировка айфона пальцем работает безотказно.`
    },
    {
        _id: "300635041",
        name: seriesIphone.iphone12,
        img: imageIphone.iphone12.white,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.nanoSim_eSim],
        price: 79900,
        bookmark: false,
        rating: 8.7,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.4",
                weight: "162"
            }
        },
        describe: `iPhone 12 – технологии будущего для нашего настоящего. Инженерам Apple 
        удалось создать современный смартфон, 
        который с легкостью оставляет позади большинство флагманских Android-смартфонов.`
    },
    {
        _id: "3006350412",
        name: seriesIphone.iphone12,
        img: imageIphone.iphone12.white,
        memories: memories.fiveOneTwo,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.nanoSim_eSim],
        price: 79900,
        bookmark: false,
        rating: 8.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.4",
                weight: "162"
            }
        },
        describe: `iPhone 12 – технологии будущего для нашего настоящего. Инженерам Apple 
        удалось создать современный смартфон, 
        который с легкостью оставляет позади большинство флагманских Android-смартфонов.`
    },
    {
        _id: "300635042",
        name: seriesIphone.iphone12,
        img: imageIphone.iphone12.black,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.nanoSim_eSim],
        price: 79900,
        bookmark: false,
        rating: 8.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.4",
                weight: "162"
            }
        },
        describe: `iPhone 12 – технологии будущего для нашего настоящего. Инженерам Apple 
        удалось создать современный смартфон, 
        который с легкостью оставляет позади большинство флагманских Android-смартфонов.`
    },
    {
        _id: "3006350421",
        name: seriesIphone.iphone12,
        img: imageIphone.iphone12.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.nanoSim_eSim],
        price: 72000,
        bookmark: false,
        rating: 8.85,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.4",
                weight: "162"
            }
        },
        describe: `iPhone 12 – технологии будущего для нашего настоящего. Инженерам Apple 
        удалось создать современный смартфон, 
        который с легкостью оставляет позади большинство флагманских Android-смартфонов.`
    },
    {
        _id: "300635043",
        name: seriesIphone.iphone12,
        img: imageIphone.iphone12.black,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.nanoSim_eSim],
        price: 79000,
        bookmark: false,
        rating: 8.1,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.4",
                weight: "162"
            }
        },
        describe: `iPhone 12 – технологии будущего для нашего настоящего. Инженерам Apple 
        удалось создать современный смартфон, 
        который с легкостью оставляет позади большинство флагманских Android-смартфонов.`
    },
    {
        _id: "3006551011",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 84999,
        bookmark: false,
        rating: 9.2,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006551012",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.white,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 92999,
        bookmark: false,
        rating: 9.3,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006551013",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.white,
        memories: memories.fiveOneTwo,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 109990,
        bookmark: false,
        rating: 9.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "300655102",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.black,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 84999,
        bookmark: false,
        rating: 9,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006551021",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.black,
        memories: memories.fiveOneTwo,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 84999,
        bookmark: false,
        rating: 9,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006551034",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.pink,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.pink,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 84999,
        bookmark: false,
        rating: 9.2,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006551035",
        name: seriesIphone.iphone14,
        img: imageIphone.iphone14.pink,
        memories: memories.giga,
        visualAppearance: visualAppearance.pink,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 119990,
        bookmark: false,
        rating: 8.2,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2532 x 1170",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "12",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 146.7 x 7.8",
                weight: "172"
            }
        },
        describe: `Технические характеристики iPhone 14 как всегда на высоте. 
        Новая модель работает на базе привычного процессора A15 Bionic, который был улучшен. 
        Обновленный шестиядерный чип с 5-ядерным графическим процессором обеспечит 
        айфону более крутую графику и прирост производительности в играх как минимум на 25%.`
    },
    {
        _id: "3006512811",
        name: seriesIphone.iphone14PRO,
        img: imageIphone.iphone14Pro.white,
        memories: memories.giga,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 149990,
        bookmark: false,
        rating: 6.9,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.1",
                ScreenResolution: "2556 x 1179",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "71.5 x 147.5 x 7.85",
                weight: "206"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro получил 6.1 дюймовый дисплей Super Retina XDR и новый вырез 
        Dynamic Island — «динамический остров». 
        Камеру и сенсоры расположили так, чтобы они не бросались в глаза, 
        а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro составляет 2556 на 1179 пикселей при 
        плотности 460 пикселей на дюйм. Яркость экрана достигает 2000 нит — 
        это рекордное значение для смартфонов.
        Новинка работает на базе Apple A16 Bionic, в которой применен самый 
        быстрый мобильный центральный процессор.`
    },
    {
        _id: "3006512812",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.white,
        memories: memories.oneTwoEight,
        visualAppearance: visualAppearance.white,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 119990,
        bookmark: false,
        rating: 6.8,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
    {
        _id: "3006512825",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.black,
        memories: memories.fiveOneTwo,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 129990,
        bookmark: false,
        rating: 6.7,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
    {
        _id: "3006512826",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.black,
        memories: memories.twoFiveSix,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 119990,
        bookmark: false,
        rating: 6.5,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
    {
        _id: "3006512827",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.black,
        memories: memories.giga,
        visualAppearance: visualAppearance.black,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 159990,
        bookmark: false,
        rating: 6.6,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
    {
        _id: "300651283",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.gold,
        memories: memories.giga,
        visualAppearance: visualAppearance.gold,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 199990,
        bookmark: false,
        rating: 5.5,
        Specifications: {
            factoryData: {
                head: "Заводские данные",
                subHeadOne: "Страна",
                subHeadTwo: "Год производства",
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
    {
        _id: "300651284",
        name: seriesIphone.iphone14PROMAX,
        img: imageIphone.iphone14Pro.gold,
        memories: memories.giga,
        visualAppearance: visualAppearance.gold,
        simCard: [simCard.twoNanoSim, simCard.nanoSim_eSim],
        price: 199990,
        bookmark: false,
        rating: 5.4,
        Specifications: {
            factoryData: {
                made: "Китай",
                date: 2022
            },
            display: {
                diagonal: "6.7",
                ScreenResolution: "2796 x 1290",
                matrix: "OLED"
            },
            photoCamera: {
                camera: "48",
                additionalCamera: "12",
                frontCamera: "12"
            },
            DimensionsAndWeight: {
                Dimensions: "77.6 x 160.7 x 7.85",
                weight: "240"
            }
        },
        describe: `Смартфон Apple iPhone 14 Pro Max получил 6.7 дюймовый дисплей Super Retina XDR и 
        новый вырез Dynamic Island — «динамический остров». Камеру и сенсоры расположили так, чтобы они не 
        бросались в глаза, а на черном пространстве теперь отображаются различные уведомления и фоновая активность.
        Разрешение экрана у iPhone 14 Pro Max составляет 2796 на 1290 пикселей при плотности 460 пикселей на дюйм.
         Яркость экрана достигает 2000 нит — это рекордное значение для смартфонов.        
        Новинка работает на базе Apple A16 Bionic, в которой применен самый быстрый мобильный центральный процессор.`
    },
];


const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(iphones);
        }, 2000);
    });


const getById = (id) => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(iphones.find((iphone) => iphone._id === id))
    }, 2000)
})


export default {
    fetchAll,
    getById
}



// const fetchAll = () =>
//     new Promise((resolve) => {
//         window.setTimeout(function () {
//             resolve(iphones);
//         }, 2000)
//     });

// export default {
//     fetchAll
// };