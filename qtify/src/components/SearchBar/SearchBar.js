import React from "react";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import styles from "./SearchBar.module.css";
import "../helpers.js"

const SearchBar = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.search}
          placeholder="Search an album of your choice"
        />
        <button className={styles.searchbutton}>
          <SearchIcon className="searchicon" />
        </button>
      </div>
    </>
  );
};
export default SearchBar;
