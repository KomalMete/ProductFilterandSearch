let products ={

    data :[
        {
            productName : "Regular White T-Shirt",
            category : "Topwear",
            price : "30",
            image : "women-s-white-t-shirt-243240-1655748084-1.WEBP",
        },

        {
            productName : "Beige Short Skirt",
            category : "Bottomwear",
            price : "49",
            image : "Short_Skirt.jpg",
        },

        
        {
            productName : "Sporty SmartWatch",
            category : "Watch",
            price : "99",
            image : "Sporty_SmartWatch.WEBP",
        },

        
        {
            productName : "Basic Knitted Top",
            category : "Topwear",
            price : "29",
            image : "Basic_Knitted_Top.jpg",
        },

        {
            productName : "Black Leather Jacket",
            category : "Jacket",
            price : "129",
            image : "Black_Leather_Jacket.jpg",
        },

        {
            productName : "Stylish Pink Trousers",
            category : "Bottomwear",
            price : "89",
            image : "Stylish_Pink_Trousers.WEBP",
        },

        {
            productName : "Brown Mens Jacket",
            category : "Jacket",
            price : "189",
            image : "Brown_Mens_Jacket.jpg",
        },

        {
            productName : "Comfy Gray Pants",
            category : "Bottomwear",
            price : "49",
            image : "Comfy_Gray_Pants.jpg",
        },
    ],
};

for(let i of products.data)
{
    let card = document.createElement("div");
    card.classList.add("card", "i.category");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container")

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    //container
    let container = document.createElement("div");
    container.classList.add("container");

    //product-name for showing on screen
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = i.productName.toUpperCase();
    container.appendChild(name);

    //price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);

    card.appendChild(container);

    document.getElementById("products").appendChild(card);
}