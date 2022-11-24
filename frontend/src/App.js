import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom'

//pages and components
import PropertyPage from './pages/PropertyPage'
import CsTeamPage from './pages/CsTeamPage'
import BuyerPage from './pages/BuyerPage'
import Navbar from './components/Navbar'
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className = "pages">
        
          <Routes>
            <Route  exact
              path="/cspage"
              element={<CsTeamPage />}
            />

          <Route  exact
              path="/buyerpage"
              element={<BuyerPage />}
            />

          <Route  exact
              path="/propertypage"
              element={<PropertyPage />}
            />

          </Routes>
       
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
