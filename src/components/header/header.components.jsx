import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

import './header.css';

const Header = () => (
  <div className="header">

    <div className="header__left">
      <IconButton>
        <MenuIcon />
      </IconButton>
    </div>

    <div className="header__middle">
      <FormControl className="header__middle__form">
        <InputLabel className="header__middle__form" id="demo-simple-select-label">Base Currency</InputLabel>
        <Select>
          <MenuItem value={"JPY"}>JPY</MenuItem>
          <MenuItem value={"USD"}>USD</MenuItem>
          <MenuItem value={"EUR"}>EUR</MenuItem>
        </Select>
      </FormControl>
    </div>

    <div className="header__right">
      <IconButton>
        <AppsIcon />
      </IconButton>
      <IconButton>
        <NotificationsIcon />
      </IconButton>
      <Avatar />
    </div>

  </div>
);


export default Header;
