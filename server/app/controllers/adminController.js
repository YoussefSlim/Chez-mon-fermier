const Admin = require('../models/Admin');
const Customer = require('../models/Customer');
const Product = require('../models/Product');
const Shop = require('../models/Shop');
const Order = require('../models/Order');

const adminController = {
    dashboard: (req, res) => {
        res.render('dashboard');
    },
  
    notFound: (req, res) => {
        res.render('404');
    },

    // customerById: (request, response) => {
    //     Customer.getCustomerById((error, customer) => {
    //     // je vais pouvoir regarder s'il y a eu une erreur
    //         if (error) {
    //         // si oui envoyer une réponse d'erreur
    //         console.trace(error);
    //         // response.status(500).send('Erreur bdd');
    //         response.sendStatus(500);
    //         }
    //         else {
    //         // sinon envoyer la vue home avec les infos des recrues
    //         response.render('customer', {
    //             customer: customer,
    //         });
    //     }
    //   });
    // },

    customerById: async (req,res) => {
        const customer = await Customer.getCustomerById(req.params.id);
        res.render('customer', {customer});
    },

    allCustomers: async (req,res) => {
        const customers = await Customer.getAllCustomers(req.params);
        res.render('customers', {
            customers: customers,
        });
    },

    customerByEmail: async (req,res) => {
        const customers = await Customer.getCustomerByEmail(req.params.email);
        res.json(customers);
    },

    addCustomerPage: async(req, res) => {
        res.render('addCustomer');
    },

    newCustomer: async (req,res)=> {
        try{
            const customer = new Customer(req.body);
           // console.log(req.body);
          //  console.log(customer);
            const insertedCustomer = await Customer.saveCustomer(customer);
            if (insertedCustomer) {
             
                res.render('addCustomer', {
                    customer: customer,
                });
                
            } else {
                // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
                res.status(404).render("404");
            }
    } catch (error) {
        console.log(error);
        res.status(500).render("500");
    }
    },

    error404: (err, res) => {
        res.status(404).render(err, "404");
    },


    editCustomer: async (req, res) => {
       // try{
            const customer = await Customer.getCustomerById(req.params.id);
            const customerToEdit = new Customer(customer);
            for(const prop in req.body) {
                customerToEdit[prop] = req.body[prop];
            }
            await Customer.updateCustomer(req.body);
            
            res.render('editCustomer', {
                customer: customer,
            });
            
        // } catch (error) {
        //     console.log(error);
        //     res.status(500).json(error);
        // }
    }, 

    deleteCustomer: async (req,res)=> {
        const customer = await Customer.getCustomerById(req.params.id);
        // console.log(Customer.id);
        const message = 'Le compte est bien supprimé';
        const customerToDelete = new Customer(customer);
        await Customer.deleteCustomer(req.params.id);
        res.status(200).json(message);
            
            // res.send('Le client a bien été supprimé');
    },
    // adminLogin: async (req, res) => {
    //     const customer = await Admin.getAdminByEmail(req.body.email)
    //     if (!customer){
    //         res.status(404).json('Client non-reconnu');
    //     } else {

    //         const validPwd = await bcrypt.compareSync(req.body.password, customer.password); 
            
    //         if (!validPwd){
    //             res.status(401).json('le mot de passe est incorrect');                
    //         } else {
    //             req.body.customer = {
    //                 first_name : customer.first_name,
    //                 last_name : customer.last_name,
    //                 address: customer.address,
    //                 additionnal_address: customer.additional_address,
    //                 department: customer.department,
    //                 postcode: customer.postcode,
    //                 city: customer.city,
    //                 phone_number: customer.hone_number,
    //                 email: customer.email
    //             }
    //             res.status(200).send(customer/*{ logged: true, session: req.session.customer }*/);
    //         }            
    //     }
    // },
    
}

module.exports = adminController;