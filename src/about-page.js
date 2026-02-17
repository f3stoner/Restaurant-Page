export function loadAbout()

{
    const content = document.getElementById("content");

    content.textContent = "";

    const title = document.createElement("div");
    title.className = "title";
    title.textContent = "About";
    content.appendChild(title);

    const about = document.createElement("div");
    const aboutSubtitle = document.createElement("div");
    const aboutPara = document.createElement("p");

    about.classList.add("subcontainer", "about");
    aboutSubtitle.className = "subtitle";
    aboutSubtitle.textContent = "About Coach's Kitchen";
    aboutPara.className ="text"
    aboutPara.textContent = "Coach's Kitchen grew out of one coach's love for food.  Starting in 2020 at the height of the pandemic, Coach Smithers began cooking for friends and family as a way to share his love for food in a dark time.  The joy shared among those who partook in the coach's food made Smithers decide to commit to food full time.  Coach's Kitchen is proud to serve the community and looks forward to welcoming you to our table.";

    about.appendChild(aboutSubtitle);
    about.appendChild(aboutPara);
    content.appendChild(about);
    
}