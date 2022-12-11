//inspired by https://www.cindykhuang.me/work/microsoft
import Carousel from 'react-bootstrap/Carousel';

function SublettrPage(){
    return(
        <div>
            <img class="banner" src="images/sublettr.png" alt="sublettr project thumbnail"/>
            <div class = "project-content">
                <div class = "flex-grid-wrapped">
                    <div class = "flex-item">
                        <h2 class="heading">Hi-fi Prototyping with Figma: Sublettr</h2>
                        <p class="paragraph">Creating an interactive mobile interface using figma</p>
                        <div class="summary">
                            <h5>Summary</h5>
                            <p class="paragraph">
                                As part of a studio for Brown University's CS1300 UI UX course, I worked within a group to create a mini-app in an hour-long timeframe. Our concept was based off of tinder, but instead of for the purpose of dating, it was meant for renters trying to find subletters or subletters trying to find a place to stay.
                            </p>
                            <h5>Design Iterations</h5>
                            <p class="paragraph">
                                We began the design process by making a rough sketch of the interface as well as choosing a color palette: 
                                <figure>
                                    <img class="in-text-image" src="images/sublettr lofi.png" alt="sublettr lofi design"/>
                                    <figcaption>We decided to make the first two screens from the perspective of the person looking for a place to stay and having a card stack they can swipe on. The last 2 screens are from the perspective of the person looking for a subletter who can swipe on people's profile.
                                    </figcaption>
                                </figure>
                                Based on this sketch, we created these four hi-fi screens from the perspective of the person looking to sublet:
                                <Carousel variant="dark">
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/0001.jpg" alt="frame 1 of sublettr"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/0002.jpg" alt="frame 2 of sublettr"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/0003.jpg" alt="frame 3 of sublettr"/>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img class="in-text-image" src="images/0004.jpg" alt="frame 4 of sublettr"/>
                                    </Carousel.Item>
                                </Carousel>
                                Interact with the figma protype  <a class = "link in paragraph" href="https://www.figma.com/proto/83LJ4gfOOzNDrYhbNRBy4P/UI%2FUX-Studio-Exercise-9%2F21%2F22?node-id=5%3A54&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A44">here</a>!
                            </p>
                            <h5>Conclusion</h5>
                            <p class="paragraph">
                                This studio was my first introduction to Figma and I immediately loved how easy it was to make cool and interactive interfaces using Figma.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SublettrPage;