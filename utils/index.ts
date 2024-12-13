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
