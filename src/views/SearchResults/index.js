import React, { Fragment } from 'react';

import QuarterGrid from '../../components/QuarterGrid/quarterGrid';

import './searchResults.css';

const titleSongs = 'Songs';
const titleArtists = 'Artists';
const titleAlbums = 'Albums';
const titlePlaylists = 'Playlists';
const subtitle = 'RESULTS';

export default () => {
  return (
    <Fragment>
      <div className="container">
        <div className="search-results">
          <div className="search-results__title">Search results for: </div>
          <div className="search-results__wrap">
            <QuarterGrid title={titleSongs} subtitle={subtitle} />
            <div className="search-results__divider--vertical" />
            <QuarterGrid title={titleArtists} subtitle={subtitle} />
            <div className="search-results__divider--horizontal" />
            <QuarterGrid title={titleAlbums} subtitle={subtitle} />
            <div className="search-results__divider--vertical" />
            <QuarterGrid title={titlePlaylists} subtitle={subtitle} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
