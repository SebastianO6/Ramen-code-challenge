document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 3, comment: "Rich and creamy!" }
];

function displayRamens() {
    let ramenMenu = document.getElementById("ramen-menu");
    ramenMenu.innerHTML = ""; 

    ramens.forEach(ramen => {
        let img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));
        ramenMenu.appendChild(img);
    });
}

function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
}

function addSubmitListener() {
    document.getElementById("submit").addEventListener("click", (event) => {
        event.preventDefault();
        
        let name = document.getElementById("name").value;
        let restaurant = document.getElementById("restaurant").value;
        let image = document.getElementById("image").value;
        let rating = document.getElementById("rating").value;
        let comment = document.getElementById("comment").value;

        if (!name || !restaurant || !image || !rating || !comment) {
            alert("Please fill in all fields.");
            return;
        }
        
        let newRamen = { id: ramens.length + 1, name, restaurant, image, rating: parseInt(rating), comment };
        ramens.push(newRamen);
        displayRamens();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}