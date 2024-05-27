init();

function init(){
    if (!localStorage.getItem("favorites")) {
        localStorage.setItem("favorites", "[]");
    }

    const userId = sessionStorage.getItem("userId");
    if (!userId) {
        window.location.href = "../html/login.html";
        return;
    }
    const currentUserFavorite = getFavoriteFromUser(userId);
    fillScreenWithProducts(currentUserFavorite);
};

function fillScreenWithProducts(favorite) {
    if (favorite) {
        const container = document.getElementById("card-favorite");
        container.innerHTML = "";
        container.innerHTML += favorite.createFavoriteHtml();
    }
}

function getFavoriteFromUser(userId) {
    const allFavorites = JSON.parse(localStorage.getItem("favorites"));
    const currentUserFavorite = allFavorites.map(mapFavoriteJsonToFavoriteClass).find(favorite => favorite.userId === userId);
    return currentUserFavorite;
}

function deleteFavorite(deleteButton) {
    const userIdInSession = sessionStorage.getItem("userId");
    if (!userIdInSession) {
        window.location.href = "../html/login.html";
        return;
    }

    const selectedProductId = parseInt(deleteButton.dataset.productid);
    const favoriteFromUser = getFavoriteFromUser(userIdInSession);
    const productIndexToDelete = existsProductInFavorite(favoriteFromUser, selectedProductId);
    if (productIndexToDelete >= 0) {
        const favoriteObject = mapFavoriteJsonToFavoriteClass(favoriteFromUser);
        favoriteObject.deleteProduct(selectedProductId);

        const allFavorites = JSON.parse(localStorage.getItem("favorites"));
        synchronizeFavoritesInLocalStorage(allFavorites, favoriteObject, userIdInSession);
        
        const currentUserFavorite = getFavoriteFromUser(userIdInSession);
        fillScreenWithProducts(currentUserFavorite);
    }
}

function existsProductInFavorite(favoriteFromUser, productId) {
    const productIndex = favoriteFromUser.products.findIndex(product => product.id === productId);
    return productIndex;
}

function synchronizeFavoritesInLocalStorage(oldFavorites, favoriteToSync, loggedInUserId) {
    let favoritesWithoutLoggedInUser = oldFavorites.filter(oldFavorite => oldFavorite.userId !== loggedInUserId);
    favoritesWithoutLoggedInUser.push(favoriteToSync);
    
    localStorage.setItem("favorites", JSON.stringify(favoritesWithoutLoggedInUser));
}