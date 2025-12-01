const projects = [
{
title: "Modello Sci-Fi",
thumb: "https://source.unsplash.com/400x300?3d,render",
embed: "",
image: "https://source.unsplash.com/800x600?3d"
},
{
title: "Creature 3D",
thumb: "https://source.unsplash.com/400x300?creature,3d",
embed: "",
image: "https://source.unsplash.com/800x600?monster"
}
];


const portfolio = document.querySelector("#portfolio");
projects.forEach((p, i) => {
portfolio.innerHTML += `
<div class="card" data-index="${i}">
<img src="${p.thumb}" loading="lazy" />
<h3 style="padding: 10px;">${p.title}</h3>
</div>`;
});


const modal = document.querySelector("#modal");
const modalBody = document.querySelector("#modalBody");
const closeModal = document.querySelector("#closeModal");


portfolio.addEventListener("click", e => {
const card = e.target.closest(".card");
if (!card) return;
const p = projects[card.dataset.index];


modalBody.innerHTML = p.embed
? `<iframe width="560" height="315" src="${p.embed}"></iframe>`
: `<img src="${p.image}" style="width:100%; border-radius:10px;" />`;


modal.classList.remove("hidden");
});


closeModal.onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if (e.target === modal) modal.classList.add("hidden"); };


// Tema dark/light
const toggle = document.getElementById("themeToggle");
if (localStorage.getItem("theme") === "light") document.body.classList.add("light");


toggle.onclick = () => {
document.body.classList.toggle("light");
localStorage.setItem("theme", document.body.classList.contains("light") ? "light" : "dark");
};