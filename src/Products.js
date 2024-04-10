class Products {
    constructor(name, brand, favorite, imageUrl,){
        this.name = name;
        this.brand = brand;
        this.favorite = favorite;
        this.imageUrl = imageUrl;
    }

createHtml(){
        return `
    <div class= "gallery" id="product-items">
        <div class="items">
        <div class="fila">
          <div class="item">
            <a href="../html/details.html"
              ><img src="${this.imageUrl}" alt="" class="imageshop"
            /></a>
            <p class="barra"></p>

            <div class="bajo">
              <p class="description">"${this.brand}"</p>
              <a href="../html/details.html"
                ><img src="${this.favorite}" alt="" class="miniicon"
              /></a>
            </div>

            <div>
              <p class="textoo">${this.name}</p>
            </div>
          </div>
        </div>
      </div>
        `
    }
}