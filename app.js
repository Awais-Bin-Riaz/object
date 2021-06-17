// var itemsArray = [
//     {name:”juice”,price:”50”, quantity:”3”},
//     {name:”cookie”,price:”30”, quantity:”9”},
//     {name:”shirt”,price:”880”, quantity:”1”},
//     {name:”pen”,price:”100”, quantity:”2”}];







// // var plan1 = {
// //     name: "Basic",
// //     price: 10,
// //     space: 100,
// //     transfer: 1000,
// //     pages: 10,
// //     discountMonths: [5, 7]
// // };


// // function calcAnnual(percentIfDisc) {
// //     var bestPrice = plan1.price;
// //     var currDate = new Date();
// //     var thisMo = currDate.getMonth();
// //     for (var i = 0; i < plan1.discountMonths.length; i++) {
// //         if (plan1.discountMonths[i] === thisMo) {
// //             bestPrice = plan1.price * percentIfDisc;
// //             break;
// //         }
// //     }
// //     return bestPrice * 12;
// // }

// // console.log(calcAnnual(0.8))




// // var plan1 = {
// //     name: "Basic",
// //     price: 3.99,
// //     space: 100,
// //     transfer: 1000,
// //     pages: 10,
// //     discountMonths: [6, 7],
// //     calcAnnual: function() {
// //     var bestPrice = plan1.price;
// //     var currDate = new Date();
// //     var thisMo = currDate.getMonth();
// //     for (var i = 0; i < plan1.discountMonths.length; i++) {
// //     if (plan1.discountMonths[i] === thisMo) {
// //     bestPrice = plan1.price *.8;
// //     break;
// //     }
// //     }
// //     return bestPrice * 12;
// //     }
// // };
// // console.log(plan1.calcAnnual())





// var plan1 = {
//     name: "Basic",
//     price: 3.99,
//     space: 100,
//     transfer: 1000,
//     pages: 10,
//     discountMonths: [5, 7],
//     calcAnnual: function (percentIfDisc) {
//         var bestPrice = this.price;
//         var currDate = new Date();
//         var thisMo = currDate.getMonth();
//         for (var i = 0; i < this.discountMonths.length; i++) {
//             if (this.discountMonths[i] === thisMo) {
//                 bestPrice = this.price * percentIfDisc;
//                 break;
//             }
//         }
//         return bestPrice * 12;
//     }
// };


// console.log(plan1.calcAnnual(.8))


// function Plan(name, price, space, transfer, pages) {
    //      this.name = name;
    //      this.price = price;
    //      this.space = space;
    //      this.transfer = transfer;
    //      this.pages = pages;
    //      }
        
    
    //      var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
    