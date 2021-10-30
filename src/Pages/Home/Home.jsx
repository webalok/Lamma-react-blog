import './Home.css';
import Header from '../../Components/Header/Header';
import Posts from '../../Components/Posts/Posts';
import Sidebar from '../../Components/Sidebar/Sidebar';

export default function Home() {
 return (
  <div>
   <Header />
   <div className='rootHome'>
    <div className='container-fluid'>
     <div className='row'>
      <div className='col-md-9 recentPosts'>
       <Posts />
      </div>
      <div className='col-md-3'>
       <Sidebar />
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}
