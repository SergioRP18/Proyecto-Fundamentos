function mapFavoriteJsonToFavoriteClass(favoriteJson) {
    const favoriteClass = new Favorite(favoriteJson.userId);
    const favoriteProductsClass = favoriteJson.products.map(mapProductJsonToProductClass);
    favoriteClass.setProducts(favoriteProductsClass);
    return favoriteClass;
}