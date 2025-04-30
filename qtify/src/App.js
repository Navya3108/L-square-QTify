import { useEffect, useState } from "react";
import "./App.module.css";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { fetchTopAlbums,fetchNewAlbums,fetchTopSongs} from "./api/api";
import Section from "./components/Section/Section";
import Tabs from "./components/Tabs/Tabs";
import Faqs from "./components/Faqs/Faqs";
import styles from "./App.module.css";


export default function App() {
  const [topAlbumData, settopAlbumData] = useState([]);
  const [newAlbumData,setnewAlbumData]=useState([]);
  const [TopSongsData,setTopsongsData]=useState([]);
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
  const generateTopSongsData=async () => {
    const data = await fetchTopSongs();
    console.log(data);
    setTopsongsData(data);
  };
  useEffect(() => {
    generateTopAlbumData();
    generateNewAlbumData();
    generateTopSongsData();
  }, []);
  return (
  
    <div className="App">
      <NavBar />
      <Hero />
      <div className="sectionWrapper" >
      <Section type="album" title="Top Albums" data={topAlbumData} />
      <Section type="album" title="New Albums" data={newAlbumData} />
      <Tabs>
          <Section data={TopSongsData} title="songs" type="songs" />
        </Tabs>
      </div>
      <h1 className={styles.heading}>FAQs</h1>
      <div className={styles.faqs}>
        <Faqs />
      </div>
    </div>
   
  );
}
