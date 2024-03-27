export const visualAppearance = {
    blue: {
        _id: "77rdca3eeb7f6fgeed471198",
        name: "Голубой",
        color: "primary",
    },
    green: {
        _id: "77rdca3eeb7f6fgeed471100",
        name: "Зеленый", 
        color: "success",
    },
    pink: {
        _id: "77rdca3eeb7f6fgeed471108",
        name: "Розовый",
        color: "#F400F4",
    },
    white: {
        _id: "77rdca3eeb7f6fgeed471105",
        name: "Белый",
        color: "white",
    },
    black: {
        _id: "77rdca3eeb7f6fgeed471102",
        name: "Черный",
        color: "black",
    },
    gold: {
        _id: "77rdca3eeb7f6fgeed471101",
        name: "Золотистый",
        color: "warning",
    },
    red: {
        _id: "77rdca3eeb7f6fgeed471103",
        name: "Красный глянец",
        color: "danger",
    },
    perple: {
        _id: "77rdca3eeb7f6fgeed4711012",
        name: "Фиолетовый",
        color: "perple",
    }
};

const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(visualAppearance)
        }, 2000)
    });

export default {
    fetchAll
}