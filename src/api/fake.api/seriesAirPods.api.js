export const seriesAirPods = {
    airPods2: { _id: "77rdca3eeb7f6fgeed4718181", name: "AirPods 2" },
    airPods3: { _id: "77rdca3eeb7f6fgeed4718182", name: "AirPods 3" },
    airPods2Pro: { _id: "77rdca3eeb7f6fgeed4718183", name: "AirPods 2 Pro" },
    airPodsMax: { _id: "77rdca3eeb7f6fgeed47181831", name: "AirPods Max" },
  };

  
  const fetchAll = () => new Promise((resolve)=>{
    window.setTimeout(()=>{
        resolve(seriesAirPods)
    }, 2000)
  });


  export default {
    fetchAll
  }