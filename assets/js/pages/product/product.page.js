parasails.registerPage('product', {
    //  ╦╔╗╔╦╔╦╗╦╔═╗╦    ╔═╗╔╦╗╔═╗╔╦╗╔═╗
    //  ║║║║║ ║ ║╠═╣║    ╚═╗ ║ ╠═╣ ║ ║╣
    //  ╩╝╚╝╩ ╩ ╩╩ ╩╩═╝  ╚═╝ ╩ ╩ ╩ ╩ ╚═╝
    data: {
      
    },
  
    //  ╦  ╦╔═╗╔═╗╔═╗╦ ╦╔═╗╦  ╔═╗
    //  ║  ║╠╣ ║╣ ║  ╚╦╝║  ║  ║╣
    //  ╩═╝╩╚  ╚═╝╚═╝ ╩ ╚═╝╩═╝╚═╝
    beforeMount: function() {
      //…
      
    },
    mounted: async function() {
      //…
      const newProductButton = document.querySelector('#newProductButton')
        const modalBg = document.querySelector('.modal-background');
        const modal = document.querySelector('.modal');
        const searchProductButton = document.querySelector('#searchProductButton');
        const modalBgSearch = document.querySelector('#searchModel-background');
        const modalSearch = document.querySelector('#searchModel');


        newProductButton.addEventListener('click', () => {
            modal.classList.add('is-active');
        });

        modalBg.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });

        searchProductButton.addEventListener('click', () => {
            modalSearch.classList.add('is-active');
        });

        modalBgSearch.addEventListener('click', () => {
            modalSearch.classList.remove('is-active');
        });
    },
  
    //  ╦╔╗╔╔╦╗╔═╗╦═╗╔═╗╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ║║║║ ║ ║╣ ╠╦╝╠═╣║   ║ ║║ ║║║║╚═╗
    //  ╩╝╚╝ ╩ ╚═╝╩╚═╩ ╩╚═╝ ╩ ╩╚═╝╝╚╝╚═╝
    methods: {
         validate(e) {
            console.log("Validate Price....")
            let price = document.querySelector("input[name='price']").value;
            console.log("Price: " + price)
            if (price <= 999.99 && price >= 0) {
            return;
            } else {
                document.querySelector("#validationerror").style.display = "block";
                
                e.preventDefault();
            }
        },
        changeAction(action){
            document.getElementById("newProductForm").action= action;
        }
      
    }
  });
  