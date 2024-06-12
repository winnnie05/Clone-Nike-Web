const productList = document.querySelector("#foursection")
const foursectionList = [
    {
        img: '../NIKE PICTURE /dukeshoe_photoshhot.jpeg',
        name: 'Featured Footaer: Dunks',
    },

    {
        img: '../NIKE PICTURE /running_photoshoot.jpeg',
        name: 'Running Essentials',
        sub_name: 'Off-Season Select'
    },

    {
        img: '../NIKE PICTURE /nikeshirt_photoshoot.jpeg',
        name: "Versatile Workout Style",
    },

    {
        img: '../NIKE PICTURE /nikeshirt_photoshoot.jpeg',
        name: 'Nike Fleece For Spring',
    },
]
foursectionList.forEach((item) =>{
    productList.innerHTML = productList.innerHTML + `
    <div class="grid-item">
    <img src="${item.img}">
    <div class="overlay-text">
      <p>${item.name}</p>

      <button>Shop</button>
    </div>
</div>

    <div class="grid-item">
    <img src="${item.img}">
    <div class="overlay-text">
      <p>${item.name}</p>
      <p>${item.sub_name}</p>
      <button>Shop</button>
    </div>
</div>
    `
})