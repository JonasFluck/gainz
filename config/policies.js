/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  '*': 'is-logged-in',

  ProductController: {
    'find' : 'is-super-admin',
    'findTop' : true,
    'showInfo' : true,
    'search' : 'is-super-admin',
    'create' : 'is-super-admin',
    'destroy' : 'is-super-admin',
    'edit' : 'is-super-admin',
    'createWithImageStep1' : 'is-super-admin',
    'createWithImageStep2' : 'is-super-admin',

    },
    BasketController: {
      '*': true,
 
      },
      OrderController: {
    '*': true,

        },

        
' create-category': 'is-super-admin',
'destroy-category': 'is-super-admin',
'edit-category':  'is-super-admin',
'update-category' : 'is-super-admin',

  // Bypass the `is-logged-in` policy for:
  'entrance/*': true,
  'account/logout': true,
  'view-homepage-or-redirect': true,
  'view-faq': true,
  'view-contact': true,
  'legal/view-terms': true,
  'legal/view-privacy': true,
  'deliver-contact-form-message': true,
  'ausdauer-product' : true,
  'nutrition-product' : true,
  'kleidung-product' : true,
  'api/*':true,
  'product-suche' :true,
  'muskelaufbau-products' : true,
  'list-categories':true
};