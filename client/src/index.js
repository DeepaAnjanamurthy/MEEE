import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import Navbar from './components/Appnav/Navbar';
import Chakras from './components/Chakras/Chakras';
// import Videoplayer from './components/Videoplayer/Videoplayer';
import Meditate from './components/Meditate/Meditate';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Navbar/>
      <Switch>
        {/* <App /> */}
        <Route path="/" component={App} exact />
        <Route exact path="/welcome" component={Chakras}  />
        {/* <Route exact path="/chakra/7" component={Videoplayer} /> */}
        <Route exact path="/chakra/7" component={Meditate} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
    {/* <Footer/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

