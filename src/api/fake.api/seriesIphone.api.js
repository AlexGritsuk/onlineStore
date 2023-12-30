
export const seriesIphone = {
    iphoneSE2020: { _id: "67rdca3eeb7f6fgeed4718181", name: "iPhone SE 2020" },
    iphoneSE2022: { _id: "67rdca3eeb7f6fgeed4718182", name: "iPhone SE 2022" },
    iphone13: { _id: "67rdca3eeb7f6fgeed4718183", name: "iPhone 13" },
    iphone12: { _id: "67rdca3eeb7f6fgeed47181831", name: "iPhone 12" },
    iphone13mini: { _id: "67rdca3eeb7f6fgeed4718184", name: "iPhone 13 mini" },
    iphone14: { _id: "67rdca3eeb7f6fgeed4718185", name: "iPhone 14" },
    iphone14PRO: { _id: "67rdca3eeb7f6fgeed4718186", name: "iPhone 14 PRO" },
    iphone14PROMAX: { _id: "67rdca3eeb7f6fgeed4718187", name: "iPhone 14 PRO MAX" },
};



const fetchAll = () =>
    new Promise((resolve) => {
        window.setTimeout(function () {
            resolve(seriesIphone)
        }, 2000)
    });

export default {
    fetchAll
}