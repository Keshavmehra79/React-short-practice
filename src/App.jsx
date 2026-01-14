import {Routes,Route} from 'react-router-dom'
import Home from "./Home";
import Profile from './Profile';
import Welcome from './Welcome';
import Course from './Course';
import Crud from './Crud';
import Formcrud from './Formcrud';
import Crud2 from './Crud2';
import Search from './search';
import Layout from './.pages/Layout';
import Fullpage from './fullpage';
const App=()=>{

  return(
    <>
     <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path="/profile/:username" element={<Profile/>}/>
      <Route path="/welcome/:name" element={<Welcome/>}/>
      <Route path="/course/:courseid/:coursename" element={<Course/>}/>
      </Route>
  </Routes> 

  <Routes>
    <Route path='fullpage' element={<Fullpage/>}/>
  </Routes>
    </>
  )
}

export default App


