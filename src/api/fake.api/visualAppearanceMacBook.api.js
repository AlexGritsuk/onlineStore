export const visualAppearanceMacBook = {    
    white: {
        _id: "120ab",
        name: "Сияющая звезда",
        color: "white"
    },
    black: {
        _id: "121ab",
        name: "Темная ночь",
        color: "black"
    },
    gold: {
        _id: "122ab",
        name: "Золотистый",
        color: "warning"
    },
    silver: {
        _id: "123ab",
        name: "Серебристый",
        color: "silver"
    },
    StarLight: {
        _id: "124ab",
        name: "Сияющая звезда",
        color: "StarLight"
    },
    pink: {
        _id: "125ab",
        name: "Розовый",
        color: "Pink"
    },
    blue: {
        _id: "126ab",
        name: "Синий",
        color: "blue"
    }
}


const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(visualAppearanceMacBook)
        }, 2000)
    });

export default {
    fetchAll
}