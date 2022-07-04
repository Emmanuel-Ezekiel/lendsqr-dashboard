import logo from './logo.svg';
import Login from './pages/Login/Login.jsx'
import Home from './pages/Home/Home.jsx'
import List from './pages/list/list.jsx'
import Single from './pages/single/single.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="home" element={<Home />} />
           <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
            </Route>
        </Route>
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
