export async function fetchCars() {
  var model = "corolla";
  const url = "https://api.api-ninjas.com/v1/cars?model=corolla";
  const apiKey = process.env.API_KEY;
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": "mpeQZUj/cJcv7C/VZ0YeXw==nvpSwu8fXiY7yetH",
      contentType: "application/json",
    },
  };

  try {
    const res = await fetch(url, options);
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
