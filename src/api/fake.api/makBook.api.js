import { visualAppearanceMacBook } from "./visualAppearanceMacBook.api";
import { seriesMacBooks } from "./seriesMacBook.api";

import makBookAir from "./images/macbooks/macBook 13.png";

 
const imageMacBook = {
    macBookAir13: {
        black: [makBookAir], 
        white: [makBookAir],
        gold: [makBookAir],
        silver: [makBookAir]
    }
};


const macBooks = [
    {
        _id: "120",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.black,
        visualAppearance: visualAppearanceMacBook.black,
        price: 92000,
        rating: 8
    },
    {
        _id: "121",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.white,
        visualAppearance: visualAppearanceMacBook.white,
        price: 87300,
        rating: 8.2
    },
    {
        _id: "122",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.gold,
        visualAppearance: visualAppearanceMacBook.gold,
        price: 95500,
        rating: 7.9
    },
    {
        _id: "123",
        name: seriesMacBooks.macBookAir13,
        img: imageMacBook.macBookAir13.silver,
        visualAppearance: visualAppearanceMacBook.silver, 
        price: 85000,
        rating: 8.5
    }
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