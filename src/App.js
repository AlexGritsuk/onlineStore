import React, { useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/Login";
import Airpods from "./layouts/Airpods";
import Iphones from "./layouts/Iphones";
import MacBooks from "./layouts/MacBooks";
import Basket from "./layouts/Basket";
import Main from "./layouts/Main";
import Heart from "./layouts/heart";
import Comparison from "./layouts/Comparison";
import Footer from "./page/footer/footer";
import "./index.css";
import { useDispatch } from "react-redux";
import { loadColorIphones, loadIphonesList, loadSeriesIphones } from "./store/iphones";
import { loadAirPodsList, loadColorAirPods, loadSeriesAirPods } from "./store/airPods";
import { loadColorMacBooks, loadMacBooksList, loadSeriesMacBooks } from "./store/macBooks";


function App() {
  const dispatchIphones = useDispatch();
  const dispatchSeriesIphones = useDispatch();
  const dispatchColorIphones = useDispatch();
  const dispatchAirpods = useDispatch();
  const dispatchSeriesAirpods = useDispatch();
  const dispatchColorAirpods = useDispatch();
  const dispatchMacBooks = useDispatch();
  const dispatchSeriesMacBooks = useDispatch();
  const dispatchColorMacBooks = useDispatch();

  useEffect(() => {
    dispatchIphones(loadIphonesList())
  }, []);

  useEffect(() => {
    dispatchSeriesIphones(loadSeriesIphones())
  }, []);

  useEffect(() => {
    dispatchColorIphones(loadColorIphones())
  }, [])

  useEffect(() => {
    dispatchAirpods(loadAirPodsList())
  }, []);

  useEffect(() => {
    dispatchSeriesAirpods(loadSeriesAirPods())
  }, []);

  useEffect(() => {
    dispatchColorAirpods(loadColorAirPods())
  }, [])

  useEffect(() => {
    dispatchMacBooks(loadMacBooksList())
  }, []);

  useEffect(() => {
    dispatchSeriesMacBooks(loadSeriesMacBooks())
  }, []);

  useEffect(() => {
    dispatchColorMacBooks(loadColorMacBooks())
  }, []);

  return (
    <div className="wrapper">
      <header className="header">
        <NavBar />
      </header>
      <main className="main">
        <Switch>
          <Route path="/Login/:type?" component={Login} />
          <Route path="/Airpods/:airPodsId?" component={Airpods} />
          <Route path="/Iphones/:iphoneId?" component={Iphones} />
          <Route path="/MacBooks/:macBookId?" component={MacBooks} />
          <Route path="/Basket" component={Basket} />
          <Route path="/Comparison" component={Comparison} />
          <Route path="/Heart" component={Heart} />
          <Route path="/" exact component={Main} />
          <Redirect to="./Main" />
        </Switch>
      </main>
      {/* <footer className="footer">
        <Footer />
      </footer> */}
    </div>
  );
}

export default App;
