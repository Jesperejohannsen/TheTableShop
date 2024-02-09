import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './components/frontpage/FrontPage'; 
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/productsPage/ProductPage';
import ContactPage from './components/contactPage/ContactPage'; 
import AboutPage from './components/aboutPage/AboutPage';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/products" component={ProductPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/about" component={AboutPage} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
