/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  'GET /':                   { action: 'view-homepage-or-redirect' },
  'GET /welcome/:unused?':   { action: 'dashboard/view-welcome' },

  'GET /faq':                { action:   'view-faq' },
  'GET /legal/terms':        { action:   'legal/view-terms' },
  'GET /legal/privacy':      { action:   'legal/view-privacy' },
  'GET /contact':            { action:   'view-contact' },

  'GET /signup':             { action: 'entrance/view-signup' },
  'GET /email/confirm':      { action: 'entrance/confirm-email' },
  'GET /email/confirmed':    { action: 'entrance/view-confirmed-email' },

  'GET /login':              { action: 'entrance/view-login' },
  'GET /password/forgot':    { action: 'entrance/view-forgot-password' },
  'GET /password/new':       { action: 'entrance/view-new-password' },

  'GET /account':            { action: 'account/view-account-overview' },
  'GET /account/password':   { action: 'account/view-edit-password' },
  'GET /account/profile':    { action: 'account/view-edit-profile' },
  'GET /dsgvo':    {view: 'pages/dsgvo'},


  //  ╔╦╗╦╔═╗╔═╗  ╦═╗╔═╗╔╦╗╦╦═╗╔═╗╔═╗╔╦╗╔═╗   ┬   ╔╦╗╔═╗╦ ╦╔╗╔╦  ╔═╗╔═╗╔╦╗╔═╗
  //  ║║║║╚═╗║    ╠╦╝║╣  ║║║╠╦╝║╣ ║   ║ ╚═╗  ┌┼─   ║║║ ║║║║║║║║  ║ ║╠═╣ ║║╚═╗
  //  ╩ ╩╩╚═╝╚═╝  ╩╚═╚═╝═╩╝╩╩╚═╚═╝╚═╝ ╩ ╚═╝  └┘   ═╩╝╚═╝╚╩╝╝╚╝╩═╝╚═╝╩ ╩═╩╝╚═╝
  '/terms':                   '/legal/terms',
  '/logout':                  '/api/v1/account/logout',


  //  ╦ ╦╔═╗╔╗ ╦ ╦╔═╗╔═╗╦╔═╔═╗
  //  ║║║║╣ ╠╩╗╠═╣║ ║║ ║╠╩╗╚═╗
  //  ╚╩╝╚═╝╚═╝╩ ╩╚═╝╚═╝╩ ╩╚═╝
  // …


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  '/api/v1/account/logout':                           { action: 'account/logout' },
  'PUT   /api/v1/account/update-password':            { action: 'account/update-password' },
  'PUT   /api/v1/account/update-profile':             { action: 'account/update-profile' },
  'PUT   /api/v1/account/update-billing-card':        { action: 'account/update-billing-card' },
  'PUT   /api/v1/entrance/login':                        { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup':                       { action: 'entrance/signup' },
  'POST  /api/v1/entrance/send-password-recovery-email': { action: 'entrance/send-password-recovery-email' },
  'POST  /api/v1/entrance/update-password-and-login':    { action: 'entrance/update-password-and-login' },
  'POST  /api/v1/deliver-contact-form-message':          { action: 'deliver-contact-form-message' },
  'POST  /api/v1/observe-my-session':                 { action: 'observe-my-session', hasSocketFeatures: true },


  //Unsere Routen
  //'/': { controller:'ProductController', action:'findTop'},
 
  //'GET /product/new':{view: 'pages/product/new'}, 
  'POST /product/product':{controller:'ProductController', action:'create'},
  'GET /product/product/destroy/:id':{controller:'ProductController', action:'destroy'},
  'POST /product/product/update/:id':{controller:'ProductController', action:'update'},
  'GET /product/product/edit/:id': { controller: 'ProductController', action: 'edit' },
  'GET /product/productInfo/:id': { controller: 'ProductController', action: 'showInfo' },
  'GET /product/product/search': {controller:'ProductController', action:'search'},
  'POST /product/newImage': { controller: 'ProductController', action:'createWithImageStep1' },
  'POST /newWithImage/': { controller: 'ProductController', action:'createWithImageStep2' },



  'GET /product/product:id': 'product.findOne',
  //'GET /product/:id': 'product.destroy', 

  //admin views
  'GET /product/product':{controller:'ProductController', action:'find'},
  'GET /admin':{view: 'pages/admin/admin', locals:{layout:'admin-layout'}},

 
  'GET /ernaehrungsformen/ernaehrungsformen':{view: 'pages/ernaehrungsformen/ernaehrungsformen'},
  'GET /ernaehrungsformen/vegetarisch':{view: 'pages/ernaehrungsformen/vegetarisch'},
  'GET /ernaehrungsformen/pesketarisch':{view: 'pages/ernaehrungsformen/pesketarisch'},
  'GET /ernaehrungsformen/vegan':{view: 'pages/ernaehrungsformen/vegan'},

  'GET /fitnessziele/fitnessziele': {view: 'pages/fitnessziele/fitnessziele'},
  'GET /fitnessziele/abnehmen':{view: 'pages/fitnessziele/abnehmen'},
  'GET /fitnessziele/ausdauer':{action: 'ausdauer-product'},
  'GET /fitnessziele/muskelaufbau':{view: 'pages/fitnessziele/muskelaufbau'},

  'GET /kleidung/kleidung' : {view: 'pages/kleidung/kleidung'},

  'GET /nutrition/nutrition' : {view: 'pages/nutrition/nutrition'},


  //shopping basket
  'GET /order/basket': {controller:'BasketController', action:'show'},
  'GET /order/basket/put/:id': {controller:'BasketController', action:'put'},
  'GET /order/basket/remove/:id': {controller:'BasketController', action:'remove'},
  'GET /order/orders': {controller:'OrderController', action:'findUserOrders'},

  //Bestellung
  'GET /order/step1': {controller:'OrderController', action:'showFirstPage'},
  'POST /order/step2':{controller:'OrderController', action:'order'},
  'GET /order/step2':{controller:'OrderController', action:'showSecondPage'},

  //Kategorien
  'GET /category/show': {action:'list-categories',locals:{layout:'admin-layout'}},
  'POST /category/new':{action:'create-category'},
  'GET /category/destroy/:id':{action:'destroy-category'},
  'GET /category/edit/:id':{action:'edit-category'},
  'POST /category/update/:id':{action:'update-category'},

};
