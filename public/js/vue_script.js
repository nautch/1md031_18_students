'use strict';

var socket = io();

function coffeeItem(name, image, choice1, choice2, choice3, orderButton){
    this.name = name;
    this.image = image;
    this.choice1 = choice1;
    this.choice2 = choice2;
    this.choice3 = choice3;
    this.checkBox = checkBox;
};

var vm = new Vue({
    el: '#vue',
    data: {
        coffeeList : hotDrinks,
        orders: {},                 //  Orderobjekt
        customerDetails: [],        //  Array med alla inputvalues från formulären
        orderDetails: [],           // Array med orderinnehållet
    },
    methods: {
        isFilled: function () {
            if (!document.getElementById('fnln').value &&
                !document.getElementById('email').value){
                    document.getElementById('alertField').innerHTML ="Vänligen fyll i för- och efternamn! <br>"
                    + "och din mailadress!";
                    return false;
            }
            else if (!document.getElementById('fnln').value){   // Kontrollerar att för- och efternamn fyllts i
                document.getElementById('alertField').innerHTML ="Vänligen fyll i ditt för- och efternamn";
                    return false;
            }
            else if (!document.getElementById('email').value){  //  Kontrollerar att mailadress fyllts i
                document.getElementById('alertField').innerHTML ="Vänligen fyll i din mailadress!";
                    return false;
            }
            else if (!document.querySelector('input[class="checkedCoffee"]:checked')){  // Kontrollerar att kaffe valts
                document.getElementById('alertField').innerHTML ="Vänligen lägg till kaffe på din order!";
                return false;
            }
            else if (Object.keys(this.orders).length === 0) {   //  Kontrollerar så att en markering på kartan är satt
                document.getElementById('alertField').innerHTML ="Vänligen ange leveransadress på kartan!";
                return false;
            }
            else {
                document.getElementById('alertField').innerHTML="";
                return true;
            }
        },
        addOrder: function (event) {
            if (this.isFilled()) {                  //  Funktion som bara kör addOrder() om samtliga inputs är ifyllda
                this.orderDetails = getOrder();
                this.customerDetails = getDetails();
                var deliveryLocation = this.orders.T.details;
                socket.emit("addOrder", {           //  addOrder() emitar till servern (dispatcher.html)
                             details: deliveryLocation,
                             orderItems: this.orderDetails,
                             customerInformation: this.customerDetails,
                });
            }
        },
        displayOrder: function (event) {            //  Funktion som displayar vald kartmarkering och uppdaterar genom att skriva över befintlig markering
            var T = {
                x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top
            };
            this.orders = {
                "T": {
                  details: {
                    x: event.clientX - 10 - T.x,
                    y: event.clientY - 10 - T.y
                }}
                }
        }
    },
});
