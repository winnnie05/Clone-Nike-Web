const productCard = document.querySelector('#threesection')
const threesection = [
    {
        img: '../NIKE PICTURE /nike green girl.jpeg',
        name: 'Member Product',
        sub_name: 'Your Exclusive Access'
    },

    {
        img: '../NIKE PICTURE /nike yoga.jpeg',
        name: 'Sports & Wellness Apps',
        sub_name: "Movement Where You're At"
    },

    {
        img: '../NIKE PICTURE /nike pose girl.jpeg',
        name: 'Nike By You',
        sub_name: 'Your Customization Service'
    },
]
threesection.forEach((item =>
    productCard.innerHTML = productCard.innerHTML + `
    <div class="grid-item1">
    <img src="${item.img}" alt="img1">
    <div class="overlay-text1">
        <h5>${item.name}</h5>
        <h5>${item.sub_name}</h5>
        <button>Shop</button>
    </div>
</div> 
    `
))