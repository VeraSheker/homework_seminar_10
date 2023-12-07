import { dataCats } from "./data.js";

const content = document.querySelector(".content-box");
const data = JSON.parse(dataCats);
console.log(data);

data.forEach(({ id, age, gender, breed, url }) => {
    const div = document.createElement("div");
    div.classList.add("card");
    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.alt = "image";
    img.src = url;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const title = document.createElement("h2");
    title.classList.add("card-title");
    title.textContent = `Порода животного: ${breed}`;

    const subtitle = document.createElement("h6");
    subtitle.classList.add("card-subtitle", "mb-2", "text-muted");
    subtitle.textContent = `Возраст: ${age}`;

    const cardBreed = document.createElement("p");
    cardBreed.classList.add("card-breed");
    cardBreed.textContent = `Пол животного: ${gender}`;

    const idPara = document.createElement("p");
    idPara.classList.add("card-content");
    idPara.textContent = `ID: ${id}`;

    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(idPara);
    cardBody.appendChild(cardBreed);

    div.appendChild(img);
    div.appendChild(cardBody);

    content.appendChild(div);
});