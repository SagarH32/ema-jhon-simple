import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import Review from "./components/Review/Review";
import Inventory from "./components/Inventory/Inventory";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import ProductDetail from "./components/ProductDetail/ProductDetail";

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Shop} />
          <Route path="/shop" component={Shop} />
          <Route path="/review" component={Review} />
          <Route path="/inventory" component={Inventory} />
          <Route path="/product/:productKey" component={ProductDetail} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
