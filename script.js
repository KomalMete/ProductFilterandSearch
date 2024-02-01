let products ={

    data :[
        {
            productName : "Regular White T-Shirt",
            category : "Topwear",
            price : "30",
            image : "Images/white_Tshirt_girl1",
        },

        {
            productName : "Beige Short Skirt",
            category : "Bottomwear",
            price : "49",
            image : "Images/Short_Skirt",
        },

        
        {
            productName : "Sporty SmartWatch",
            category : "Watch",
            price : "99",
            image : "Images/Sporty_SmartWatch",
        },

        
        {
            productName : "Basic Knitted Top",
            category : "Topwear",
            price : "29",
            image : "Images/Basic_Knitted_Top",
        },

        {
            productName : "Black Leather Jacket",
            category : "Jacket",
            price : "129",
            image : "Images/Black_Leather_Jacket",
        },

        {
            productName : "Stylish Pink Trousers",
            category : "Bottomwear",
            price : "89",
            image : "Images/Stylish_Pink_Trousers",
        },

        {
            productName : "Brown Mens Jacket",
            category : "Jacket",
            price : "189",
            image : "Images/Brown_Mens_Jacket",
        },

        {
            productName : "Comfy Gray Pants",
            category : "Bottomwear",
            price : "49",
            image : "Images/Comfy_Gray_Pants",
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

    document.getElementById("products").appendChild(card);
}