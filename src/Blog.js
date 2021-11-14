// um ya get react in here
import React from 'react';

// import styles for Blog
import './Blog.css';

// import components that comprise Blog
import Nav from './Nav';
import Header from './Header';

// Blog displays full 'article' from Article
// Landing will have Archive, w/ Articles passed into it
import Article from './Article';

// Sidebar includes *AboutUs* and *RecentIssuesNav*
import Sidebar from './Sidebar';
import Comment from './Comment';

// This the *Blog only footer* w/ abbreviated get in touch email subscribe form
import Footer from './Footer';

   
function Blog() {

    return (
      <div>
        < Nav />,
        < Header />,
        < Article />,
        < Sidebar />,
        < Comment />,
        < Footer />
      </div>
    );

  }		

export default Blog;