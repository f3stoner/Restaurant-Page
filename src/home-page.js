export function loadHome() {

const content = document.getElementById("content");

content.textContent = "";

const title = document.createElement("div");
title.className = "title";
title.textContent = "Coach's Kitchen";
content.appendChild(title);

const review = document.createElement("div");
const reviewText = document.createElement("div");
const signature = document.createElement("div");
review.classList.add("customerReview", "subcontainer");
reviewText.className = "reviewText";
reviewText.textContent = "Coach's has the best food in the game. The service is top-notch and team-first. We will definitely be back.";
signature.className = "signature";
signature.textContent = "- Mike Elko";
review.appendChild(reviewText);
review.appendChild(signature);
content.appendChild(review);

const hours = document.createElement("div");
const hoursSubtitle = document.createElement("div");
const dateList = document.createElement("ul");
const dates = ["Sunday: 8am - 9pm", "Monday: 8am - 9pm", "Tuesday: 8am - 9pm", "Wednesday - Saturday: Closed"];

hours.classList.add("hours", "subcontainer");
hoursSubtitle.className = "subtitle";
hoursSubtitle.textContent = "Hours of Operation";
dateList.className = "dateTime";
for (const date of dates) {
    const list = document.createElement("li");
    list.textContent = `${date}`;
    dateList.appendChild(list);
}
hours.appendChild(hoursSubtitle);
hours.appendChild(dateList);
content.appendChild(hours);

const location = document.createElement("div");
const locationSubtitle = document.createElement("div");
const address = document.createElement("div");
location.classList.add("location", "subcontainer");
locationSubtitle.className = "subtitle";
locationSubtitle.textContent = "Location";
address.className = "address";
address.textContent = "12345 West Team Blvd";
location.appendChild(locationSubtitle);
location.appendChild(address);
content.appendChild(location);
}