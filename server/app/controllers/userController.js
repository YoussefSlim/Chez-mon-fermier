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
        try{
            const newCustomer = new Customer(req.body);
           // console.log(req.body);
          //  console.log(newCustomer);
            const insertedCustomer = await Customer.saveCustomer(newCustomer);
            if (insertedCustomer) {
             
                res.json(insertedCustomer);
                
            } else {
                // la ressource en elle-même est trouvée, mais pas la catégorie, c'est ça que reflète le code 404 ici
                res.status(404).json("L'utilisateur n'a pas été enregistré");
            }
    } catch (error) {
        console.log(error);
        res.status(500).json({error});
    }
    },

    error404: (err, res) => {
        res.status(404).json(err, "La page demandée n'existe pas");
    },


    editCustomer: async (req, res) => {
        try{
            const customer = await Customer.getCustomerById(req.params.id);
            const customerToEdit = new Customer(customer);
            for(const prop in req.body) {
                customerToEdit[prop] = req.body[prop];
            }
            await Customer.updateCustomer(req.body);
            //Customer.save();
            res.json(customerToEdit, 'Le client a bien été modifié');
            
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }, 

    deleteCustomer: async (req,res)=> {
        const customer = await Customer.getCustomerById(req.params.id);
        // console.log(Customer.id);
        const message = 'Le compte est bien supprimer';
        const customerToDelete = new Customer(customer);
        await Customer.deleteCustomer(req.params.id);
        res.status(200).json(message);
            

            // res.send('Le client a bien été supprimé');
    },

    loginCheck: (req, res) => {
        if (req.session.customer) {
            res.json({ logged: true, session: req.session.customer });
        } else {
            res.json({ logged: false, session: {} });
        };
    },

    customerLogin: async (req, res) => {
        const customer = await Customer.getCustomerByEmail(req.body.email)
        if (!customer){
            res.status(404).json('Client non-reconnu');
        } else {

            const validPwd = await bcrypt.compareSync(req.body.password, customer.password); 
            
            if (!validPwd){
                res.status(401).json('le mot de passe est incorrect');                
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

                // if (req.body.remember) {
                //     req.cookie.expires = new Date (Date.now() + 60*60*24)
                // }
                // //ajouter un status 200
                // res.json(customer);
                // // res.redirect('/')
                res.status(200).json({ logged: true, session: req.session.customer });

            }            
        }
    },
    
    signupPage: async (req, res) => {
        res.json('Veuillez vous inscrire !');
        //res.redirect('/signup');
      },

    customerSignup: async (req, res) => {
        try {
            // les vérifs à faire : 
      console.log(req.body);
            // - 1: user is real
            const customer = await Customer.getCustomerByEmail(req.body.email);
            if (customer) {
              return res.json("Cet email est déjà utilisé par un utilisateur.");
            }
            // - 2: form of email is not valid
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
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                address: req.body.address,
                additionnal_address: req.body.additional_address,
                department: req.body.department,
                postcode: req.body.postcode,
                city: req.body.city,
                phone_number: req.body.phone_number,
                email: req.body.email,
                password: encryptedPassword 
            });
            // on attend que l'utilisateur soit enregistré
            await Customer.saveCustomer(newCustomer);
            res.status(201).json({message: 'l\'utilisateur a bien été créé'});
           // res.redirect('/login');
          }catch(err){
            console.trace(err);
            res.status(500).send(err);
          }
        },
      
        loginPage: async (req, res) => {
          res.json('veuillez vous connecter');
        },
               
    logout: (req, res) => {
        req.session.customer = false;
        res.redirect('/');
    },
}   
          
module.exports = customerController;