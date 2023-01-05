/**
 * <modal-basic>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */


parasails.registerComponent('product',{
    props:{product:{
        image:{
            type: String,
            required: true,
            default: 'protein.jpg'
        },
        id:{
            type: Number,
            required: true
        },
        price:{
            type: Number,
            required: true
        },
        name:{
            type: String,
            required: true
        }

    },
default:{

}},
    data: function(){
      return{

    }
    },
    template:`  
    <div class="card">
              <div class="card-image">
                <figure class="image is-square">
                    <img :src="'/images/products/'+(product.image==='' ? 'protein.jpg' : product.image)">
                </figure>
              </div>
              <div class="card-content ">
                <p class="title is-size-5">
                {{product.name}}
                </p>
                <p>
                {{product.price}}€
                </p>
              </div>
              <footer class="card-footer">
                <p class="card-footer-item">
                  <a :href="'/product/productInfo/'+product.id" class="has-text-grey is-primary">Zum Produkt</a>
                </p>
              </footer>
            </div>
    `,
    beforeMount: function(){
        
  
    },
    mounted: async function(){
      //…
    },
    beforeDestroy: function() {
      //…
    },
  
    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {

    }
  });
  