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