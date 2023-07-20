
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './layout';
import * as Pages from './pages'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="App">
  
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Pages.Home />} />
          <Route path="/map" element={<Pages.Map />} />
          <Route path="/friends" element={<Pages.Friends />} />

          <Route path="*" element={<Pages.NotFound />} />
        </Route>

      </Routes>
    </div>
  )
}

export default App;