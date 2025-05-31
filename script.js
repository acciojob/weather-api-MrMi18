const API_URL =
  "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de";
let body = document.getElementsByTagName("body")[0];
let h = document.getElementsByTagName("h1");
let btn = document.getElementsByTagName("button")[0];
let p = document.createElement("p");
console.log(body);
const fetchData = async () => {
  const res = await fetch(API_URL);
  const json = await res.json();
  console.log(json.weather[0].main);
  p.innerText = `Current weather in London: ${json.weather[0].main}`;
  body.append(p);
};

btn.addEventListener("click", fetchData);