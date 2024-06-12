const productList = document.querySelector("#foursection")
const foursectionList = [
    {
        img: '../NIKE PICTURE /nike-woman-running.jpeg',
        name: 'New From Nike Running',
        sub_name: 'The Y2Kolor Collection'
    },

    {
        img: '../NIKE PICTURE /nike-pose-shoe-max.jpeg',
        name: 'Feel The Unreal',
        sub_name: 'Air Max DN'
    },

    {
        img: '../NIKE PICTURE /nike-basketball.jpeg',
        name: "Ja'Marr Chase's Picks",
        sub_name: 'AF1s, Vapor Edge Cleats & More'
    },

    {
        img: '../NIKE PICTURE /nike-cole-kim.jpeg',
        name: 'Make Your Move',
        sub_name: "Chole Kim's Fitness Essentails"
    },
]
foursectionList.forEach((item) =>{
    productList.innerHTML = productList.innerHTML + `
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