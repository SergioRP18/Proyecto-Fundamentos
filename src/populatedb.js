init();

function init () {
    if (checkIfProductsExist() === false) {
        const productsFromJson = shopData.results;
        const products = createProducts(productsFromJson);
        localStorage.setItem("products", JSON.stringify(products));
    }
}

function checkIfProductsExist() {
    return localStorage.getItem("products") !== null;
}

function createProducts(productsFromJson) {
    let listOfProducts = [];
    for (let i = 0; i < productsFromJson.length; i++){
        const productJson = productsFromJson[i];
        const id = productJson.id;
        const name = productJson.title;
        const brand = productJson.brand;
        const imageUrl = productJson.imageUrl;
        const price = productJson.price;
        const product = new Products(id, name, brand, imageUrl, price);
        listOfProducts.push(product);
    }
    return listOfProducts;
}