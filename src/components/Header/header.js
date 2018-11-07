import React, { Component } from 'react';

import './header.css';

import triangleImg from '../../assets/img/triangle.png';
import playlisticonImg from '../../assets/img/playlisticon.png';
import mountainImg from '../../assets/img/mountain.png';
import Search from '../../components/Search/search';
import { getUserInfo } from '../../services/user';

export default class Header extends Component {
  state = {
    name: '',
    profilePicture: ''
  };

  componentDidMount() {
    getUserInfo().then((response) => {
      const name = response.data.display_name;
      const profilePicture = response.data.images[0].url;
      this.setState({
        name,
        profilePicture
      });
    });
  }
  render = () => (
    <div className="header">
      <div className="header__icon">
        {this.state.profilePicture && (
          <img
            className="header__icon-image"
            alt="User Profile"
            src={this.state.profilePicture}
          />
        )}
      </div>
      <div className="header__wrap">
        <p className="header__user-name">{this.state.name}</p>
        <a className="header__user-profile" href="#viewprofile">
          VIEW PROFILE
        </a>
      </div>
      <img className="header__image-triangle" alt="" src={triangleImg} />
      <div className="header__devider" />
      <Search />
      <div className="header__icon-right">
        <img className="header__image-playlist" alt="" src={playlisticonImg} />
        <div className="header__devider" />
        <img className="header__image-mountain" alt="" src={mountainImg} />
      </div>
    </div>
  );
}