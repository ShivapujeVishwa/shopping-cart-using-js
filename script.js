let shop = document.getElementById("shop");
let shopItemsData = [{
        id: "shirt1",
        img: "images/image1.jpg",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: "shirt2",
        img: "images/img-2.jpg",
        name: "T Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: "shirt3",
        img: "images/img-3.jpg",
        name: "hoodies",
        price: 200,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
    {
        id: "shirt4",
        img: "images/img-4.jpg",
        name: "Formal Shirt",
        price: 500,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing."
    },
];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let {
            id,
            name,
            img,
            desc,
            price
        } = x;
        return ` <div class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
            <h2>${name}</h2>
            <p>${desc}</p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>
                <div class="button">
                    <i class="bi bi-dash-lg"></i>
                    <div class="quantity">0</div>
                    <i class="bi bi-plus-lg"></i>
                </div>
            </div>
        </div>
    </div>`;
    }).join(""));
};
generateShop();