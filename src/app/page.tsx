import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />

      <div className={styles.carsContainer} id="discover">
        <div className="home__text-container">
          <h1 className={styles.titleCarsHome}>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title='fuel'/>
            <CustomFilter title='year'/>
          </div>
        </div>
      </div>
    </main>
  );
}
