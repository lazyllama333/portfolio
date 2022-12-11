import Intro from './Intro';
import Border from './Border';
import WorkGrid from './WorkGrid';
import { Outlet} from "react-router-dom";
function Home() {
    return (
      
      <div className="App">
    
        <div class = "section">
          <Intro/>
        </div>
        <Border/>
        <div class = "section">
          <WorkGrid/>
          <Outlet />
        </div>
      </div>
    );
  }
  
  export default Home;