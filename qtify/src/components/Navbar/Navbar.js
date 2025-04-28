import React from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import styles from './Navbar.module.css';
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <Button text="Give Feedback" />
    </nav>
  );
};

export default NavBar;
