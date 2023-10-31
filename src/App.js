import { Container } from 'react-bootstrap';
import styles from './App.module.css';
import NavBar from './components/NavBar';
import { Route, Switch } from 'react-router-dom'




function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Container className={styles.Main}>
        <Switch>
          <Route exact path="/" render={() => <h1>Home Page</h1>} />
        </Switch>
        <Switch>
          <Route exact path="/signin" render={() => <h1>Sign In</h1> } />
        </Switch>
        <Switch>
          <Route exact path="/signup" render={() => <h1>Sign Up</h1> } />
        </Switch>
        <Switch>
          <Route render={() => <p>Page Not Found</p> } />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
