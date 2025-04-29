import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import Card from "../Card/Card";
import styles from "./Section.module.css";

const Section = ({ title, data, type }) => {
  const [carosalToggle, setCarosalToggle] = useState(false);

  const handleToggle = () => {
    setCarosalToggle(!carosalToggle);
  };

  return (
    <div className={styles.sectionwrapper}>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {carosalToggle ? "Show all" : "Collapse all"}
        </h4>
      </div>
      {data.length === 0 ? (
        <CircularProgress />
      ) : (
        <div className={styles.cardWrapper}>
          <div className={styles.wrapper}>
            {data.map((item) => (
              <Card key={item.id} data={item} type={type} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Section;