import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/global.css';
import './App.css';

import AppLayout from './components/Layout/AppLayout';
import {routes} from './config/routes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          {routes.map(({path, Component}) => (
            <Route
              key={path}
              path={path === '/' ? '' : path.slice(1)}
              element={<Component />}
            />
          ))}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
