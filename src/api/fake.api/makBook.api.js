import { visualAppearanceMacBook } from "./visualAppearanceMacBook.api";
import { seriesMacBooks } from "./seriesMacBook.api";
import makBookAir from "./images/macbooks/macBook 13.png";
import makBookAir15 from "./images/macbooks/MacBook Air 15.png";

import iMacSilver1 from "././images/macbooks/1Apple iMac 24 silver.png";
import iMacSilver2 from "././images/macbooks/2Apple iMac 24 silver.png";
import iMacSilver3 from "././images/macbooks/3Apple iMac 24 silver.png";

import iMacBlue1 from "././images/macbooks/1Apple iMac 24 blue.png";
import iMacBlue2 from "././images/macbooks/2Apple iMac 24 blue.png";

import iMacPink1 from "././images/macbooks/1Apple iMac 24 pink.png";
import iMacPink2 from "././images/macbooks/2Apple iMac 24 pink.png";

const imageMacBook = {
    macBookAir13: {
        black: [makBookAir],
        white: [makBookAir],
        gold: [makBookAir],
        silver: [makBookAir]
    },
    macBookAir15: {
        StarLight: [makBookAir15]
    },
    iMac: {
        silver: [iMacSilver1, iMacSilver2, iMacSilver3],
        blue: [iMacBlue1, iMacBlue2],
        pink: [iMacPink1, iMacPink2]
    }
};

const macBooks = [
    {
        _id: "120",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.black,
        visualAppearance: visualAppearanceMacBook.black,
        price: 92000,
        rating: 8,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "13.3",
                ScreenResolution: "2560 x 1600",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M1",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "304,1 x 212,4 x 16,1",
                weight: "1290"
            }
        },
        describe: `MacBook Air, самый тонкий и легкий ноутбук Apple, 
        с новым чипом M1 стал суперсильным и супермобильным. 8-ядерный 
        центральный процессор в сочетании с 7-ядерным графическим процессором и 
        16-ядерной системой Neural Engine творят настоящие чудеса. 
        Чтобы раскрыть весь потенциал MacBook Air 13 M1, инженеры Apple 
        установили в ноутбук до 16 ГБ высокоскоростной объединенной памяти, 
        которая может похвастаться высокой пропускной способностью и минимальной задержкой при обращении.`
    },
    {
        _id: "121",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.white,
        visualAppearance: visualAppearanceMacBook.white,
        price: 87300,
        rating: 8.2,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "13.3",
                ScreenResolution: "2560 x 1600",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M1",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "304,1 x 212,4 x 16,1",
                weight: "1290"
            }
        },
        describe: `MacBook Air, самый тонкий и легкий ноутбук Apple, 
        с новым чипом M1 стал суперсильным и супермобильным. 8-ядерный 
        центральный процессор в сочетании с 7-ядерным графическим процессором и 
        16-ядерной системой Neural Engine творят настоящие чудеса. 
        Чтобы раскрыть весь потенциал MacBook Air 13 M1, инженеры Apple 
        установили в ноутбук до 16 ГБ высокоскоростной объединенной памяти, 
        которая может похвастаться высокой пропускной способностью и минимальной задержкой при обращении.`
    },
    {
        _id: "122",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.white,
        visualAppearance: visualAppearanceMacBook.white,
        price: 87300,
        rating: 8.2,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "13.3",
                ScreenResolution: "2560 x 1600",
                typeDisplay: "IPS",
            },
            processor: {
                ram: "8",
                line: "Apple M1",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "304,1 x 212,4 x 16,1",
                weight: "1290"
            }
        },
        describe: `MacBook Air, самый тонкий и легкий ноутбук Apple, 
        с новым чипом M1 стал суперсильным и супермобильным. 8-ядерный 
        центральный процессор в сочетании с 7-ядерным графическим процессором и 
        16-ядерной системой Neural Engine творят настоящие чудеса. 
        Чтобы раскрыть весь потенциал MacBook Air 13 M1, инженеры Apple 
        установили в ноутбук до 16 ГБ высокоскоростной объединенной памяти, 
        которая может похвастаться высокой пропускной способностью и минимальной задержкой при обращении.`
    },
    {
        _id: "123",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.gold,
        visualAppearance: visualAppearanceMacBook.gold,
        price: 95500,
        rating: 7.9,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2020
            },
            display: {
                diagonal: "13.3",
                ScreenResolution: "2560 x 1600",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M1",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "304,1 x 212,4 x 16,1",
                weight: "1290"
            }
        },
        describe: `MacBook Air, самый тонкий и легкий ноутбук Apple, 
        с новым чипом M1 стал суперсильным и супермобильным. 8-ядерный 
        центральный процессор в сочетании с 7-ядерным графическим процессором и 
        16-ядерной системой Neural Engine творят настоящие чудеса. 
        Чтобы раскрыть весь потенциал MacBook Air 13 M1, инженеры Apple 
        установили в ноутбук до 16 ГБ высокоскоростной объединенной памяти, 
        которая может похвастаться высокой пропускной способностью и минимальной задержкой при обращении.`
    },
    {
        _id: "124",
        name: seriesMacBooks.macBookAir15,
        img: imageMacBook.macBookAir15.StarLight,
        visualAppearance: visualAppearanceMacBook.StarLight,
        price: 167000,
        rating: 10,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2024
            },
            display: {
                diagonal: "15.3",
                ScreenResolution: "2880 x 1864",
                typeDisplay: "IPS",
            },
            processor: {
                ram: "16",
                line: "Apple M3",
                core: "10"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "15"
            },
            DimensionsAndWeight: {
                Dimensions: "340 x 237 x 11",
                weight: "1510"
            }
        },
        describe: `MacBook Air 15 M3 (2024) в привычном дизайне стал еще мощнее. 
        Ноутбук работает на чипе Apple M3 с восьмиядерным центральным процессором и 
        интегрированным графическим процессором с 10 ядрами. Обработка изображений и 
        вычислительная производительность поднялись на новый уровень, а Wi-Fi стал быстрее в два раза.`
    },
    {
        _id: "125",
        name: seriesMacBooks.iMac,
        img: imageMacBook.iMac.pink,
        visualAppearance: visualAppearanceMacBook.pink,
        price: 145000,
        rating: 6.1,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "23.5",
                ScreenResolution: "4480 x 2520",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M1",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "461 x 547 x 147",
                weight: "4460"
            }
        },
        describe: `Новый iMac с дисплеем Retina 24 дюйма с разрешением 4,5K наделен силой чипа M1, объединяющем в себе центральный и графический процессоры, память и ряд других компонентов. В iMac приложения открываются молниеносно, а вся система функционирует слаженно и быстро.
        Мощная начинка размещена в стильном и очень тонком корпусе — его толщина составляет всего 11,5 мм.
        Благодаря широкому цветовому охвату (более миллиарда цветов) и высочайшему разрешению 4480x2520 пикселей изображение на экране выглядит реалистично и четко.`
    },
    {
        _id: "126",
        name: seriesMacBooks.iMac,
        img: imageMacBook.iMac.silver,
        visualAppearance: visualAppearanceMacBook.silver,
        price: 169000,
        rating: 6.1,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "23.5",
                ScreenResolution: "4480 x 2520",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M3",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "461 x 547 x 147",
                weight: "4460"
            }
        },
        describe: `iMac – это компьютер вида "Моноблок" от Apple, 
        который невероятно сложно сравнивать с аналогичными гаджетами от 
        других брендов. Ведь здесь мы получаем буквально все, о чем может мечтать 
        современный пользователей. В тонкий корпус поместилось и мощное "Железо", и 
        отличный экран, и Full HD камера, которая повысила уровень видеозвонков на совершенно иной уровень.`
    },
    {
        _id: "127",
        name: seriesMacBooks.iMac,
        img: imageMacBook.iMac.blue,
        visualAppearance: visualAppearanceMacBook.blue,
        price: 184000,
        rating: 6.1,
        specificationsMacBooks: {
            factoryData: {
                made: "Китай",
                date: 2021
            },
            display: {
                diagonal: "23.5",
                ScreenResolution: "4480 x 2520",
                typeDisplay: "IPS",

            },
            processor: {
                ram: "8",
                line: "Apple M3",
                core: "8"
            },
            battery: {
                type: "Li-Pol",
                typeOn: "18"
            },
            DimensionsAndWeight: {
                Dimensions: "461 x 547 x 147",
                weight: "4460"
            }
        },
        describe: `iMac – это компьютер вида "Моноблок" от Apple, 
        который невероятно сложно сравнивать с аналогичными гаджетами от 
        других брендов. Ведь здесь мы получаем буквально все, о чем может мечтать 
        современный пользователей. В тонкий корпус поместилось и мощное "Железо", и 
        отличный экран, и Full HD камера, которая повысила уровень видеозвонков на совершенно иной уровень.`
    },
];

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(macBooks);
        }, 2000);
    });


const getById = (id) => new Promise((resolve) => {
    window.setTimeout(function () {
        resolve(macBooks.find((iphone) => iphone._id === id))
    }, 2000)
})


export default {
    fetchAll,
    getById
}