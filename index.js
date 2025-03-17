const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "shoyu.jpg", rating: 5, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "miso.jpg", rating: 4, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "tonkotsu.jpg" }
 ];



 function displayRamens() {
   const ramenMenu = document.getElementById("ramen-menu");
 
 
   ramens.forEach((ramenImage) => {
     const img = document.createElement("img");
     img.src = "Images/shoyuRamen.jpeg";
     ramenMenu.appendChild(img);
   });
 }
 
 displayRamens("Shoyu Ramen");
 console.log(displayRamens);
 