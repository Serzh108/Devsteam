import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PhotosPage from './pages/PhotosPage/PhotosPage';
import SingleImg from './pages/SingleImg/SingleImg';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact component={PhotosPage} />
        <Route path="/singleImg" component={SingleImg} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
