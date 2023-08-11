
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Rootlayout from './layouts/Rootlayout'
import Home  from './pages/Home'
import About from './pages/About'
// import Contact from './pages/Contact'
import Error from './pages/Error'
import CareerLayout from './layouts/CareerLayout'
import Careers, { careerLoader } from './pages/Careers'
import CareerError from './pages/CareerError'
import CareerDetail, { jobDetailLoader } from './pages/CareerDetail'
import ContactLayout from './layouts/ContactLayout'
import Mail from './pages/Mail'
import Phone from './pages/Phone'



const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Rootlayout/>}>
    <Route index element={<Home/>}/>
    <Route path='About' element={<About/>}/>
    <Route path='contact' element={<ContactLayout/>}>
      <Route path='mail' element={<Mail/>}/>
      <Route path='phone' element={<Phone/>}/>
    </Route>

    <Route path='*' element={<Error/>}/>
    
    <Route path='careers' element={<CareerLayout/>}>
      <Route index element={<Careers/>} loader={careerLoader} errorElement={<CareerError/>}  />
      <Route path=':id' element={<CareerDetail/>}   loader={jobDetailLoader} errorElement={<CareerError/>}/>
    </Route>
  </Route>
  )
)
function App() {
  return (
<RouterProvider router={router}/>
  )
}

export default App