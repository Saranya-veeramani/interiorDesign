import React from 'react'
import backgroundimage from '../asserts/images/main.jpg'
import './Services.css';
import Work from '../components/Work';
import Content from'../components/Content';

const Services = () => {
  return <>
  <div className='container'>
    <div className='bg-image'>
      <img src={backgroundimage} alt='backgroundimage'/>
    </div>

    <div className='textonimage'>
          <h1>Services</h1>
          <p>Home/Services</p></div>  
    </div> 
    <Content/>
    {/* <div className="projectList">
          <div className="col">
            <h2>Heading 4</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisl id varius malesuada, felis nisl iaculis purus, eu maximus sapien est ac urna.</p>
            <a href="#">Read more</a>
          </div>
          <div className="col">
            <h2>Heading 5</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisl id varius malesuada, felis nisl iaculis purus, eu maximus sapien est ac urna.</p>
            <a href="#">Read more</a>
          </div>
          <div className="col">
            <h2>Heading 6</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod, nisl id varius malesuada, felis nisl iaculis purus, eu maximus sapien est ac urna.</p>
            <a href="#">Read more</a>
          </div>
        </div> */}
    <Work /> 
  <div>

</div>
  </>;
}
export default Services