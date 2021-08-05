var numIngredients = 0;
var ingredientList = [];

function addInput(){
    numIngredients++;

    let inputContainer = document.createElement("div");
    inputContainer.id = "container" + numIngredients;

    let heading = document.createElement("div")
    let bold = document.createElement("b");
    let text = document.createTextNode("Ingredient #" + numIngredients);
    bold.appendChild(text);
    heading.appendChild(bold);

    let nameLabel = document.createElement("label").appendChild(document.createTextNode("Name "));

    let nameInput = document.createElement("input");
    nameInput.size = "10";
    nameInput.type = "text";
    nameInput.id = "name" + numIngredients;

    let amountLabel = document.createElement("label").appendChild(document.createTextNode(" Amount "));

    let amountInput = document.createElement("input");
    amountInput.size = "5";
    amountInput.type = "text";
    amountInput.id = "amount" + numIngredients;
    
    inputContainer.appendChild(heading);
    
    inputContainer.appendChild(nameLabel);
    inputContainer.appendChild(nameInput);

    inputContainer.appendChild(amountLabel);
    inputContainer.appendChild(amountInput);

    inputContainer.appendChild(document.createElement("br"));

    let form = document.getElementById("form");
    form.appendChild(inputContainer);
}

function subtractInput(){
    if (numIngredients > 0){
        let inputContainer = document.getElementById("container"+numIngredients);
        let form = document.getElementById("form");
        form.removeChild(inputContainer);
        numIngredients--;
    }
}

function convert(){

    ingredientList = []

    let form = document.getElementById("form");

    let origServing = parseFloat(form.elements['orig-servings'].value);
    let newServing = parseFloat(form.elements['new-servings'].value);

    for (let i = 1; i <= numIngredients; i++){
        let name =  form.elements["name"+i].value;
        let amount = parseFloat(form.elements["amount"+i].value);
        let newAmount = amount / origServing * newServing;
        ingredientList.push([name, newAmount]);
    }
    
}

function getList(){

    convert();
    let container = document.getElementById("container");

    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for(let i = 0; i < numIngredients; i++){
        
        let name = document.createElement("span");
        let bold = document.createElement("b");
        let text = document.createTextNode(ingredientList[i][0] + ": ");
        bold.appendChild(text);
        name.appendChild(bold);

        let amount = document.createElement("span").appendChild(document.createTextNode(ingredientList[i][1]));

        container.appendChild(name);
        container.appendChild(amount);
        container.appendChild(document.createElement("br"));
        
    }

}