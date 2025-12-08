import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Profile from './Profile';
import Welcome from './Welcome';
import Course from './Course';
import Crud from './Crud';

const App=()=>{

  return(
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="/welcome/:name" element={<Welcome/>}/>
      <Route path="/course/:courseid/:coursename" element={<Course/>}/>
  </Routes>
  <Crud/>
    </>
  )
}

export default App


