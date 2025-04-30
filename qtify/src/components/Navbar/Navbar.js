import React,{useState}from "react";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import SearchBar from "../SearchBar/SearchBar";
import ModelNew from "../Model/Model";
import styles from './Navbar.module.css';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };
  return (
    <nav className={styles.navbar}>
      <Logo />
      <SearchBar />
      <ModelNew val={open} className="button" onClick={handleClick} />
    </nav>
  );
};

export default NavBar;
