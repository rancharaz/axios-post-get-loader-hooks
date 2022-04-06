 
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from './Segments/Navbar';
import Homepage from './Pages/Homepage'
import Aboutus from './Pages/Aboutus'
import Gallery from './Pages/Gallery'
import Signup from './Pages/Signup'
import Create from './Pages/Create';
import Show from './Pages/Show';
import Signoff from './Pages/Signoff';
import CounterContextProvider from './Context/CounterContext';
import Morepages from './Pages/Morepages';
import ShowContextProvider from './Context/ShowContext';


function App() {

 

  return (
   <CounterContextProvider>
   <Router>
   <Navbar/>
   <Routes>
     <Route path="/" element={<Homepage  />} />
     <Route path="/aboutus" element={<Aboutus  />} />
     <Route path="/Gallery" element={<Gallery />} />
     <Route path="/signup" element={<Signup />} />
     <Route path="/create" element={<Create  />} />
     <Route path="/show" element={<Show/>} />
     <Route path="/signoff" element={<Signoff/>} />
     <Route path="/morepages" element={<Morepages />} />
   </Routes>
   </Router>
      
   </CounterContextProvider>
  );
}

export default App;
