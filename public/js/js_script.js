

document.getElementById("headline").innerHTML = "Välkommen till COFF's kaffebar";
document.getElementById("coffeeMenu").innerHTML = "Kaffemeny";
document.getElementById("menuChoice").innerHTML = "Välj typ av kaffe:";

function getDetails () {    //  loopar igenom alla input-fields och returnerar dessa i valueArray
    var valueArray = [];
    var numberOfInputs = document.getElementById('form').elements.length;
    for (var i = 0; i < numberOfInputs; i++) {
        var x = document.getElementById('form').elements[i];
        if (x.type!=="radio") {     //  Kollar om input type är skilt från radio, och pushar sedan radio-inputs manuellt nedan
            valueArray.push(x.value);
        }
    }
    valueArray.push(document.querySelector('input[type="radio"]:checked').value); // lägger till vald value från radiobuttons manuellt efter loopen
    return valueArray;
};
function getOrder () {
    var coffeeArray = [];
    var checkBoxes = document.getElementsByName('checkBox');
    for (var i = 0; i < checkBoxes.length; i++) { // Kontrollerar vilka checkboxes som är ibockade, och adderar då värdet till array!!
        if (checkBoxes[i].checked) {
            coffeeArray.push(checkBoxes[i].value);
        }
    }
    return coffeeArray;
};







/*function coffeeItem(item, choice) {
    this.coffee = item;
    this.choice = choice;
    this.hotdrink = function() {
        return this.coffee + ', ' + this.choice;
    };
}

var drink = new coffeeItem('Cappuccino', 'Sojamjölk');

console.log( drink.hotdrink() );


Titeln på index.html
var headline = document.createElement('h1');
var headlineTitle = document.createTextNode("Välkommen till COFF's kaffebar");
headline.appendChild(headlineTitle);
document.getElementById('header').appendChild(headline);
*/









/*
getDetails: function () { //loopar igenom alla input-fields
    var valueArray = [];
    var numberOfInputs = document.getElementById('form').elements.length;
    for (var i = 0; i < numberOfInputs; i++) {
        var x = document.getElementById('form').elements[i];
        if (x.type!=="radio") {
            valueArray.push(x.value + ", ");
        }
    }
    valueArray.push(document.querySelector('input[type="radio"]:checked').value); // lägger till vald value från radiobuttons manuellt efter loopen
    return valueArray;
};

getOrder: function () {
    var coffeeArray = [];
    var checkBoxes = document.getElementsByName('checkbox');
    for (var i = 0; i < checkBoxes.length; i++) { // Kontrollerar vilka checkboxes som är ibockade, och adderar då värdet till array!!
        if (checkBoxes[i].checked) {
            coffeeArray.push(checkBoxes[i].value + ", ");
        }
    }
    return coffeeArray;
};
*/



/*


for (i=0; i<snus.length; i++) {
    var theProperties = document.createElement("div");
    var theName = document.createElement("p");
    var theNameNode = document.createTextNode(snus[i].name);
    var theImg = document.createElement("img");
    theImg.src = snus[i].img;
    var theFirst = document.createElement("li");
    var theTaste = document.createTextNode(snus[i].taste);
    theFirst.appendChild(theTaste);
    var theSecond = document.createElement("li");
    var theType = document.createTextNode(snus[i].snusType);
    theSecond.appendChild(theType);
    var theThird = document.createElement("li");
    var theAdditional = document.createTextNode(snus[i].additionalProperty);
    theThird.appendChild(theAdditional);
    var theCheckBoxText = document.createElement("label");
    var addToOrder = document.createTextNode("Lägg till i beställning:");
    theCheckBoxText.appendChild(addToOrder);
    var theCheckBox = document.createElement("input");
    theCheckBox.setAttribute("type", "checkbox");
    theCheckBox.setAttribute("name", "snuscheckbox"); //Använd senare
    theCheckBox.setAttribute("value", snus[i].name);
    theCheckBoxText.appendChild(theCheckBox);

    theProperties.appendChild(theNameNode);
    theProperties.appendChild(theImg);
    theProperties.appendChild(theFirst);
    theProperties.appendChild(theSecond);
    theProperties.appendChild(theThird);
    theProperties.appendChild(theCheckBoxText);
    document.getElementById("wrapper").appendChild(theProperties);
}
*/
