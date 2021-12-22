import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import MainState from '../contexts/mainState';
import ListBooks from './friendsList';
import AddFriend from './AddFriend';
export default function MainContainer() {
  return (
    <div>
      <MainState>
        <AddFriend />
        <NavBar />
        <SearchBar />
        <ListBooks />
      </MainState>
    </div>
  );
}
