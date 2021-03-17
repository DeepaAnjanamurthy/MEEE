import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import App from './components/App';
import Navbar from './components/Appnav/Navbar';
import Chakras from './components/Chakras/Chakras';
// import Videoplayer from './components/Videoplayer/Videoplayer';
import Meditate from './components/Meditate/Meditate';
import Meditatechakra from './components/Meditate/Meditatechakra';

ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Navbar/>
      <Switch>
        <Route path="/" component={App} exact />
        <Route exact path="/welcome" component={Chakras}  />
        <Route path="/meditatechakra/:id/:id" component={Meditatechakra} />
        {/* <Route path="/chakra/:id/:id" component={Videoplayer} /> */}
        <Route path="/chakra/:id" component={Meditate} />
        <Route path="/*">
          <Redirect to="/" />
        </Route>
      </Switch>
    {/* <Footer/> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

