import Header from './include/Header';
import Footer from './include/Footer';
import Main from './main/main';
import Write from './components/Write';
import ListView from './components/ListView';
import './App.css';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/write" element={<Write/>}/>
        <Route path="/listview/:id" element={<ListView/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
