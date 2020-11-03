const Product = require('../models/Product');
const path = require('path');
const { request, response } = require('express');


const cartController = {

  // méthode pour afficher le panier
  cartPage: (request, response) => {
    const cart = request.session.cart || [];

    // calcul des prix totaux
    // pour calculer le sous-total "prix hors taxe", on va faire le tour du panier (une boucle quoi), et ajouter à chq fois "prix * quantité" au sous-total
    let subTotal = 0;
    for (const article of cart) {
      subTotal += article.price * article.quantity;
    }

    // calcul de la TVA
    let tva = subTotal * 0.2;

    // total TTC avec frais de port
    let total = subTotal + tva + 9.99;

    response.json(cart, {
      cart,
      subTotal,
      tva,
      total
    });

  },

  // méthode pour ajouter une product au panier
  addToCart: (request, response, next) => {

    // on stocke l'id de le produit à rajouter
    const targetId = parseInt(request.params.id);

    // Si le panier n'existe pas, il faut le créer !
    if (!request.session.cart) {
      request.session.cart = [];
    }

    // Ensuite, on veut récupérer les données de le produit, et les ajouter au panier
    Product.getOneProduct( targetId, (err, product) => {
      if (err) {
        // On oublie pas le traitement d'erreur (on sait jamais!)
        console.log(err);
        response.status(500).send(err);
      } else {

        // encore une vérification ! assurons nous que le produit existe !
        if(!product) {
          // si le produit ciblée n'existe pas => 404
          next();
        } else {
          // ce coup ci, c'est bon, le produit on l'a 
          // => on l'ajoute au panier ! (ou pas !)

          // avant d'ajouter le produit au panier, il faut vérifier qu'elle n'y soit pas déjà ! Si c'est le cas, on veut uniquement incrémenter la quantité !
          let existingProduct = request.session.cart.find( element => {
            return element.id === targetId;
          });


          if (!existingProduct) {
            // La product n'est pas dans la panier => on la rajoute
            // avant d'ajouter le produit au panier, on lui "accroche" une nouvelle propriété, qui représente la quantité voulue
            product.quantity = 1;
            
            request.session.cart.push( product );
          } else {
            // le produit est déjà dans le panier => on a plus qu'à incrémenter sa quantité
            existingProduct.quantity++;
          }

          // une fois que c'est fini, on redirige vers la route /cart
          response.status(200).json(existingProduct);
        }

      }
      
    });

    
  },


  // méthode pour supprimer un élément du panier
  removeFromCart: (request, response, next) => {
    // stocker l'id de le produit ciblée
    const targetId = parseInt(request.params.id);
    
    // chercher le produit dans le panier
    let existingProduct = request.session.cart.find( element => {
      return element.id === targetId;
    });

    // petit test pour éviter de faire des bétises => si pas de product, 404
    if (!existingProduct) {
      next();
    } else {
      // enlever un exemplaire de le produit => décrémenter la propriété quantity
      existingProduct.quantity--;

      // une fois décrémenté, on vérifie si il reste au moins un exemplaire de la firugine => si quantity est inférieure ou égale à 0, on enlève le produit du panier.
      if (existingProduct.quantity <= 0) {

        // pour enlever un élément d'un tableau, un des méthodes les plus simple est d'utiliser .filter
        request.session.cart = request.session.cart.filter( element => {
          return element !== existingProduct;
        });

      }


      response.json('Le produit a été enlevé du panier');

    }
  }

};

// const cartController = {

//   // method to display the cart
//   cartPage: (request, response) => {
//     // when the basket is not empty I count the totals
//     if (request.session.cart) {
//       // i want to determine the total price
//       // I will go through my cart and add the prices of each item multiplied by the quantity
//       let priceHT = 0;
//       for(const product of request.session.cart) {
//         priceHT += (product.price * product.quantity);
//       }
//       const tva = priceHT * 0.05;

//       response.json('/cart', {
//         products: request.session.cart,
//         priceHT: priceHT,
//         fdp: 9.99,
//         tva: tva,
//         ttc: priceHT + tva
//       });
//     }
//     else {
//       response.json('/cart', {
//         products: null
//       });
//     }

//   },

//   addProduct: (request, response) => {

//     const id = parseInt(request.params.id, 10);

//     // I will add the requested product in the session
//     // If the cart does not exist, it must be created! (req.session.cart = [])
//     if (!request.session.cart) {
//       request.session.cart = [];
//     }
//     // Then test if the product is already in the cart.
//     const foundProduct = request.session.cart.find((product) => {
//       return id === product.id;
//     });
 
//     // If the product is not in the cart, retrieve the product from the database with Product.getProductByID.
//     if (!foundProduct) {
//       Product.getProductByID(id, (error, product) => {
//         // if there was an error

//         if (error) {
//           // I send an 500 error
//           response.sendStatus(500);
//         }
//         // sinon s'il n'y a pas de product
//         else if (!product) {
//           // I send an 404 error
//           response.sendStatus(404);
//         }
//         // otherwise if all is well
//         else {
//           // Then add a quantity property to this product, and add it to the cart (req.session.cart.push(product))
//           product.quantity = 1;
//           request.session.cart.push(product);
  
//           response.redirect('/cart');
//         }
//       });
//     }
//     else {
       
//         foundProduct.quantity++;
        
//         response.redirect('/cart');
//     }
    
//   },

//   removeProduct: (request, response) => {

//     // to the request id
//     const id = parseInt(request.params.id, 10);

//     // if not a cart, i was create to doesn't have an error
//     if (!request.session.cart) {
//       request.session.cart = [];
//     }
//     // find the search product in the cart's product
//     const foundProduct = request.session.cart.find((product) => {
//       return id === product.id;
//     });

//     // if there is no product, we are redirected to the cart
//     if (!foundProduct) {
//       response.redirect('/product');
//     }
//     else {
//         // Otherwise we decrease the quantity of the product found
//         foundProduct.quantity--;
//         // if there are more than 0, we transfer the product
//         if (foundProduct.quantity === 0) {
//           // I want a cart with 1 less item, the one I'm looking for

//           // filter returns an array from the original array, except that it filters according to a criterion, here if the id is the one sought we transfer the product
//           request.session.cart = request.session.cart.filter((product) => {
//             return id !== product.id;
//           });

//           // if the cart was empty, we can remove this
//           if (request.session.cart.length === 0) {
//             delete request.session.cart;
//           }
//         }
//         // we are redirected to the cart
//         response.redirect('/cart');
//     }
    
//   },

// };


module.exports = cartController;