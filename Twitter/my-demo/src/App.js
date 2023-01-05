import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Tweets from './Components/Tweets';
import Trends from './Components/Trends';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Message from './Components/Message';
 import Home from './Components/Home'

function App() {
  return (
    <div className='twitter'>
      <BrowserRouter>
       <Sidebar/> 
      {/* <Tweets/>
       <Trends/>   */}
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/Message' element={<Message/>} />
        
        
       </Routes>
       </BrowserRouter>
     </div> 
  );
}

export default App;
