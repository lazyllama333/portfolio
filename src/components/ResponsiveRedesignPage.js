//inspired by https://www.cindykhuang.me/work/microsoft
import Carousel from 'react-bootstrap/Carousel';

function ResponsiveRedesignPage(){
    return(
        <div>
            <img class="banner" src="images/responsive redesign.png" alt="responsive redesign project thumbnail"/>
            <div class = "project-content">
                <div class = "flex-grid-wrapped">
                    <div class = "flex-item">
                        <h2 class="heading">Responsive Redesign: El Sabroso Cafe</h2>
                        <p class="paragraph">Redesigning a responsive interface for a simple restaurant website</p>
                        <div class="summary">
                            <h5>Summary</h5>
                            <p class="paragraph">
                                As part of Brown University's CS1300 UI UX course, I identified flaws in an existing interface (found <a   class = "link in paragraph" href="http://www.elsabrosocoffeeshop.com/home.html"> here</a>) and created a new and improved interface. I found the website to be outdated and not as clean as it could be because of overlapping elements and poor layout. 
                                Using <a class = "link in paragraph" href="https://wave.webaim.org/">WAVE</a>, I also found many accessibility issues, some of which included missing alt text, low contrast, etc. 
                            </p>
                            <h5>Design Iterations</h5>
                            <p class="paragraph">
                                I began the redesign process by creating lofi sketches of the interface for each type of screen (mobile, tablet, desktop):
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/mobile lofi.png" alt="lofi mobile interface el sabroso cafe"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/tablet lofi.png" alt="lofi tablet interface el sabroso cafe"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/lofi desktop.png" alt="lofi desktop interface el sabroso cafe"/>
                                    </Carousel.Item>
                                </Carousel>
                            Here are the issues my lofi design addressed:
                            <ul>
                                <li>You can clearly see the name of the restaurant and it is not hidden behind images like it was in the original website</li>
                                <li>I decided to split the website into horizontal sections to keep a consistent and more minimalist design</li>
                                <li>Instead of the small slideshow on the original website that didn't let you see the food well, I decided to put a large picture of a dish to immediately give the user an idea of the food and also keep a minimalist design</li>
                                <li>I used a hamburger menu for the mobile and tablet interfaces because the nav bar would not fit or be efficient on such a smaller screen</li>
                            </ul>
                            Based on this Lofi mockup, I created a hifi mockup on figma using a visual style guide I made in which I made color palette and font choices. Here are the mockups for each screen type: 
                            <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/iphone hifi.jpeg" alt="hifi mobile interface el sabroso cafe"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/tablet hifi.jpeg" alt="hifi tablet interface el sabroso cafe"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/desktop hifi.jpeg" alt="hifi desktop interface el sabroso cafe"/>
                                    </Carousel.Item>
                            </Carousel>
                            Here is how my hifi designs made the interface responsive:
                            <ul>
                                <li>The tablet and mobile versions have hamburger menus</li>
                                <li>The font sizes change with each different screen size</li>
                                <li>I made use of flex box features</li>
                            </ul>
                            Finally, using my hifi prototype I coded the website using html and css. Find my website <a class = "link in paragraph" href="https://lazyllama333.github.io/elsabrosocafe/">here</a>.
                            </p>

                            <h5>Conclusion</h5>
                            <p class="paragraph">
                                This project was very challenging for me since it was my first time making a website from scratch. I always took website responsiveness for granted so this project gave me some insight into all the decisions web developers have to make. 
                                I also really liked exploring my creative side as I made visual design choices. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResponsiveRedesignPage;