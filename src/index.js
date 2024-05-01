const listOfProducts = [
    
]

function createAllProducts(){
    const results = shopData.results
    for(let i = 0; i < results.length; i++){
        const obj = results[i]
        const favorite = obj.favorite
        const name = obj.title
        const brand = obj.brand
        const imageUrl = obj.imageUrl;
        const product = new Products(name, brand, favorite, imageUrl)
        listOfProducts.push(product)
    }
}

function fillScreenWithProducts(){
    const container = document.getElementById("product-items")
    for(let i = 0; i < listOfProducts.length; i++){
        const product = listOfProducts[i]
        container.innerHTML += product.createHtml()
    }
}


createAllProducts()
fillScreenWithProducts()

