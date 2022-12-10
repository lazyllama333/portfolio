import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation';
import Intro from './components/Intro';
import Border from './components/Border';
import 'bootstrap/dist/css/bootstrap.min.css';
import WorkGrid from './components/WorkGrid';
import { BrowserRouter, Routes, 
  Route, Redirect,} from "react-router-dom";
import FleekPage from './components/FleekPage';
import Home from './components/Home';
import ResponsiveRedesignPage from './components/ResponsiveRedesignPage';
import ScrollToTop from './components/ScrollToTop';
import SublettrPage from './components/SublettrPage';
import AmazonPage from './components/AmazonPage';

function App() {
  return (
    <BrowserRouter>
        <div>
          {/* <Home /> */}
          <ScrollToTop/>
          <Navigation/>
            <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="fleek" element={<FleekPage/>}/>
             <Route path="responsiveredesign" element={<ResponsiveRedesignPage/>}/>
             <Route path="sublettr" element={<SublettrPage/>}/>
             <Route path="amazon" element={<AmazonPage/>}/>
           </Routes>
        </div> 
      </BrowserRouter>
  );
}

export default App;
