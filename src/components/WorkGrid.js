// inspired by https://www.sharonyeunkim.com/
import { NavLink } from 'react-router-dom';

function WorkGrid(){
    return (
        <div >
            
            {/* <h1 style="white-space:pre-wrap;"><strong>My Work</strong></h1> */}
            <h2 class="heading" id = "work-grid">My Work</h2>
            <div class = "work">
                <div class = "work-item">
                <NavLink class="img-hover-zoom" to="/fleek">
                    <img class="fit" src="images/fleek.png" alt="fleek project thumbnail"/>
                    <h2 class="title">Iterative Redesign: Fleek</h2>
                    <p class="des">UI creation for UI/UX class</p>
                </NavLink>
                </div>
                <div class = "work-item">
                
                <NavLink class="img-hover-zoom" to="/responsiveredesign">
                    <img class="fit" src="images/responsive redesign.png" alt="responsive redesign project thumbnail"/>
                    <h2 class="title">Responsive Redesign: El Sabroso Cafe</h2>
                    <p class="des">UI creation for UI/UX class</p>
                </NavLink>
                </div>
                <div class = "work-item">
                <a class="img-hover-zoom" href="/sublettr">
                    <img class="fit" src="images/sublettr.png" alt="sublettr project thumbnail"/>
                    <h2 class="title">Hi-fi Prototyping with Figma: Sublettr</h2>
                    <p class="des">UI creation for UI/UX class</p>
                </a>
                </div>
                <div class = "work-item">
                <a class="img-hover-zoom" href="/amazon">
                    <img class="fit" src="images/amazon logo.png" alt="amazon project thumbnail"/>
                    <h2 class="title">Summer Internship: Amazon</h2>
                    <p class="des">Software Development Engineering Internship</p>
                </a>
                </div>
            </div>
        </div>
    );
}

export default WorkGrid;