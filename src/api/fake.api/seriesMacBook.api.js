export const seriesMacBooks = {
    macBookAir13: { _id: "120a", name: "Apple MacBook Air 13" },
}


const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(seriesMacBooks)
        }, 2000)
    });

export default {
    fetchAll
}