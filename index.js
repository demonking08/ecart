

fetch("https://demonking08.github.io/ecart/data/data.json").then( response => {    //then is a higher order function
    return response.json()         //fetching 
}).then(data => {  // adding another then to fetch (.then) 
       //fetching the response in the object format
    displayData(data);
})

function displayData(info) 
{
   var bodyElement = document.querySelector("body");
   var row = document.createElement("section")
   row.classList.add("row","justify-content-center");

   bodyElement.append(row);


   info.mobiles.map(value=>{
       var column = document.createElement("article")
       column.classList.add("col-sm-10","col-md-6","col-lg-3")
       row.append(column);



       var card = document.createElement("div");
       card.classList.add("card","mt-5");

       var cardBody = document.createElement("div");
       cardBody.classList.add("cardBody");

       var imageElement = document.createElement("img");
       imageElement.src=value.image;
       imageElement.classList.add("img-responsive")
       imageElement.alt = value.name;


       var name = document.createElement("h2");
       name.textContent = value.name;
       //css property
       name.classList.add("text-center", "text-secondary");


       var price = document.createElement("p");
       price.classList.add("text-secondary","text-center");
       price.innerHTML = "<s>INR:"+value.price+"/-</s>";

       var oprice = document.createElement("p");
       oprice.classList.add("text-secondary","text-center");
       oprice.innerHTML = "<s>INR:"+value.oprice+"/-</s>";

       //button
       var button = document.createElement("button");
       button.classList.add("btn","btn-primary","btn-block");
       button.textContent="Add to cart" ;


       cardBody.append(imageElement);

       cardBody.append(name);
       cardBody.append(price);
       cardBody.append(oprice);
       cardBody.append(button);

       card.append(cardBody);
       column.append(card);
    })
}
