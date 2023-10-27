import './App.css';
import Posts from './components/Posts/Posts'
import { Routes, Route } from 'react-router-dom';
import Subreddits from './components/Subreddits/Subreddits';
import Header from './components/Header/Header';
import Comments from './components/Comments/Comments';
function App() {

  return (
    <div className="App">
      <Header/>
      <hr className='component-divider' />
      <div className='page'>
       
      <Routes>
        <Route path='/' element={<Posts/>}></Route>
        <Route path='/Comments' element={<Comments/>}></Route>
      </Routes>
       <Subreddits/>
      </div>
      
    </div>
  );
}

export default App;
