import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import NavBar from "./components/ui/navBar";
import Login from "./layouts/Login";
import Airpods from "./layouts/Airpods";
import Iphones from "./layouts/Iphones";
import Basket from "./layouts/Basket";
import Main from "./layouts/Main";
import { IphoneProvider } from "./hooks/useIphone";
import Heart from "./layouts/heart";
import Comparison from "./layouts/Comparison";
import { CompareProvider } from "./hooks/useCompare";
import Footer from "./page/footer/footer";
import "./index.css";
import { CartProvider } from "./hooks/useCart";
import { HeartProvider } from "./hooks/useHeart";

// import { pathRoutes } from './routes';

function App() {
  return (
    <div className="wrapper">
      <IphoneProvider>
        <CompareProvider>
          <CartProvider>
            <HeartProvider>
              <header className="header">
                <NavBar />
              </header>
              <main className="main">
                <Switch>
                  <Route path="/Login/:type?" component={Login} />
                  <Route path="/Airpods" component={Airpods} />
                  <Route path="/Iphones:iphoneId?" component={Iphones} />
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
      </IphoneProvider>
    </div>
  );
}

export default App;
