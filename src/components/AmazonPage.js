//inspired by https://www.cindykhuang.me/work/microsoft

function AmazonPage(){
    return(
        <div>
            <img class="banner" src="images/amazon logo.png" alt="amazon project thumbnail"/>
            <div class = "project-content">
                <div class = "flex-grid-wrapped">
                    <div class = "flex-item">
                        <h2 class="heading">Summer Internship: Amazon</h2>
                        <p class="paragraph">Software Development Engineer Intern</p>
                        <div class="summary">
                            <h5>Summary</h5>
                            <p class="paragraph">
                            Over this summer, I worked with the Global Store team to improve the experience of Amazon internal business users when creating global product promotions. The goal for my project was to integrate an API that would make the creating of shipping promotions more extensive and efficient.
                            </p>
                            <h5>Project Overview</h5>
                            <p class="paragraph">
                                During the summer of 2022, I was an intern for Amazon's Global Store team. For my project, I worked with integrating an API to support the creation of Shipping Promotion objects and then designed and implemented a very simple UI so that business users could easily create these promotions. 
                                When a shipping promotion was created, it would get added to internal databases and through other processes would result in discounts for products in global markets. 
                            </p>
                            <h5>Conclusion</h5>
                            <p class="paragraph">
                                I really enjoyed my summer and was challenged a lot. I was always hesitant to work in the front-end so this summer took me out of my comfort zone. I also learned to use my resources since I am normally a very shy and reserved person but was able to ask for help from my manager and mentor whenever I needed it. I still have so much to learn!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AmazonPage;