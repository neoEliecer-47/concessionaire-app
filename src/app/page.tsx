import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import { fetchCars } from "../../utils";
import CarCard from "@/components/CarCard";
import { fuels, yearsOfProduction } from "../../constants";
import { HomeProps } from "../../types";
import DropdownMenu from "@/components/DropdownMenu";
import ShowMore from "@/components/ShowMore";
import ScrollToFiltersButton from "@/components/ScrollToFiltersButton";

export default async function Home({ searchParams }: HomeProps) {
  const filters = await searchParams;
  const allCars = await fetchCars({
    manufacturer: filters?.manufacturer || "",
    model: filters?.model || "",
    year: filters?.year || 2012,
    fuel: filters?.fuel || "",
    limit: filters?.limit || 10, //this limits the number of cars we get from the API, and it chenges when we click on the show more button
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className={styles.main}>
      <Hero />

      <div className={styles.carsContainer} id="discover">
        <div className="home__text-container">
          <h1 className={styles.titleCarsHome}>Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters" id="filters">
          <div className="home__filter-container">
            <DropdownMenu placeholder="Fuel" data={fuels} />
            <DropdownMenu placeholder="Year" data={yearsOfProduction} />
          </div>
          <SearchBar />
        </div>

        <ScrollToFiltersButton />

        <div>
          {!isDataEmpty ? (
            <section>
              <div className="home__cars-wrapper">
                {allCars?.map((car, index) => (
                  <CarCard car={car} key={index} />
                ))}
              </div>

              <ShowMore
                pageNumber={(filters?.limit || 10) / 10}
                isNext={(filters?.limit || 10) > allCars?.length} //if the limit is less than the number of cars we get from the API, we will show the button
              />
            </section>
          ) : (
            <div className="home__error-container">
              <h2
                style={{ color: "black", font: "1.25rem", fontWeight: "700" }}
              >
                No results found
              </h2>
              {allCars?.message}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
