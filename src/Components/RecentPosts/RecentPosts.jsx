import './RecentPosts.css';

export default function RecentPosts() {
 return (
  <>
   <div className='col-md-4 recentPostInfo'>
    <div className='postFeaturedImg'>
     <img src={'Assets/postFeaturedImg.jpg'} alt='banner image' className='img-fluid' />
    </div>
    <div className='postCategory'>
     <span className=''>Valance</span> | <span className=''>Grommet</span>
    </div>
    <div className='postHeading'>
     NTPC share is good choice to buy today
    </div>
    <div className='postedDate'>
     08 october 2021
    </div>

    <div className='postDescription'>
     New Delhi is the capital of India and an administrative district of the National Capital Territory of Delhi. New Delhi is the seat of all three branches of the government of India, hosting the Rashtrapati Bhavan, Parliament House, and the Supreme Court of India.
    </div>
   </div>
  </>
 )
}
