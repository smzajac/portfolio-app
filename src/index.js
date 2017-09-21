import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Home from './components/Home';
import SplashPage from './components/SplashPage';
import Contacts from './components/Contacts';
import References from './components/References';


ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/home" component={Home} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/references" component={References} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>


  , document.getElementById('root'));
registerServiceWorker();
