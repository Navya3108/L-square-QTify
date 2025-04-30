import { useEffect, useState } from "react";
import "./App.module.css";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";

import { fetchTopAlbums,fetchNewAlbums} from "./api/api";
import Section from "./components/Section/Section";
import "./App.module.css";


export default function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const [newAlbumData,setnewAlbumData]=useState([]);
  const generateTopAlbumData = async () => {
    const data = await fetchTopAlbums();
    console.log(data);
    settopAlbumData(data);
  };
  const generateNewAlbumData = async () => {
    const data = await fetchNewAlbums();
    console.log(data);
    setnewAlbumData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
  }, []);
  return (
  
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      </div>
      <div className="sectionWrapper" >
      <Section type="album" title="New Albums" data={topAlbumData} />
      </div>
    </div>
   
  );
}
