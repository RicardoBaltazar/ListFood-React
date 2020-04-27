var product1 = document.querySelector("#product1")
var product2 = document.querySelector('#product2')
var product3 = document.querySelector('#product3')
var product4 = document.querySelector('#product4')
var product5 = document.querySelector("#product5")
var product6 = document.querySelector('#product6')
var product7 = document.querySelector('#product7')
var product8 = document.querySelector('#product8')

var productArray1 = []
var productArray2 = []
var productArray3 = []
var productArray4 = []
var productArray5 = []
var productArray6 = []
var productArray7 = []
var productArray8 = []

var form = document.querySelector('form')

fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
//como o fetch retorna uma promisse, tem que usar o then
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

        productArray1[0] = data.products[0].name + "<br><br> Descrição: " 
        productArray1[1] = data.products[0].description + "<br><br> De: "         
        productArray1[2] = data.products[0].oldPrice + "<br> <strong>POR: </strong>" 
        productArray1[3] = data.products[0].price + "<br> " 
    product1.innerHTML +=  productArray1
        productArray2[0] = data.products[1].name + "<br><br> Descrição: " 
        productArray2[1] = data.products[1].description + "<br><br> De: "         
        productArray2[2] = data.products[1].oldPrice + "<br> <strong>POR: </strong>" 
        productArray2[3] = data.products[1].price + "<br> " 
    product2.innerHTML +=  productArray2
        productArray3[0] = data.products[2].name + "<br><br> Descrição: " 
        productArray3[1] = data.products[2].description + "<br><br> De: "         
        productArray3[2] = data.products[2].oldPrice + "<br> <strong>POR: </strong>" 
        productArray3[3] = data.products[2].price + "<br> " 
    product3.innerHTML +=  productArray3
        productArray4[0] = data.products[3].name + "<br><br> Descrição: " 
        productArray4[1] = data.products[3].description + "<br><br> De: "         
        productArray4[2] = data.products[3].oldPrice + "<br> <strong>POR: </strong>" 
        productArray4[3] = data.products[3].price + "<br> " 
    product4.innerHTML +=  productArray4
        productArray5[0] = data.products[4].name + "<br><br> Descrição: " 
        productArray5[1] = data.products[4].description + "<br><br> De: "         
        productArray5[2] = data.products[4].oldPrice + "<br> <strong>POR: </strong>" 
        productArray5[3] = data.products[4].price + "<br> " 
    product5.innerHTML +=  productArray5
        productArray6[0] = data.products[5].name + "<br><br> Descrição: " 
        productArray6[1] = data.products[5].description + "<br><br> De: "         
        productArray6[2] = data.products[5].oldPrice + "<br> <strong>POR: </strong>" 
        productArray6[3] = data.products[5].price + "<br> " 
    product6.innerHTML +=  productArray6
        productArray7[0] = data.products[6].name + "<br><br> Descrição: " 
        productArray7[1] = data.products[6].description + "<br><br> De: "         
        productArray7[2] = data.products[6].oldPrice + "<br> <strong>POR: </strong>" 
        productArray7[3] = data.products[6].price + "<br> " 
    product7.innerHTML +=  productArray7
        productArray8[0] = data.products[7].name + "<br><br> Descrição: " 
        productArray8[1] = data.products[7].description + "<br><br> De: "         
        productArray8[2] = data.products[7].oldPrice + "<br> <strong>POR: </strong>" 
        productArray8[3] = data.products[7].price + "<br> " 
    product8.innerHTML +=  productArray8

});

form.addEventListener('submit', function(){
    alert("Email Enviado!")
})
