import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import CustomFilter from "@/components/CustomFilter";
import { fetchCars, generateCarImageUrl } from "../../utils";
import CarCard from "@/components/CarCard";
import { fuels, manufacturers, yearsOfProduction } from "../../constants";
import { HomeProps } from "../../types";
import DropdownMenu from "@/components/DropdownMenu";
import { useState } from "react";

export default async function Home({ searchParams }: HomeProps) {
  const allCars = await fetchCars({
    manufacturer: searchParams?.manufacturer || '',
    model: searchParams?.model || '',
    year: searchParams?.year || 2010,
    fuel: searchParams?.fuel || '',
    limit: searchParams?.limit || 10,
  });
 
  const isDataEmpty = !Array.isArray(allCars) || allCars.length  < 1 || !allCars;


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
            <DropdownMenu placeholder="Fuel" data={fuels}/>
            <DropdownMenu placeholder="Year" data={yearsOfProduction}/>
          </div>
        </div>

        <div>
          {!isDataEmpty ? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car)=>(
                  <CarCard car={car}/>
                ))}
              </div>
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
