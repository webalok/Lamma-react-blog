import React from 'react'
import './Footer.css';

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
       <li><a href=''> Privacy policy </a></li>
       <li><a href=''> Shipping policy </a></li>
       <li><a href=''> Return policy </a></li>
       <li><a href=''> Sitemap </a></li>
      </ul>
     </div> 
     </div>
    </div>
   </div>
  </div>
 )
}
