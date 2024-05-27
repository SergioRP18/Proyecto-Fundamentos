init();

function init () {
    const urlParams = new URLSearchParams(window.location.search);
    const productIdParam = urlParams.get("productId");
    if (productIdParam) {
        renderProductDetail(parseInt(productIdParam));
    }
}

function renderProductDetail(productId) {
    const productToRender = findProductById(productId);
    if (productToRender) {
        const container = document.getElementById("container");
        appendProductToContainer(container, productToRender);
    }
}

function findProductById(productId) {
    const productsFromLocalStorage = JSON.parse(localStorage.getItem("products"));
    const productToReturn = productsFromLocalStorage.filter(product => product.id === productId);
    return new Products(
        productToReturn[0].id,
        productToReturn[0].name,
        productToReturn[0].brand,
        productToReturn[0].imageUrl,
        productToReturn[0].price
    );
}

function appendProductToContainer(container, productToRender) {
    const productToAppend = `
        <img src="${productToRender.imageUrl}" alt="images-shop" />
        <div class="text">
        <h2><b>${productToRender.brand}</b></h2>
        <h4>In Stock - This item will ship within 2 business days.</h4>
        <div class="money">
            <p>Your Price:</p>
        </div>
        <div class="details-merch">
            <div class="number">
            <span>$</span>
            <span><b>${productToRender.getNonDecimalFromPrice()}</b></span>
            <span>${productToRender.getDecimalFromPrice()}</span>
            </div>
            <div class="Top">
            <h5>Most Popular in Machines</h5>
            </div>
        </div>
        </div>

        <div class="size">
        <p>Quantity</p>
        <div class="button">
            <select id="selector">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            </select>
            <button id="enviar">Add to Cart</button>
            <a href=".">90-DAY RETURNS</a>
        </div>
        </div>
    `;
    container.innerHTML += productToAppend;
}