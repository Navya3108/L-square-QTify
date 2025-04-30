import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import styles from "../../components/Section/Section.module.css";
import { fetchTopAlbums, fetchTopSongs } from "../../api/api";
import Card from "../Card/Card";

export default function Tabs() {
    console.log("Component mounted");
    console.log(styles);
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
    } catch (err) {
      console.log(err);
    }
  };
  const generateData1 = async () => {
    try {
      const res = await fetchTopSongs();
      setFilterData(res);
    } catch (err) {}
  };

  useEffect(() => {
    async function fetchData() {
      await generateData();
      await generateData1();
    }
    fetchData();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1", color: "white" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider",backgroundColor: "black" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="white"
            indicatorColor="secondary"

          >
            <Tab label="All" value="1" />
            <Tab label="Pop" value="2" />
            <Tab label="Jazz" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1" style={{ backgroundColor: "black" }}>
          <div className={styles.wrapper}>
            {data.map((item) => {
              return <Card data={item} key={Math.random()} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2" style={{ backgroundColor: "black" }}>
          <div className={styles.wrapper}>
            {filterData
              .filter((item) => item.genre.label === "Pop")
              .map((dat) => {
                return <Card data={data} type="Pop" />;
              })}
          </div>
        </TabPanel>
        <TabPanel value="3" style={{ backgroundColor: "black" }}>
          <div className={styles.wrapper}>
            {filterData
              .filter((item) => item.genre.label === "Jazz")
              .map((dat) => {
                return <Card data={data} type="Jazz" />;
              })}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
