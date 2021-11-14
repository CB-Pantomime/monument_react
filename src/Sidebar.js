import React from 'react'
import AboutUs from './AboutUs';
import './RecentIssuesNav';
import RecentIssuesNav from './RecentIssuesNav';

function Sidebar(){
    return(   
       <div>
           <AboutUs />,
           <RecentIssuesNav />
       </div>
    )
}

export default Sidebar;