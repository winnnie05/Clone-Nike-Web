const productCard = document.querySelector('#twosection')
const twosection = [
    {
        img: '../NIKE PICTURE /jamaur_photoshoot.jpeg',
        name: "Ja'Marr's",
        sub_name: 'Off-Field Favs'
    },

    {
        img: '../NIKE PICTURE /jamaur_photoshoot2.jpeg',
        name: "Ja'Marr's",
        sub_name: 'Off-Season Selects'
    },
]
twosection.forEach((item) =>
    productCard.innerHTML = productCard.innerHTML + `
    <div class="grid-item">
    <img src="${item.img}" alt="Image 1">
    <div class="overlay-text">
        <p>${item.name}</p>
        <p>${item.sub_name}</p>
        <button>Shop</button>
    </div>
    </div>
    `
)