export function loadAbout()

{
    const content = document.getElementById("content");

    content.textContent = "";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "About";
    content.appendChild(title);


}