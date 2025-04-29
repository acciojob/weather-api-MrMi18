//your JS code here. If required.
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=e467712b257e418838be97cc881a71de";
let body =  document.getElementsByTagName("body");
let h =  document.getElementsByTagName("h1");
let btn = document.getElementsByTagName("button");
let p = document.createELement("p");

const fatchData  = async() => {
	const res = await fetch(API_URL);
	const json = await res.json();
	p.innerText = `Current weather in London: ${json?.weather?.main}`;
	body.append(p);
	
}


btn.addEventListner("click",fatchData());
