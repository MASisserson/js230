"use strict";

let products = [{
  name: 'Banana',
  quantity: 14,
  price: 0.79,
}, {
  name: 'Apple',
  quantity: 3,
  price: 0.55,
}]

$(function() {
  // Compile both templates for use later
  let productsList = Handlebars.compile($('#productsList').html());
  let productTemplate = Handlebars.compile($('#productTemplate').html());
  let $list = $('ul');

  // Also register the product template as a partial
  Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

  // Write the current list to the page
  $list.html(productsList({ items: products }));
  console.log($list.html());

  // Create a new product
  let newProduct = {
    name: 'Soup',
    quantity: 1,
    price: 1.29
  };

  // Render the new product with the product template
  $list.append(productTemplate(newProduct));
});

// $(function() {
//   let products = [
//     {
//       name: 'Banana',
//       quantity: 14,
//       price: 0.79,
//       on_sale: true
//     },
//     {
//       name: 'Apple',
//       quantity: 5,
//       price: 0.94,
//       on_sale: false,
//     },
//     {
//       name: 'Kiwi',
//       quantity: 2,
//       price: 0.34,
//       on_sale: true,
//     }
//   ];

//   let pizza = {
//     name: "Pepperoni Pizza",
//     quantity: 4,
//     price: 6.43
//   };

//   // Compile both templates
//   let productsList = Handlebars.compile($('#productsList').html());
//   let productTemplate = Handlebars.compile($('#productTemplate').html()); 
//   let $list = $('<ul></ul>');

//   // register partial
//   Handlebars.registerPartial('productTemplate', $('#productTemplate').html());

//   // write list to page
//   $(document.body).append($list.html(productsList({ items: products })));

//   // add new product (pizza)
//   $(document.body).append($list.append(productTemplate(pizza)));
// });
