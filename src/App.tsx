import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/footer/Footer';
import HomePage from './components/frontpage/FrontPage'; 
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/productsPage/ProductPage'; 

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/product" component={ProductPage} />
          {/* Add more routes as needed */}
        </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
