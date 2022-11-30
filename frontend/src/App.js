import {BrowserRouter, Routes, Route, Link,} from 'react-router-dom'

//pages and components
import PropertyPage from './pages/PropertyPage'
import CsTeamPage from './pages/CsTeamPage'
import BuyerPage from './pages/BuyerPage'
import AgentPage from './pages/AgentPage'
import ReportPage from './pages/ReportPage'
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
              path="/reportpage"
              element={<ReportPage />}
            />

          <Route  exact
              path="/agentpage"
              element={<AgentPage />}
            />

          <Route  exact
              path="/buyerpage"
              element={<BuyerPage />}
            />

          <Route  exact
              path="/"
              element={<PropertyPage />}
            />

          </Routes>
       
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
