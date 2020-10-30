
const app = {
        
    baseUrl: 'http://localhost:5050/',

    init: function() {
       // app.addListenerToAdd();
       if(document.location.href.includes('/admin/editCustomer')) {
        app.addListenerToEdit();
    }
        //app.addListenerToDelete();
    },

    

    // addListenerToAdd: async function() { 
        
    //     const addButton = document.querySelectorAll('.addButton');
    //     addButton.forEach(element => {
    //         element.addEventListener('click',app.deleteCustomer);
    //     });
    // },

    // addCustomer: async function(evt) {
    //     evt.preventDefault();
    //     const addFormElement = document.getElementById('addFormElement');
    //     const addCustomerData = new FormData(addFormElement);
    //     const response = await fetch(`${baseUrl}admin/addCustomer`, {
    //         method: 'POST',
    //         body: addCustomerData
    //     });           
    // },

    addListenerToEdit: function(){
        console.log('ici entrée addListenenerToEdit');

        const editCustomerForm = document.querySelector('#editCustomerForm');
        console.log('ici event listenener', editCustomerForm);
        editCustomerForm.addEventListener('submit',app.editCustomer);
            
    },

    editCustomer: async function(event) {
        
        event.preventDefault();
        console.log(event.target);
         const editFormElement = new FormData(event.target);
     //    console.log(Array.from(FormData));
          for(let value of editFormElement.values()) {
              console.log(value);
          }
          const id = parseInt(event.target.getAttribute("name"));

        const response = await fetch(`${app.baseUrl}admin/editCustomer/${id}`, {
            method: 'PATCH',
            body: editFormElement,
        });  
        console.log(response);
        // si l'api me dit que tout va bien
    if (response.status === 200) {
       document.location.href= `${app.baseUrl}admin/customers`;
       
      }
      
      else {
        alert('Problème lors de l\'enregistrement');
      }     
    },
};

document.addEventListener('DOMContentLoaded', app.init );
