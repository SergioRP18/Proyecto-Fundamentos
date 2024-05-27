class Products {
  constructor(id, name, brand, imageUrl, price) {
    this.id = id;
    this.name = name;
    this.brand = brand;
    this.imageUrl = imageUrl;
    this.price = price;
  }

  createHtml(isFavorite) {
    return `
        <div class="items">
        <div class="fila">
          <div class="item">
            <input type="hidden" id="product-${this.id}">
            <a href="../html/details.html?productId=${this.id}">
              <img src="${this.imageUrl}" alt="" class="imageshop" />
            </a>
            <p class="barra"></p>

            <div class="bajo">
              <p class="description">"${this.brand}"</p>
              <div class="checkbox">
                <a>
                  <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI1NiAyNTYiPjxwYXRoIGZpbGw9IiNlYTU4MGMiIGQ9Ik0xNzggNDJjLTIxIDAtMzkuMjYgOS40Ny01MCAyNS4zNEMxMTcuMjYgNTEuNDcgOTkgNDIgNzggNDJhNjAuMDcgNjAuMDcgMCAwIDAtNjAgNjBjMCAyOS4yIDE4LjIgNTkuNTkgNTQuMSA5MC4zMWEzMzQuNyAzMzQuNyAwIDAgMCA1My4wNiAzN2E2IDYgMCAwIDAgNS42OCAwYTMzNC43IDMzNC43IDAgMCAwIDUzLjA2LTM3QzIxOS44IDE2MS41OSAyMzggMTMxLjIgMjM4IDEwMmE2MC4wNyA2MC4wNyAwIDAgMC02MC02MG0tNTAgMTc1LjExYy0xNi40MS05LjQ3LTk4LTU5LjM5LTk4LTExNS4xMWE0OC4wNSA0OC4wNSAwIDAgMSA0OC00OGMyMC4yOCAwIDM3LjMxIDEwLjgzIDQ0LjQ1IDI4LjI3YTYgNiAwIDAgMCAxMS4xIDBDMTQwLjY5IDY0LjgzIDE1Ny43MiA1NCAxNzggNTRhNDguMDUgNDguMDUgMCAwIDEgNDggNDhjMCA1NS43Mi04MS41OSAxMDUuNjQtOTggMTE1LjExIi8+PC9zdmc+"
                        onclick="addFavorite(this)" data-productid="${this.id}" class="${isFavorite === true ? 'filled-heart' : ''}">
                </a>
              </div>
              <a>
                <img src="../assets/shop.png" alt="" class="miniicon"/>
              </a>
            </div>

            <div>
              <p class="textoo">${this.name}</p>
            </div>
          </div>
        </div>
        `;
  }

  getNonDecimalFromPrice() {
    return this.price.split('.')[0]
  }

  getDecimalFromPrice() {
    return this.price.split('.')[1]
  }

  getUpperCasedBrand() {
    return this.brand.toUpperCase();
  }

}