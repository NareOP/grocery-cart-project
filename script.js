const items = [{
        id: 1,
        image: "./images/cake-1.jpeg",
        title: "Cake item",
        price: 5,
    },
    {
        id: 2,
        image: "./images/cake-2.jpeg",
        title: "Cake item",
        price: 5,
    },
    {
        id: 3,
        image: "./images/cake-3.jpeg",
        title: "Cake item",
        price: 5,
    },
    {
        id: 4,
        image: "./images/cupcake-1.jpeg",
        title: "Cupcake item",
        price: 10,
    },
    {
        id: 5,
        image: "./images/cupcake-2.jpeg",
        title: "Cupcake item",
        price: 10,
    },
    {
        id: 6,
        image: "./images/cupcake-3.jpeg",
        title: "Cupcake item",
        price: 10,
    },
    {
        id: 7,
        image: "./images/doughnut-1.jpeg",
        title: "Cupcake item",
        price: 15,
    },
    {
        id: 8,
        image: "./images/doughnut-2.jpeg",
        title: "Cupcake item",
        price: 15,
    },
    {
        id: 9,
        image: "./images/doughnut-3.jpeg",
        title: "Cupcake item",
        price: 15,
    },
];

const addedItems = [];

window.addEventListener("load", function() {
    const itemsContainer = document.querySelector(".items");
    items.map((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("item");
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("img-container");
        const img = document.createElement("img");
        img.src = item.image;
        const imgSpan = document.createElement("span");
        imgSpan.setAttribute("id", item.id);
        const icon = document.createElement("i");
        icon.classList = "fa fa-shopping-cart";
        imgSpan.appendChild(icon);
        imgContainer.appendChild(img);
        imgContainer.appendChild(imgSpan);
        const itemContent = document.createElement("div");
        itemContent.classList.add("item-content");
        const titleSpan = document.createElement("span");
        titleSpan.innerHTML = item.title;
        const priceSpan = document.createElement("span");
        priceSpan.innerHTML = "$" + item.price;
        itemContent.appendChild(titleSpan);
        itemContent.appendChild(priceSpan);
        itemDiv.appendChild(imgContainer);
        itemDiv.appendChild(itemContent);
        itemsContainer.appendChild(itemDiv);

        imgSpan.addEventListener("click", (e) => {
            this.alert("Item added to the list");
            const id = e.target.id || e.target.parentElement.id;
            addedItems.push(items.find((item) => item.id == id));
            addItemToBasket(item);
            console.log(addedItems);
        });
    });
});

const miniMenu = () => {
    var x = document.querySelector(".navbar");
    if (x.className === "navbar") {
        x.className += " animate";
    } else {
        x.className = "navbar";
    }
};

const openBasket = () => {
    var x = document.querySelector(".basketContainer");
    if (x.className === "basketContainer") {
        x.className += " open";
    } else {
        x.className = "basketContainer";
    }
};

const addItemToBasket = (item) => {
    const itemsCount = document.getElementById("itemsCount");
    itemsCount.innerHTML = parseInt(itemsCount.innerHTML) + 1;

    const itemsPrice = document.getElementById("itemsTotalPrice");
    const totalPrice = parseInt(itemsPrice.innerHTML) + item.price;
    itemsPrice.innerHTML = totalPrice;
    const totalPriceBasket = document.getElementById("totalPriceBasket");
    totalPriceBasket.innerHTML = totalPrice;

    // html
    const basketItems = document.querySelector(".basketItems");
    const basketItem = document.createElement("div");
    basketItem.classList.add("basketItem");
    const img = document.createElement("img");
    img.src = item.image;
    const basketItemContent = document.createElement("div");
    basketItemContent.classList.add("basketItemContent");
    const title = document.createElement("span");
    title.innerHTML = item.title;
    const price = document.createElement("span");
    price.innerHTML = "$" + item.price;
    basketItemContent.appendChild(title);
    basketItemContent.appendChild(price);
    const trash = document.createElement("span");
    const trashIcon = document.createElement("i");
    trashIcon.classList = "fa fa-trash";
    trash.appendChild(trashIcon);
    basketItem.appendChild(img);
    basketItem.appendChild(basketItemContent);
    basketItem.appendChild(trash);
    basketItems.appendChild(basketItem);
};