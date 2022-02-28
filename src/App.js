import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import TopBar from './Components/TopBar/TopBar';
import Single from './Pages/Single/Single';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer';
import Category from './Pages/Category/Category';
import Product from './Pages/Product/Product';
import Contact from './Pages/Contact/Contact';
import Privacy from './Pages/Privacy/Privacy';
import Shipping from './Pages/Shipping/Shipping';
import Return from './Pages/Return/Return';
import Sitemap from './Pages/Sitemap/Sitemap';

function App() {
 return (
  <Router>
   <div className="App">
    <TopBar />

    <Switch>
     <Route exact path="/">
      <Home />
     </Route>
     <Route path="/about">
      <About />
     </Route>
     <Route path="/categories">
      <Category />
     </Route>
     <Route path="/products">
      <Product />
     </Route>
     <Route path="/contact">
      <Contact />
     </Route>
     <Route path="/privacy-policy">
      <Privacy />
     </Route>
     <Route path="/shipping-policy">
      <Shipping />
     </Route>
     <Route path="/return-policy">
      <Return />
     </Route>
     <Route path="/sitemap">
      <Sitemap />
     </Route>
     <Route path="/:postSlug">
      <Single />
     </Route>
    </Switch>

    <Footer />
   </div>
  </Router>
 );
}

export default App;
