import { CarProps, FiltersProps } from "../types";

export async function fetchCars(filters: FiltersProps) {
  //model=aveo

  const { model, year, manufacturer, fuel, limit } = filters;

  const url = `https://api.api-ninjas.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`;
  
 
  const headers: HeadersInit = {
    "X-Api-Key": process.env.NEXT_PUBLIC_API_KEY || "",
    contentType: "application/json",
  };

  try {
    const res = await fetch(url, { headers });
    const data = await res.json();

    return data;
  } catch (error: any) {
    console.log(error.message);
  }
}

export function calculateCarRent(city_mpg: number, year: number) {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor; //here we get the value calculated regarding the car's age and its facgtor minus our current year

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
}

export function generateCarImageUrl(car: CarProps, angle?: string) {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "img");
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", `${year}`);
  url.searchParams.append("angle", `${angle}`);
  console.log(url);
  return `${url}`;

  // client.photos.search({ query, per_page: 3 }).then((photos) => {
  //   console.log(photos);
  //   return photos;    });
}

//pexels api key
//2tXzdGN2KHvcJ9pJ5ru4yEuSVHexCq3APfQ20LTHhPqw751qEK6VcHMz

//pixabay api key
//
//https://pixabay.com/api/?key=47766214-a33a1bcd22a8f0c9e5f1ad979&q=chevrolet%20aveo%202008&image_type=photo
