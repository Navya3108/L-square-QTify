import React, { useEffect, useState } from "react";
import "./App.module.css";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums, fetchNewAlbums, fetchTopSongs, fetchGenres } from "./api/api";
import Section from "./components/Section/Section";

import Faqs from "./components/Faqs/Faqs";
import styles from "./App.module.css";
import Tabs from "./components/Tabs/Tabs";

export default function App() {
  const [topAlbumData, setTopAlbumData] = useState([]);
  const [newAlbumData, setNewAlbumData] = useState([]);
  const [topSongsData, setTopSongsData] = useState([]);
  const [genresData, setGenresData] = useState([]);

  const generateTopAlbumData = async () => {
    try {
      const data = await fetchTopAlbums();
      setTopAlbumData(data);
    } catch (error) {
      console.error("Error fetching top albums:", error);
    }
  };

  const generateNewAlbumData = async () => {
    try {
      const data = await fetchNewAlbums();
      setNewAlbumData(data);
    } catch (error) {
      console.error("Error fetching new albums:", error);
    }
  };

  const generateTopSongsData = async () => {
    try {
      const data = await fetchTopSongs();
      setTopSongsData(data);
    } catch (error) {
      console.error("Error fetching top songs:", error);
    }
  };

    const generateGenresData = async () => {
    try {
      const data = await fetchGenres();
      setGenresData(data);
    } catch (error) {
      console.error("Error fetching genres:", error);
    }
  };

  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateTopSongsData();
    generateGenresData();
  }, []);

  useEffect(() => {
    console.log("Top Songs Data in App:", topSongsData); // Check the data here
  }, [topSongsData]);

  return (
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper">
        <Section type="album" title="Top Albums" data={topAlbumData} />
        <Section type="album" title="New Albums" data={newAlbumData} />
        <Tabs>
          <Section data={topSongsData} title="songs" type="songs" />
        </Tabs>
      </div>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.faqs}>
        <Faqs />
      </div>
    </div>
  );
}