import React from 'react'
import Logo from'../asserts/images/Logo.jpg';
import './AboutUs.css';
import Photo from '../asserts/images/Photo.jpg';
import Photo1 from '../asserts/images/Photo1.jpg';
import Photo2 from '../asserts/images/Photo2.jpg';
import Content from '../asserts/images/Content.jpg'

 
function AboutUs() {
  
    return( <><img src={Logo} width="20px" height="20px" />
    <h3>Interno</h3><><><><><><><><><>
      <ul style={{ textAlign: "right" }}>Home Pages Services Project Blog Contact</ul>


    <img src={Photo} width="1500px" height="150px"></img></><h1 style={{ textAlign: "center" }}>About Us</h1>
      <p style={{ textAlign: "center" }}>Home/About Us</p>
      <section>
        <h3 style={{ textAlign: "center" }}><i>"I like interior design labelling.I don't</i></h3>
        <h3 style={{ textAlign: "center" }}><i>really want someone to walk into a room and</i></h3>
        <h3 style={{ textAlign: "center" }}><i>know that I did it"</i></h3>
        <p style={{ textAlign: "center" }}>BUNNY WILLIAMS</p>
      </section>
    </><h1>What We Do</h1></><>
        <p>It is a long established fact that a reader will be</p><p>distracted by the readable content of the page</p>
        <p>when looking at layout content using that</p><button>Our Concept</button></></>
      <div class="center">
        <img src={Photo1} width="400px" height="300px" />
      </div>
      <h1 style={{ textAlign: "right" }}>The End Result</h1>

      <p style={{ textAlign: "right" }}>It is a long established fact that a leader will be</p></>

      <p style={{ textAlign: "right" }}>distracted by the readable content of a page</p>
      <img src={Photo2} width="400px" height="300px" />
    </><img src={Content} width="800px" height="500px" />
      <h1 style={{ textAlign: "center" }}>Creative Projects Let's have</h1>
      <h1 style={{ textAlign: "center" }}>a productive talk</h1>
      <label>Name</label>
      <hr></hr>
      <section>Email</section>
      <hr></hr>
    </><label> Hello I am interested in..</label><hr></hr><button>Send Now</button>
      <img src={Logo} width="20px" height="20px" /><ul><h2>Interno</h2></ul>

    </></></>
          
)
}




          export default AboutUs;
      