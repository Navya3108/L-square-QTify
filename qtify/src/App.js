import { useEffect, useState } from "react";
import "./App.module.css";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import { fetchTopAlbums } from "./api/api";
import Section from "./components/Section/Section";
import "./App.module.css";


export default function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
  }, []);
  return (
  
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
    </div>
   
  );
}
