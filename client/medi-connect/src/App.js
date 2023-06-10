import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';


function App() {
  return (
    <div className="App">
      <Route path='/' component={HomePage} exacts> HomePage </Route>
      <Route path='/chats' component={ChatPage} exacts> ChatPage </Route>
    </div>
  );
}

export default App;
