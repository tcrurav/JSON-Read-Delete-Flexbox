let bicycles = [
  {
    brand: "BH",
    model: "sky",
    image: "blue.jpg"
  },
  {
    brand: "Orbea",
    model: "triumph",
    image: "red.jpg"
  },{
    brand: "Decathlon",
    model: "super",
    image: "yellow.jpg"
  },
];

function showBicycles(){
  let bicycleList = document.getElementById("bicycle-list");
  let allTheBicycles = "";

  for(let i = 0; i < bicycles.length; i++){
    allTheBicycles += `
      <div>
        <div><img src="img/${bicycles[i].image}" alt="brand-model"></div>
        <div><h1>${bicycles[i].brand}</h1></div>
        <div><h2>${bicycles[i].model}</h2></div>
        <div><button onclick="deleteBicycle(${i})">Delete</button></div>
      </div>
    `;
  }

  bicycleList.innerHTML = allTheBicycles;
}

function deleteBicycle(id){
  bicycles.splice(id, 1);

  showBicycles();
}

showBicycles();

