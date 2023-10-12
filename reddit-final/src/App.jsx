import './App.css';
import Header from './features/Header/Header';
import Posts from './features/Main/Posts/Posts'
import Subreddit from './features/subreddits/Subreddit';
import { Routes, Route } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      
      <Header/>
      <hr className='componentsDivider'></hr>
      <div className='subreddits-app'>
        <Routes>
        <Route path="/" element={<Subreddit/>} />
        </Routes>
      </div>
      <div>
        <Posts/>
      </div>
      
    </div>
  );
}

export default App;
