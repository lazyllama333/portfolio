//inspired by https://www.cindykhuang.me/work/microsoft

function FleekPage(){
    return(
        <div>
            <img class="banner" src="images/fleek.png" alt="fleek project thumbnail"/>
            <div class = "project-content">
                <div class = "flex-grid-wrapped">
                    <div class = "flex-item">
                        <h2 class="heading">Iterative Redesign: Fleek Startup</h2>
                        <p class="paragraph">Designing a mobile interface for a a vintage wholesale marketplace startup</p>
                        <div class="summary">
                            <h5>Summary</h5>
                            <p class="paragraph">
                                As part of Brown University's CS1300 UI UX course, I worked within a group to design an interactive interface for an emerging startup. We chose to design Fleek, which is a B2B Wholesale marketplace for second-hand fashion. This startup is targeted at a younger, millennial or Gen-Z audience (hence the name). Buyers can buy clothing in bulk, often in the form of bundles, directly from the seller. Buyers are comprised largely of vintage stores and online resellers. Suppliers include clothing wholesalers, rag-houses, and donation centers.
                                We chose to design a mobile interface because it's easier to snap and then upload pictures this way,the service is targeted towards a younger and trendier audience, and finally, it creates a more social-media like experience that will hopefully make the user feel like they're doing something fun rather than working.
                            </p>
                            <h5>Design Iterations/Feedback</h5>
                            <p class="paragraph">
                                We began the process with creating rough sketches of a potential interface. Combining our ideas, we created the following low-fidelity mockup:
                                <figure>
                                <img class="in-text-image" src="images/lofi-fleek.png" alt="fleek lofi design"/>
                                <figcaption>We decided at first to create an app the worked for the buyer and the seller, where you would choose which one you wanted to be when you first set up an account. 

We decided on a navigation bar at the bottom for easy, thumb-accessibe navigation, and we felt that it was important to have a search page where you could discover, search and filter items, a chat page where you could negotiate possible deals and connect with sellers/buyers, and a profile page including your favorited/saved items. Searching is of course very important functionality, but we wanted to add a profile and chat to foster more interpersonal connection.
                                </figcaption>

                                </figure>
                            Based on this Lofi mockup, we created a hifi mockup on figma and received the following feedback from classmates and real users using user testing: 
                            <ul>
                                <li>Giving users the option of both seller and buyer was confusing and perhaps too much for one app</li>
                                <li>The quantity vs amount of pieces shown was confusing</li>
                                <li>adding functionality to view favorited items and order history would be useful</li>
                            </ul>
                            From this, we landed on the following hifi-mockup:
                            <div class="gallery-container3">
                                <a href="https://www.figma.com/proto/7Ici04r5Eis32N0W7683IF/fleek?node-id=114%3A60&amp;scaling=scale-down&amp;page-id=114%3A46&amp;starting-point-node-id=114%3A60" >
                                <img class = "in-text-image" src="images/fleek-hifi.png" alt="fleek prototype"/>
                                <p>Click to visit hifi mockup in Figma!</p>
                                </a>
                            </div>
                                
                            </p>
                            <h5>Conclusion</h5>
                            <p class="paragraph">
                                Overall, this project helped me refine my design skills and gave me experience with creating an interface for a real company and receiving real user feedback. We went through many design iterations to land on our final design, but in the end there are still some 
                                improvement areas. Potential interface changes we could make are clearly indicating that each bundle includes X pieces, so we can put conversions for the quantities. For example, if each bundle includes 20 pieces, picking quantity 1 will show (20pc), quantity 2 (40pc), etc. As well, we could have live time assistance with an employee through our chat feature, which one user was hoping to see.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FleekPage;