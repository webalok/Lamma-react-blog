import React from 'react'
import './Footer.css';
import { Link } from "react-router-dom";

export default function Footer() {
 return (
  <div className='rootFooter'>
   <div className='container-fluid'>
    <div className='row'>
     <div className='col'>
      <div className='text-start'> &copy; 2021 by react lover </div>
     </div>
     <div className='col'>
     <div className='text-end'>
      <ul className='footerMenuList'>
       <li><Link to="/privacy-policy">  Privacy policy  </Link></li>
       <li><Link to="/shipping-policy"> Shipping policy </Link></li>
       <li><Link to="/return-policy">   Return policy   </Link></li>
       <li><Link to="/sitemap">         Sitemap         </Link></li>
      </ul>
     </div> 
     </div>
    </div>
   </div>
  </div>
 )
}
