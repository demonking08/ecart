fetch("../data/data.json").then(response=>{
    return response.json()
}).then(data=>{
    displayData(data);
})

function displayData(info){
    var bodyElement=document.querySelector("body");
    var row=document.createElement("section");
    row.classList.add("row" ,"justify-content-center");
    bodyElement.append(row);
    info.mobiles.map(value=>{
        var column=document.createElement("article");
        column.classList.add("col-sm-10","col-md-6","col-lg-3");
        row.append(column);hv
        //card
        var card=document.createElement("div");
        card.classList.add("card");

        //card - body
        var cardbody=document.createElement("div");
        cardbody.classList.add("card-body");

        //image
        var imageElement=document.createElement("img");
        imageElement.src=value.image;
        imageElement.classList.add("img-responsive")
        imageElement.alt=value.name;

        cardbody.append(imageElement)
