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
        orders: {},
        customerDetails: [],
        orderDetails: [],
        orderNumber: 0,
    },
    methods: {
        getNext: function () {
            this.orderNumber += 1;
            return this.orderNumber;
        },
        addOrder: function (event) {
            this.orderDetails = getOrder();
            this.customerDetails = getDetails();
            var deliveryLocation = this.orders.T.details;
            socket.emit("addOrder", {orderId: this.getNext(),
                         details: deliveryLocation,
                         orderItems: this.orderDetails,
                         customerInformation: this.customerDetails,
            });
        },
        displayOrder: function (event) {
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

    },//methods


}); //new Vue
