import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars } from "../../utils";

export default async function Home() {
  const allCars = await fetchCars()

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


        <div>
          {allCars ? (
            <section>
              WE HAVE CARS
            </section>
          ): (
            <div className="home__error-container">
              <h2>No Results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
