import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState, useEffect } from "react";
import { fetchTopAlbums, fetchTopSongs } from "../../api/api";

import Card from "../Card/Card";


export default function Tabs() {
  const [value, setValue] = React.useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const wrapperStyle = {
    display: "flex",
    gap: "40px",
    flexWrap: "wrap",
    marginBottom: "10px",
  };
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const generateData = async () => {
    try {
      const res = await fetchTopAlbums();
      setData(res);
      console.log(res,"data in tabs");
    } catch (err) {
      console.log(err);
    }
  };
  const generateData1 = async () => {
    try {
      const res = await fetchTopSongs();
      setFilterData(res);
      console.log(res);
    } catch (err) {}
  };

  useEffect(() => {
    generateData();
    generateData1();
  }, []);

  return (
    <Box sx={{ width: "100%", typography: "body1", color: "white", backgroundColor:"black" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            textColor="white"
            indicatorColor="secondary"
            backgroundColor="secondary"
          >
            <Tab label="All" value="1" />
            <Tab label="Pop" value="2" />
            <Tab label="Jazz" value="3" />
            <Tab label="Rock" value="4"/>
            <Tab label="Blues" value="5"/>
          </TabList>
        </Box>
        <TabPanel value="1">
          <div style={wrapperStyle}>
            {data.map((item) => {
              return <Card data={item} key={Math.random()} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="2">
        <div style={wrapperStyle}>
            {filterData
              .filter((item) => item.genre.label === "Pop")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
        <TabPanel value="3">
        <div style={wrapperStyle}>
            {filterData
              .filter((item) => item.genre.label === "Jazz")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
        <TabPanel value="4">
        <div style={wrapperStyle}>
            {filterData
              .filter((item) => item.genre.label === "Rock")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
        <TabPanel value="5">
        <div style={wrapperStyle}>
            {filterData
              .filter((item) => item.genre.label === "Blues")
              .map((dat) => {
                return <Card data={dat} type="Jaz" />;
              })}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}

