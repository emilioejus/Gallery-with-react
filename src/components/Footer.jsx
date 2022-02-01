import React from "react"; 
import twitter from '../assets/icons/icons-twitter.png';
import facebook from '../assets/icons/icons-facebook.png';
import instagram from '../assets/icons/icons-instagram.png';
import youtube from '../assets/icons/icons-youtube.png';
import linkedi from '../assets/icons/icons-linkedi.png';
import '../assets/styles/footer.css'
       
   
const Footer = () => {


  return (
    <footer id="footer" className="pt-4 mt-4"> 
        <div className="container ">
        <div className="row text-center pt-2">
              <div className="col-12 col-lg pb-1" >
                <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Open+Cultural+Center,+Carrer+del+Rec,+27,+08003+Barcelona/@41.3860019,2.1823493,15z/data=!4m2!3m1!1s0x12a4a2fdd0e3846f:0x5b7de3c819c66eb0">OUR CENTERS</a>
              </div>
              <div className="col-12 col-lg pb-1">
                <a target="_blank" rel="noreferrer" href="https://openculturalcenter.org/contact/">CONTACT US</a>
              </div>
              <div className="col-12 col-lg pb-1">
                <a target="_blank" rel="noreferrer" href="/">TERMS AND CONDITIONS</a>
              </div>
              <div className="col-12 col-lg pb-1">
                <a target="_blank" rel="noreferrer" href="/">FREQUENT QUESTIONS</a>
              </div>
          </div>
          <div className="row text-center justify-content-lg-center pb-4 pt-4">
              <div className="col-12 col-lg-1 pr-0 pl-0 pb-1">
                <a target="_blank" rel="noreferrer" href="/"><img src={twitter} alt="logo-twitter" width="40rem" /></a>
              </div>
              <div className="col-12 col-lg-1 pr-0 pl-0 pb-1">
                <a target="_blank" rel="noreferrer" href="/"><img src={facebook} alt="logo-facebook" width="40rem" /></a>
              </div>
              <div className="col-12 col-lg-1 pr-0 pl-0 pb-1">
                <a target="_blank" rel="noreferrer" href="/"><img src={instagram} alt="logo-instagram" width="40rem" /></a>
              </div>
              <div className="col-12 col-lg-1 pr-0 pl-0 pb-1">
                <a target="_blank" rel="noreferrer" href="/"><img src={youtube} alt="logo-youtube" width="40rem" /></a>
              </div>
              <div className="col-12 col-lg-1 pr-0 pl-0 pb-1">
                <a target="_blank" rel="noreferrer" href="/"><img src={linkedi} alt="logo-linkedi" width="40rem" /></a>
              </div>
          </div>
          <div className="row text-center">
              <div className="col-12 col-lg pb-2 pt-2">
                 ©Copyright. 2021 Movidere. All rights reserved.
              </div>
          </div>
        </div>
    </footer>
  );
};

  
export default Footer;