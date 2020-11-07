
function coffeeItem(item, choice) {
    this.coffee = item;
    this.choice = choice;
    this.coffee = function() {
        return this.item + ', ' + this.choice;
    };
}

var hotdrink = new coffeeItem('Cappuccino', 'Sojamjölk');

console.log( hotdrink.coffee );
