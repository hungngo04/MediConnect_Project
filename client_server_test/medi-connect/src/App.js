import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ChatPage from './pages/ChatPage/ChatPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<ChatPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
