import './App.css';
import {Samples} from "./Samples/Samples";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Study } from './Study/Study';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/samples" element={<Samples />} />
          <Route path="/study" element={<Study />} />
          <Route path="*" element={<h1>Not Found Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

function Home() {
  return (
    <div>
      <div></div>
        <Link to="/samples">React19 Samples</Link> | <Link to="/study">Study React19</Link>
    </div>
  )
}