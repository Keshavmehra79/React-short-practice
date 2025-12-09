import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Profile from './Profile';
import Welcome from './Welcome';
import Course from './Course';
import Crud from './Crud';
import Formcrud from './Formcrud';
import Crud2 from './Crud2';

const App=()=>{

  return(
    <>
    {/* <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="/welcome/:name" element={<Welcome/>}/>
      <Route path="/course/:courseid/:coursename" element={<Course/>}/>
  </Routes>
  <Formcrud/>
  <Crud/> */}

  <Crud2/>
    </>
  )
}

export default App


