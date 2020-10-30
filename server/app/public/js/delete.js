console.log('avant l\'init');

const deleted = {
        
    baseUrl: 'http://localhost:5050/',
    
    init: function() {
        deleted.addListenerToDelete();
        console.log('dans l\'init');

    },

    

    addListenerToDelete: function() {
        const deleteButton = document.querySelectorAll('.deleteButton');
        deleteButton.forEach(element => {
            element.addEventListener('click',deleted.deleteCustomer);
        });
        //console.log(deleteButton);
    },

    deleteCustomer: async function(event) {
       console.log(event.target);
       //event.preventDefault();
        console.log('apres le event.preventDefault');
        const customerId = event.target.closest('tr').getAttribute("name");
        console.log(customerId);
      
        if(confirm('Etes vous sur ?')) {
         
         const id = parseInt(customerId);
          
          const response = await fetch(`${deleted.baseUrl}admin/deleteCustomer/${id}`, {
            method: 'DELETE',
          });
          // si tout va bien
          if (response.status === 200) {
            document.location.href= `${deleted.baseUrl}admin/customers`;
          }
          // sinon
          else {
            // on affiche une erreur
            alert('Impossible de supprimer la carte')
          }
        }
    }
    // deleteCustomer: async (req, res) => {
                    
    //         const id = req.params.id;
            
    //         const customer = await fetch(`${baseUrl}admin/deleteCustomer/${id}`, {
    //         method: 'DELETE',
    //         });   
    //         res.send(customer);
                 
        
    // }

   
};    
document.addEventListener('DOMContentLoaded', deleted.init );
