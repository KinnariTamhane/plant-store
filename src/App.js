// import logo from './logo.svg';
import './App.css';
import './css/output.css';
import ProductListing from './components/ProductListing'
import BrowserRoutes, { Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRoutes>
            <div className="App">
              <ProductListing/>
          </div>
          <Route path='/pdp' Component={}/>
    </BrowserRoutes>

  );
}

export default App;
