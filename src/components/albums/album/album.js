import React, { Component } from 'react';

import Popup from '../../../components/Popup/component';
import Card from '../../Card/card';
import { getAlbumTracks } from '../../../services/tracks';
import { albumTracks } from '../../../utils/spotifyResponseParsers';

const createPopup = (tracks, title, subtitle, date) => (
  <Popup tracks={tracks} title={title} subtitle={subtitle} date={date} />
);

class Album extends Component {
  state = {
    tracks: []
  };

  componentDidMount() {
    const { albumId } = this.props;
    getAlbumTracks(albumId).then((response) => {
      const tracks = albumTracks(response);
      this.setState({ tracks });
    });
  }

  render = () => {
    const { children, imgSrc, size, title, date, artist, albumId } = this.props;
    const { tracks } = this.state;
    const popUp = createPopup(tracks, title, artist.name, date);
    return (
      <Card
        imgSrc={imgSrc}
        size={size}
        title={title}
        subtitle={artist.name}
        subtitleHref={`/artists/${artist.id}`}
        key={albumId}
        id={albumId}
        popup={popUp}
        date={date}
        hasHover={true}
      />
    );
  };
}

export default Album;
