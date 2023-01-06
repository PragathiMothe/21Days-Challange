import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Tweets from './Components/Tweets';
import Trends from './Components/Trends';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
 import Message from './Components/Message';
 import Home from './Components/Home'
 import {Them} from './Them'


function App() {
  return (
    <div className='twitter'>
      <Them>
      <BrowserRouter>
       <Sidebar/> 
      {/* <Tweets/>
       <Trends/>   */}
       <Routes>
       <Route path='/' element={<Home/>}/>
        <Route path='/Message' element={<Message/>} />
        
        
       </Routes>
       </BrowserRouter>
       </Them>
     </div> 
  );
}

export default App;
