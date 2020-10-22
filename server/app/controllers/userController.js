const Customer = require('../models/Customer');
const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
//const cookieParser = require('cookie-parser');
//const session = require('express-session');

const customerController = {
    customerById: async (req, res) =>{
        res.json(await Customer.getCustomerById(req.params.id));
    },

    allCustomers: async (req,res) => {
        const customers = await Customer.getAllCustomers(req.params);
        res.json(customers);
    },
    customerByEmail: async (req,res) => {
        const customers = await Customer.getCustomerByEmail(req.params.email);
        res.json(customers);
    },

    newCustomer: async (req,res)=> {
        const newCustomer = new Customer(req.body);
        await newCustomer.saveCustomer();
        if (newCustomer.id) {
            res.json(newCustomer);
        } else {
            // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
            res.status(404).json(newCustomer);
        }
        
    },
    error404: (req, res) => {
        res.status(404).json("La page demandée n'existe pas");
    },

    editCustomer: async (req, res) => {
        const customer = await Customer.getCustomerById(null, req.params.id);

        const customerToEdit = new Customer(customer);

        customerToEdit.updateCustomer(req.body);
        customerToEdit.saveCustomer();
        res.json(customerToEdit);
    }, 

    deleteCustomer: async (req,res)=> {
        const customer = await Customer.getCustomerById(null, req.params.id);
        // console.log(Customer.id);
            const customerToDelete = new Customer(customer);
            await customerToDelete.deleteCustomer();
            res.json ('suppression du client effectuée');
    },
    customerLogin: async (req, res) => {
        const customer = await Customer.getCustomerByEmail(req.body.email)
        if (!customer){
            res.json('Client non-reconnu');
        } else {

            const validPwd = bcrypt.compareSync(req.body.password, customer.password); 
            
            if (!validPwd){
                res.json('le mot de passe est incorrect');                
            } else {
                req.session.customer = {
                    first_name : customer.first_name,
                    last_name : customer.last_name,
                    address: customer.address,
                    additionnal_address: customer.additional_address,
                    department: customer.department,
                    postcode: customer.postcode,
                    city: customer.city,
                    phone_number: customer.hone_number,
                    email: customer.email
                }

                if (req.body.remember) {
                    req.cookie.expires = new Date (Date.now() + 60*60*24)
                }
                //ajouter un status 200
                res.json(customer);
                // res.redirect('/')
            }            
        }
    },
    signupPage: (req, res) => {
        res.json('/signup');
      },

    customerSignup: async (req, res) => {
        try {
            // les vérifs à faire : 
      
            // - 1: l'utilisateur existe déjà
            const customer = await Customer.getCustomerById({
              where: {
                email: req.body.email
              }
            });
            if (customer) {
              return res.json("Cet email est déjà utilisé par un utilisateur.");
            }
            // - 2: format d'email valide
            if (!emailValidator.validate(req.body.email)) {
              return res.json("Cet email n'est pas valide.");
            }
      
            // - 3: le mdp et la confirmation ne correspondent pas
            if (req.body.password !== req.body.passwordConfirm) {
              return res.json("La confirmation du mot de passe ne correspond pas.");
            }
            // - 4: Si on avait le courage, vérifier que le mdp répond aux recommendations CNIL...
      
            // 5 - On crypt
            const salt = await bcrypt.genSalt(10);
            const encryptedPassword = await bcrypt.hash(req.body.password, salt);
      
            // Si on est tout bon, on crée le Customer !
            const newCustomer = new Customer({
                first_name: req.body.firstname,
                last_name: req.body.lastname,
                address: req.body.address,
                additionnal_address: req.body.additional_address,
                department: req.body.department,
                postcode: req.body.postcode,
                city: req.body.city,
                phone_number: req.body.hone_number,
                email: req.body.email,
                password: encryptedPassword 
            });
      
            // on attend que l'utilisateur soit enregistré
            await newCustomer.save();
            res.redirect('/login');
          }catch(err){
            console.trace(err);
            res.status(500).send(err);
          }
        },
      
        loginPage: (req, res) => {
          res.json('veuillez vous connecter');
        },



        // const customer = await Customer.getCustomerByEmail(req.body.email)
        // if (customer) {
        //     res.json ('cette adresse email existe déjà');
        // } else {
        //     if (req.body.password !== req.body.passwordConfirm) {
        //         res.json('la confirmation du mot de passe est incorrecte');
        //     } else {
        //         const hashPwd = bcrypt.hashSync(req.body.password, 10);

        //         const newCustomer = new Customer({
        //             first_name: req.body.firstname,
        //             last_name: req.body.lastname,
        //             address: req.body.address,
        //             additionnal_address: req.body.additional_address,
        //             department: req.body.department,
        //             postcode: req.body.postcode,
        //             city: req.body.city,
        //             phone_number: req.body.hone_number,
        //             email: req.body.email,
        //             password: hashPwd                     
        //         });

        //         await newCustomer.saveCustomer();

        //         res.json('Inscription réussie');
        //     }            
        // }
    //},

               
    logout: (req, res) => {
        req.session.customer = false;
        res.redirect('/');
    },
       
}   
          
module.exports = customerController;