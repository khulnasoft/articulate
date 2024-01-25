import '@builder.io/widgets';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './builder-settings';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import './index.css';
import { Blocks } from './pages/Blocks';
import { CatchAll } from './pages/CatchAll';
import { Collection } from './pages/Collection';
import { HomepageFullHeadless } from './pages/HomepageFullHeadless';
import { Product } from './pages/Product';

const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <Header />
      <div className={classes.container}>
        <Switch>
          <Route path="/collections">
            <Collection />
          </Route>
          <Route path="/blocks">
            <Blocks />
          </Route>
          <Route path="/products" component={props => <Product {...props} />} />
          <Route path="/homepage-full-headless">
            <HomepageFullHeadless />
          </Route>
          <Route path="/">
            <CatchAll />
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

const useStyles = makeStyles(theme => ({
  link: {
    color: '#555',
    margin: '0 10px',
  },
  container: {
    minHeight: 'calc(100vh - 150px)',
  },
}));

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
