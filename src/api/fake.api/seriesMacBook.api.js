export const seriesMacBooks = {
    macBookAir13: { _id: "120a", name: "Apple MacBook Air 13" },
    macBookAir15: { _id: "121a", name: "Apple MacBook Air 15" },
    iMac: { _id: "122a", name: "iMac 24" },
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