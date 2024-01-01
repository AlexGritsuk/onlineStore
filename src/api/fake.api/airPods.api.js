import airPods2White from "./images/airpods/airPods2/airPods2White3.png";
import airPods2White2 from "./images/airpods/airPods2/airPods2White3.png";
import airPodsWhite3 from "./images/airpods/airPods2/airpods2White2.png";
import airPods2Black from "./images/airpods/airPods2/airPods2Black.png";
import airPods2Green from "./images/airpods/airPods2/airPods2Green.png";
import airPods3White from "./images/airpods/airPods3/AirPods3White.png";
import airPodsWhite2 from "./images/airpods/airPods3/AirPods3White2.png";
import airPodsPink from "./images/airpods/airPods3/AirPods3Pink.png";
import airPodsPink2 from "./images/airpods/airPods3/AirPods3Pink2.png";
import airPodsRed from "./images/airpods/airPods3/airPods3Red.png";
import airPodsBlack from "./images/airpods/airPods3/AirPods3Black.png";
import airPodsPerple from "./images/airpods/airPods3/AirPods3Perple.png";
import airPods2Pro from "./images/airpods/airPods2Pro/irPods2Pro.png";
import airPods2Pro2 from "./images/airpods/airPods2Pro/airPods2Pro2.png";
import airPodsMaxBlack from "./images/airpods/AirPodsMax/AirPodsMaxBlack.png";
import airPodsMaxPink from "./images/airpods/AirPodsMax/AirPodsMaxPink.png";
import airPodsMaxGreen from "./images/airpods/AirPodsMax/AirPodsMaxGreen.png";

const imageAirPods = {
  airPods2: {
    white: [airPods2White2, airPods2White, airPodsWhite3],
    black: [airPods2Black],
    green: [airPods2Green],
  },

  airPods3: {
    white: [airPods3White, airPodsWhite2],
    pink: [airPodsPink, airPodsPink2],
    red: [airPodsRed],
    black: [airPodsBlack],
    perple: [airPodsPerple],
  },

  airPods2Pro: {
    white: [airPods2Pro, airPods2Pro2],
  },

  airPodsMax: {
    pink: [airPodsMaxPink],
    black: [airPodsMaxBlack],
    green: [airPodsMaxGreen],
  },
};

const visualAppearance = {
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
};

export const seriesAirPods = {
  airPods2: { _id: "77rdca3eeb7f6fgeed4718181", name: "AirPods 2" },
  airPods3: { _id: "77rdca3eeb7f6fgeed4718182", name: "AirPods 3" },
  airPods2Pro: { _id: "77rdca3eeb7f6fgeed4718183", name: "AirPods 2 Pro" },
  airPodsMax: { _id: "77rdca3eeb7f6fgeed47181831", name: "AirPods Max" },
};

const airPods = [
  {
    _id: "500631311",
    name: seriesAirPods.airPods2,
    img: imageAirPods.airPods2.white,
    visualAppearance: visualAppearance.black,
    price: 11900,
    rating: 10,
  },
  {
    _id: "500631312",
    name: seriesAirPods.airPods2,
    img: imageAirPods.airPods2.black,
    visualAppearance: visualAppearance.black,
    price: 17200,
    rating: 7.1,
  },
  {
    _id: "500631313",
    name: seriesAirPods.airPods2,
    img: imageAirPods.airPods2.green,
    visualAppearance: visualAppearance.green,
    price: 23000,
    rating: 6.9,
  },
  {
    _id: "500631314",
    name: seriesAirPods.airPods3,
    img: imageAirPods.airPods3.white,
    visualAppearance: visualAppearance.white,
    price: 17800,
    rating: 9.3,
  },
  {
    _id: "500631315",
    name: seriesAirPods.airPods3,
    img: imageAirPods.airPods3.black,
    visualAppearance: visualAppearance.black,
    price: 24000,
    rating: 6.8,
  },
  {
    _id: "500631316",
    name: seriesAirPods.airPods3,
    img: imageAirPods.airPods3.pink,
    visualAppearance: visualAppearance.pink,
    price: 21000,
    rating: 6.6,
  },
  {
    _id: "500631317",
    name: seriesAirPods.airPods3,
    img: imageAirPods.airPods3.red,
    visualAppearance: visualAppearance.red,
    price: 23600,
    rating: 6.6,
  },
  {
    _id: "500631318",
    name: seriesAirPods.airPods3,
    img: imageAirPods.airPods3.perple,
    visualAppearance: visualAppearance.perple,
    price: 22700,
    rating: 5.5,
  },
  {
    _id: "500631319",
    name: seriesAirPods.airPods2Pro,
    img: imageAirPods.airPods2Pro.white,
    visualAppearance: visualAppearance.white,
    price: 82900,
    rating: 4.2,
  },
  {
    _id: "5006313110",
    name: seriesAirPods.airPodsMax,
    img: imageAirPods.airPodsMax.pink,
    visualAppearance: visualAppearance.pink,
    price: 42900,
    rating: 4.5,
  },
  {
    _id: "5006313111",
    name: seriesAirPods.airPodsMax,
    img: imageAirPods.airPodsMax.black,
    visualAppearance: visualAppearance.black,
    price: 45900,
    rating: 5.1,
  },
  {
    _id: "5006313112",
    name: seriesAirPods.airPodsMax,
    img: imageAirPods.airPods2.green,
    visualAppearance: visualAppearance.green,
    price: 44900,
    rating: 6.1,
  },
];

const fetchAll = () =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(airPods);
    }, 2000);
  });

const getById = (id) =>
  new Promise((resolve) => {
    window.setTimeout(function () {
      resolve(airPods.find((airPod) => airPod._id === id));
    }, 2000);
  });

export default {
  fetchAll,
  getById,
};
