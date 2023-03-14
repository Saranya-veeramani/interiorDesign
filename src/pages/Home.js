import React from 'react'
import './Home.css';
import Pic1 from '../asserts/images/Phototwo.jpg';
import Pic2 from '../asserts/images/Photothree.jpg';
import Pic3 from "../asserts/images/Photofour.jpg";
import Pic4 from "../asserts/images/Photofive.jpg";
import Pic5 from "../asserts/images/Photosix.jpg";
import Pic6 from "../asserts/images/Photoseven.jpg";
import Pic7 from "../asserts/images/Photoeight.jpg";
import Pic8 from "../asserts/images/Photonine.jpg";
import Pic9 from "../asserts/images/Phototen.jpg";
import Pic10 from "../asserts/images/Photoelev.jpg";
import Pic11 from "../asserts/images/Phototwe.jpg";
import Pic13 from "../asserts/images/Photothir.jpg";
import Pic14 from "../asserts/images/Photofif.jpg";
import Pic15 from "../asserts/images/Photosixt.jpg";
import Pic16 from "../asserts/images/Photosevet.jpg";
import Pic17 from "../asserts/images/Logo.jpg";
import Pic18 from "../asserts/images/Client Logo.jpg";
import Pic19 from "../asserts/images/Vector.jpg";
import Pic20 from "../asserts/images/Call.jpg";
import Pic21 from "../asserts/images/Ellipse.jpg";
import Pic23 from "../asserts/images/VectorO.jpg";

function Home() {
    return (
      <div>
                    
        <section>
          <img className='ImagePic' src={require('./Photo.jpg')} />
          
        </section>
  {/* 
           <div className='PicImg'>
           <img src={require('./Photo.jpg')} />
  
  
            
          </div> 
  <div>
        <h2> Project Plan </h2>
        <p>
          There are many variations of the <br></br>
          passages of lorem lpsum from <br></br>
          available, majority.
        </p>
        </div> */}
        <section>
  
  <div class='parent'>
             <div class='child'> <h2> Project Plan </h2>
  
             <p>There are many variations of the<br></br> 
                passages of lorem Ipsum from <br></br>
                available, majority.
             </p>
  
             <p> Read more <img src={Pic19} /></p>
            </div>
              <div class='child'> <h2> Interior Work </h2>
  
              <p>
                There are many variations of the <br></br>
                passages of lorem lpsum from <br></br>
                available, majority.
              </p>
  
              <p>Read more <img src={Pic19} /></p>
               </div>
  
               <div class='child'>  <h2> Realization </h2>
            
            <p>
              There are many variations of the <br></br>
              passages of lorem lpsum from <br></br>
              available, majority.
            </p>
  
            <p> Read more <img src={Pic19} /></p>
            </div>
        
  </div>
   </section>  
  
        <section>
  
        <div class='parent'>
             <div class='child'>
              <h2> 
                We Create The Art <br></br>
                Of Stylish Living <br></br>
                stylishly
              </h2>
              <br></br>
              <p>
                 It is a long established fact that a reader will be<br></br>
                 distracted by the of readable content of a page <br></br>
                 when lookings at its layots the points of using <br></br>
                 that it has a more-or-less normal.
              </p>
              <div class='child'>
             <img className='circleImage' src={Pic21} /> <img src={Pic20} />
             </div>
              <p>
              <div class='child'>
              <h3>012345678</h3>
                  Call Us Anytime
                </div>
              <br></br>
              <li><a href="#"><h3>Get free estimate <img src={Pic19} /></h3></a></li>
              <br></br>
              </p>
              </div>
  
              <div class='child'>
                <img className = 'ImagePic2' src={Pic1} /><br></br>
                </div>
  </div>
  
          </section> 
  
          <section>
  
              <h1> What the People Thinks <br></br>
                   About Us
              </h1>
              
            < div class = 'parent'>
  
                <div class = 'child'>
                <img class = 'People1' src={Pic2} /><h4> Nattasha Mith </h4>Sydney, USA<br></br><br></br>
              <p>
                 Lorem Ipsum is simply dummy<br></br>
                 text of the typesetting industry<br></br>
                 Ipsum has been scrambled.<br></br><br></br>
              </p>
              </div>
  
              <div class = 'child'>
              <img class = 'People2' src={Pic3} /><h4> Raymond Galario </h4>Sydney, Australia<br></br><br></br>
              <p>
                 Lorem Ipsum is simply dummy<br></br>
                 text of the typesetting industry.<br></br>
                 Ipsum has been scrambled it<br></br>
                 to make a type book.<br></br><br></br>
              </p>
              </div>
  
  
              <div class = 'child'>
              <img class = 'People3' src={Pic4} /><h4> Benny Roll </h4>Sydney, New york<br></br><br></br>
              <p>    
                 Lorem Ipsum is simply dummy<br></br>
                 text of the typesetting industry<br></br>
                 Ipsum has been scrambled.<br></br><br></br><br></br>
              </p>
              </div>
           </div>
  
              <img src={Pic18} width="800px" height="80px" /><br></br><br></br><br></br><br></br>
          
  
          </section>
  
          <section>
  
              <h1> Follow Our Projects </h1>
              <p> 
                 It is a long established fact that a reader will be distracted by the of readable<br></br>
                 content of page  lookings at its layouts  points.
              </p>
              <br></br><br></br>
  
              <div class = 'parent'>
  
                <div class = 'child'>
              <img className = 'Pic2' src={Pic5}  /><br></br><br></br>
              <h3> Modern Kitchen </h3>
                   Decor / Architecture  <img src={Pic23} />
                
              <br></br><br></br>
                </div>
  
  
  
  
              <div class = 'child'>
              <img className = 'Pic3' src={Pic6}  /><br></br><br></br>
              <h3> Modern Kitchen </h3>
                   Decor / Architecture  <img src={Pic23} />
                
              <br></br><br></br>
            </div>
  
            <br></br>
  
  
              <div class = 'child'>
              <img className = 'Pic4' src={Pic7}  /><br></br><br></br>
              <h3> Modern Kitchen </h3>
                   Decor / Architecture  <img src={Pic23} />
                  
              <br></br><br></br>
              </div>
  
              <div class = 'child'>
  
              <img className = 'Pic5' src={Pic8}  /><br></br><br></br>
              <h3> Modern Kitchen </h3>
                   Decor / Architecture  <img src={Pic23} /><br></br><br></br>
               </div>
  
           </div>    
  
          </section>
  
          <section>
            
  
              <h2> Articles & News </h2>
              <p>  It is a long established fact that a reader will be distracted by the of readable <br></br>
                   content of a page when lookings at its layouts the points of using.
              </p>
              <br></br>
  
              <div class = 'parent'>
                <div class = 'child'>
              <img className = 'Image3' src={Pic9} width="350px" height="250px" />
              <h4>
                  Let’s Get Solution For<br></br>Building Construction<br></br>
                  Work.
              </h4><br></br>26 December, 2022<br></br><img src={Pic23} />
              </div>
  
                <div class = 'child'>
              <img className = 'Image4'src={Pic10} width="350px" height="250px" />
              <h4>
                 Low Cost Latest Invented<br></br>Interior Designing<br></br>
                 Ideas.
              </h4><br></br>22 December, 2022<br></br><img src={Pic23} />
              </div>
  
              <div class = 'child'>
              <img className = 'Image5'src={Pic11} width="350px" height="250px" />
  
              <h4>
                  Best For Any Office & <br></br>Business Interior<br></br>
                  Solution.
              </h4> <br></br>25 December, 2022<br></br><img src={Pic23} />
              </div>
  
              </div>
  
  
          </section>
              <br></br>
              <br></br>
              <h1> Wanna join the interno?</h1>
              <p>
                It is a long fact will be distracted.<br></br>
                Contact With Us<img src={Pic19} /> 
              </p>
              <br></br><br></br>
   
          
  
      </div>
    );
  }
  
  export default Home;
  
  
  
  


