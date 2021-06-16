import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import store from './component/store'
import { Provider } from 'react-redux';
import Menue from './component/menue';
import AllUsers from './component/allUsers';
import Form from './component/form';
import Message from './component/message';
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
function App() {
  return (
    <div className="App">
    <Provider store={store}>
      <Router>
      <Menue></Menue>
      <Switch>
        <Route path='/form'>
          <Form></Form>
        </Route>
        <Route path='/message'>
          <Message></Message>
        </Route>
        <Route path='/allUsers'>
          <AllUsers></AllUsers>
        </Route>
      </Switch>
      </Router>
    </Provider>
    </div>
  );
}

export default App;
