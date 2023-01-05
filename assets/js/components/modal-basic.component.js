/**
 * <modal-basic>
 * -----------------------------------------------------------------------------
 *
 * @type {Component}
 *
 * -----------------------------------------------------------------------------
 */


parasails.registerComponent('modal-basic',{
  props:['title','gg'],
  data: function(){
    return{
      isActive:true,
      content:null,
    };
  },
  template:`
  
  <div class="modal" v-bind:class="{ 'is-active': isActive }">
  <div class="modal-background" @click="closeModal(1)"></div>
  <div class="modal-content has-background-white py-5 px-5">
    <h3 class="title mb-6">{{ this.title }}</h3>
    {{this.content}}
  </div>
  <button class="modal-close is-large" aria-label="close" @click="closeModal"></button>
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
    closeModal(gg) {
      console.log(gg)
      console.log(this.gg)
      if(this.gg.toString() === gg.toString() ){
        console.log("did it")
        this.isActive = false;
      }
        
    },
    openModal(gg){
      if(this.gg === gg )
        this.isActive = true;
    }

  }
});
