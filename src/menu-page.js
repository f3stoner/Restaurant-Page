export function loadMenu() {

const content = document.getElementById("content");

content.textContent = "";

const title = document.createElement("div");
title.className = "title";
title.textContent = "Menu";
content.appendChild(title);

const beverage = document.createElement("div");
const bevTitle = document.createElement("div");
const bevList = document.createElement("ul");
const beverages = ["Coke: $2.50", "Tea: $2.50", "Water: Free"];

beverage.classList.add("subcontainer", "beverage");
bevTitle.className = "subtitle";
bevTitle.textContent = "Beverages";
bevList.className = "bevList";
for (const bev of beverages) {
    const list = document.createElement("li");
    list.textContent = `${bev}`;
    bevList.appendChild(list);
}
beverage.appendChild(bevTitle);
beverage.appendChild(bevList);
content.appendChild(beverage);

}