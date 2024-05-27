init();

function init() {
    if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", "[]");
    }

    const userId = sessionStorage.getItem("userId");
    if (!userId) {
        window.location.href = "../html/login.html";
        return;
    }

    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.size === 0) {
        const allProducts = getAllProducts();
        fillScreenWithProducts(allProducts);
        return;
    }

    if (urlParams.has("brand")) {
        const brandToFilter = urlParams.get("brand");
        const filteredProducts = findProductsByBrand(brandToFilter);
        fillScreenWithProducts(filteredProducts);
        return;
    }
}

function fillScreenWithProducts(products) {
    const container = document.getElementById("product-items")
    for(let i = 0; i < products.length; i++) {
        const product = products[i];
        container.innerHTML += product.createHtml();
    }
}

function getAllProducts() {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    return productsFromLocalStorage.map(mapProductJsonToProductClass);
}

function findProductsByBrand (brand) {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    const matchingProducts = productsFromLocalStorage
        .map(mapProductJsonToProductClass)
        .filter(productObject => productObject.getUpperCasedBrand() === brand.toUpperCase());
    return matchingProducts;
}

function findProductsById (id) {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    const matchingProducts = productsFromLocalStorage
        .map(mapProductJsonToProductClass)
        .filter(productObject => productObject.id === id);
    return matchingProducts[0];
}

function addFavorite(imgFavorite) {
    const userIdInSession = sessionStorage.getItem("userId");
    if (!userIdInSession) {
        window.location.href = "../html/login.html";
        return;
    }
    const selectedProductId = parseInt(imgFavorite.dataset.productid);
    const favoriteProduct = findProductsById(selectedProductId);

    const favoritesFromLocalStorageJson = JSON.parse(localStorage.getItem("favorites"));
    const favoritesFromLocalStorageObject = favoritesFromLocalStorageJson.map(mapFavoriteJsonToFavoriteClass);
    
    let favoritesFromUser = favoritesFromLocalStorageObject.find(favoriteObject => favoriteObject.userId === userIdInSession);
    if (!favoritesFromUser) {
        favoritesFromUser = new Favorite(userIdInSession);
    }
    const productAlreadyMarkedAsFavorite = favoritesFromUser.products.find(product => product.id === selectedProductId);
    if (!productAlreadyMarkedAsFavorite) {
        favoritesFromUser.addProduct(favoriteProduct);
        //imgFavorite.classList.add("filled-heart");
    } else {
        favoritesFromUser.deleteProduct(selectedProductId);
        //imgFavorite.classList.remove("filled-heart");
    }
    imgFavorite.classList.toggle("filled-heart")
    synchronizeFavoritesInLocalStorage(favoritesFromLocalStorageObject, favoritesFromUser, userIdInSession);
}

function synchronizeFavoritesInLocalStorage(oldFavorites, favoriteToSync, loggedInUserId) {
    let favoritesWithoutLoggedInUser = oldFavorites.filter(oldFavorite => oldFavorite.userId !== loggedInUserId);
    favoritesWithoutLoggedInUser.push(favoriteToSync);
    
    localStorage.setItem("favorites", JSON.stringify(favoritesWithoutLoggedInUser));
}





