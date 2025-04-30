import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carsousel/Carsousel";

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
      {data && data.length > 0 && (
        <div className={styles.cardWrapper}>
          {!carosalToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type={type} />
              ))}
            </div>
          ) : (
            <Carousel data={data} component={(item) => <Card data={item} />} />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;
