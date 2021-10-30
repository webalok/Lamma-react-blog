import Home from './Pages/Home/Home.jsx';
import About from './Pages/About/About.jsx';
import TopBar from './Components/TopBar/TopBar';
import Single from './Pages/Single/Single.jsx';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './Components/Footer/Footer.jsx';
import Category from './Pages/Category/Category.jsx';
import Product from './Pages/Product/Product.jsx';
import Contact from './Pages/Contact/Contact.jsx';


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
