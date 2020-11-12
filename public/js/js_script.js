/*function coffeeItem(item, choice) {
    this.coffee = item;
    this.choice = choice;
    this.hotdrink = function() {
        return this.coffee + ', ' + this.choice;
    };
}

var drink = new coffeeItem('Cappuccino', 'Sojamjölk');

console.log( drink.hotdrink() );
*/
var vm = new Vue({
  el: '#js',
  data: {
    arbitraryVariableName: 'Välj en burgare'

})
