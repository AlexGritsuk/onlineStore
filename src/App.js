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
import { CompareProvider } from "./hooks/useCompare";
import Footer from "./page/footer/footer";
import "./index.css";
import { CartProvider } from "./hooks/useCart";
import { HeartProvider } from "./hooks/useHeart";
import { MacBooksProvider } from "./hooks/useMacBook";
import { useDispatch } from "react-redux";
import { loadColorIphones, loadIphonesList, loadSeriesIphones } from "./store/iphones";
import { loadAirPodsList, loadColorAirPods, loadSeriesAirPods } from "./store/airPods";
import { loadMacBooksList } from "./store/macBooks";

// import { pathRoutes } from './routes';

function App() {
  const dispatchIphones = useDispatch()
  const dispatchSeriesIphones = useDispatch()
  const dispatchColorIphones = useDispatch()


  const dispatchAirpods = useDispatch()
  const dispatchSeriesAirpods = useDispatch()
  const dispatchColorAirpods = useDispatch()


  const dispatchMacBooks = useDispatch()

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





  return (
    <div className="wrapper">
      <CompareProvider>
        <CartProvider>
          <HeartProvider>
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
            <footer className="footer">
              <Footer />
            </footer>
          </HeartProvider>
        </CartProvider>
      </CompareProvider>
    </div>
  );
}

export default App;
