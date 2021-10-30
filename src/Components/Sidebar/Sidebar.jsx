import './Sidebar.css';

export default function Sidebar() {
 return (
  <div className='rootSideBar'>
   <div className='sidebar-area-1'>
    <span className='sideBarHeading'>About Company</span>
    <div className='sideBarProfilePic'>
     <img src={'Assets/about-company.png'} alt='about company' className='img-fluid' />
    </div>
    <div className='sideBarCompDesc'>
     <b> Woven Craft </b> are used as window treatment. In a valance, when a half-circle is created by pleating or gathering fabric then it is called swag and such valances are called swag valance.
    </div>
   </div>

   <div className='sidebar-area-2'>
    <span className='sideBarHeading'>Categories</span>
    <div className='sideBarCompDesc'>
      <ul className='categoryUl'>
       <li>Valances</li>
       <li>Draperies</li>
       <li>Quilting</li>
       <li>Velvet Bags</li>
       <li>Curtains</li>
       <li>Table skirts</li>
      </ul>
    </div>
   </div>

   <div className='sidebar-area-3'>
    <span className='sideBarHeading'>Youtube Channel <i className="fab fa-youtube"></i></span>
    <div className='sideBarCompDesc'>
     <b> Woven Craft </b> are used as window treatment. In a valance, when a half-circle is created by pleating or gathering fabric then it is called swag and such valances are called swag valance.
    </div>
   </div>   
  </div>
 )
}
