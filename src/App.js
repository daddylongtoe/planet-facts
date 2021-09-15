// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Theme from './styles/theme';
import planetData from './data';
import Planet from './components/Planet';
import NotFound from './components/NotFound';
import { useEffect, useState } from 'react';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(planetData);
  }, []);

  return (
    <Router>
      <Theme>
        <Header data={data} />
        <Switch>
          <Route exact path="/">
            <Redirect to="/mercury" />
          </Route>
          <Route path="/mercury">
            <Planet planet={data[0]} />
          </Route>
          {data.map((planet, index) => (
            <Route key={planet.name} path={`/${planet.name}`}>
              <Planet planet={planet} />
            </Route>
          ))}
          <Route component={NotFound} />
        </Switch>
      </Theme>
    </Router>
  );
}

export default App;
