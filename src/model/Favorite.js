class Favorite {
    constructor(userId) {
        this.userId = userId;
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }
    
    
    deleteProduct(productId) {
        this.products = this.products.filter(product => product.id !== productId);
    }

    setProducts(products) {
        this.products = products;
    }

    createFavoriteHtml() {
        let favoriteHtml = ``;
        for (let i = 0; i < this.products.length; i++) {
            const currentProduct = this.products[i];
            favoriteHtml += `
            <div class="content-fav">
                <img src="${currentProduct.imageUrl}" alt="">
                <div class="favorite">
                    <h1 class="favorite-title" title="${currentProduct.name}">${currentProduct.name}</h1>
                    <p>${currentProduct.brand}</p>
                    <h1><span>${currentProduct.price}</span></h1>
                    <p>en 36x $13.608</p>
                </div>
                <button type="button" onclick=deleteFavorite(this) data-productid="${currentProduct.id}">Eliminar</button>
            </div>
            `;
        }
        return favoriteHtml;
    }
}
