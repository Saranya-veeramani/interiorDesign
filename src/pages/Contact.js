import React from 'react';
import cover from'../asserts/images/Photo (24).jpg';
import map from '../asserts/images/Photo (23).jpg';
import phone from '../asserts/images/Vector (4).svg';
import facebook from'../asserts/images/fb.jpg';
import twitter from'../asserts/images/twitter.jpg';
import insta from'../asserts/images/insta.jpg';
import ins from '../asserts/images/in.jpg';
import ContactForm from'../components/ContactForm';
import iconmap from'../asserts/images/Vector (7).svg';
import './Contact.css';


const Contact = () => {
  return <><div ClassName='coverimg'>
  <img  style={{ position: 'relative', objectFit:'cover',
  width:'1300px',
height:'300px',}}
    src={cover} />

<div ClassName='textonimage1' style={{position: 'absolute',
    top: '52%',
    left: '40%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '10px',
    width:'150px',
}}>
    <h1  style={{
      fontSize:'25px',
      textAlign:'center',
    }}> Contact Us</h1>
    <p style={{
      fontSize:'20px',
      textAlign:'center',
    }}>Home/Contact</p>
  </div></div>
  
    <div className='text' style={{
      textAlign:'center',
        position:'relative',
      marginRight:'20%',
      marginTop:"5%",

    }}>      
  <h2 style={{
    fontSize:'20px'
  }}> We love meeting new people
    <br/>and helping them.</h2>
    </div>

    <div ClassName='conbox' style={{
      position: 'absolute',
      top: '600px',
      left: '250px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'lightgrey',
      padding: '10px',
      width:'250px',
      height:'250px',display:'flex', flexDirection:'column',margin:0,padding: '10px',fontSize:'20px',
      textAlign:'left',borderRadius:'40px',
    }}>
    <p> info@yourdomain.com</p>
    <br/>
    <span><img src={phone}style={{
      width:'20px', height:'20px'
    }} /><p> +1(378)400-1234</p></span>
    <br/>
    <p> www.yourdomain.com</p></div>
    <div className='social' style={{
      position:'absolute', left:'200px',top:'700px', display:'inline'
    }}><img src={facebook} />
    <img src={twitter} />
    <img src={ins} />
    <img src={insta} /></div>
  <ContactForm />  
  <img src={map}style={{
    objectFit:'fill', position:'absolute', left:'5%', top:'130%', 
  }} /><img src={iconmap} style={{
    position:'absolute',top:'150%', right: '30%'
  }}/>
</>;
}

export default Contact;