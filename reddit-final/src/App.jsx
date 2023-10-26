import './App.css';
import Posts from './components/Posts/Posts'
import { Routes, Route } from 'react-router-dom';
import Subreddits from './components/Subreddits/Subreddits';
import Header from './components/Header/Header';
function App() {

  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
