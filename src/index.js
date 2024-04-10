const listOfProducts = [
    new Products("ULTRA MEGA PRO 999 RUNNING TREADMILL", "BhFitness", "../assets/shop.png", "../assets/650_1200.webp"),
    new Products("Xcalibur EMS Smart Bike", "TechnoGym", "../assets/shop.png", "../assets/6652520389662785.webp"),
    new Products("TF30 FOLDING TAPE WITH XIR CONSOLE", "MATRIX", "../assets/shop.png", "../assets/bicicleta-fija.jpg"),
    new Products("Xcalibur Magnétic Smart Bike", "BhFitness", "../assets/shop.png", "../assets/Multigym-500-Behumax.jpg"),
    new Products("PLATINUM CLUB SERIES TREADMILL", "Tunturi", "../assets/shop.png", "../assets/E5006-PRESION-HOMBRO.png"),
    new Products("ACTIVATE SERIES LIFECYCLE VERTICAL EXERCISE BIKE", "MATRIX", "../assets/shop.png", "../assets/optimized---Go.png"),
]

function fillScreenWithProducts(){
    const container = document.getElementById("product-items")
    for(let i = 0; i < listOfProducts.length; i++){
        const product = listOfProducts[i]
        container.innerHTML += product.createHtml()
    }
}

fillScreenWithProducts()

