import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import SideBar from '../../components/Sidebar/sidebar';
const access_token_storage = localStorage.getItem('access_token');
const userId = localStorage.getItem('userId');

const ArtistsList = () => {
  if (access_token_storage && userId) {
    return (
      <Fragment>
        <SideBar />
        <div className="container">
          <Link to="/artists/1">Artists</Link>
        </div>
      </Fragment>
    );
  } else {
    return <Redirect to="/login" />;
  }
};

export default ArtistsList;
