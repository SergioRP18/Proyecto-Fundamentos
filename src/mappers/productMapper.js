function mapProductJsonToProductClass(productJson) {
    return new Products(
        productJson.id,
        productJson.name,
        productJson.brand,
        productJson.imageUrl,
        productJson.price
    );
}