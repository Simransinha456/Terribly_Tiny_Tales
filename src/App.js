import './App.css';
import Nav from "../src/component/Nav/Nav.js";
import banner from "../src/component/Nav/banner.jpg"
import Profile from './component/profile/Profile.js';
import Record from './component/Records/Record.js';

function App() {
  return (
    <div className="App">
      <Nav/>
      <img src={banner} alt="" className='banner'/>
      <Profile/>
      <Record/>
    </div>
  );
} 
export default App;
