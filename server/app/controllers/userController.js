const customer = require('../models/customer');
//const emailValidator = require('email-validator');
const bcrypt = require('bcrypt');
//const cookieParser = require('cookie-parser');
//const session = require('express-session');

const customerController = {
    customerById: async (req, res) =>{
        res.json(await customer.getCustomerById(req.params.id));
    },

    allCustomers: async (req,res) => {
        const customers = await customer.getAllCustomers(req.params);
        res.json(customers);
    },
    newCustomer: async (req,res)=> {
        const newCustomer = new customer(req.body);
        await newCustomer.saveCustomer();
        res.json(newCustomer);
    },

    editCustomer: async (req, res) => {
        const customer = await customer.customerById(null, req.params.id);

        const customerToEdit = new customer(customer);

        customerToEdit.updateCustomer(req.body);
        customerToEdit.saveCustomer();
        res.json(customerToEdit);
    }, 

    deleteCustomer: async (req,res)=> {
        const customer = await customer.customerById(null, req.params.id);
        // console.log(customer.id);
            const customerToDelete = new customer(customer);
            await customerToDelete.deleteCustomer();
            res.json ('suppression effectuée');
    },
    customerLogin: async (req, res) => {
        const user = await customer.customerByEmail(req.body.email)
        if (!user){
            res.json('Client non-reconnu');
        } else {

            const validPwd = bcrypt.compareSync(req.body.password, customer.password); 
            
            if (!validPwd){
                res.json('le mot de passe est incorrect');                
            } else {
                req.session.user = {
                    first_name : customer.first_name,
                    last_name : customer.last_name,
                    address: customer.address,
                    additionnal_address: customer.additional_address,
                    city: customer.city,
                    postcode: customer.postcode,
                    phone_number: customer.hone_number,
                    email: customer.email
                }

                if (req.body.remember) {
                    req.cookie.expires = new Date (Date.now() + 60*60*24)
                }
                res.json(user);
                // res.redirect('/')
            }            
        }
    },
    customerSignup: async (req, res) => {
        const user = await customer.customerByEmail(req.body.email)
        if (user) {
            res.json ('cette adresse email existe déjà');
        } else {
            if (req.body.password !== req.body.passwordConfirm) {
                res.json('la confirmation du mot de passe est incorrecte');
            } else {
                const hashPwd = bcrypt.hashSync(req.body.password, 10);

                const newUser = new customer({
                    first_name: req.body.firstname,
                    last_name: req.body.lastname,
                    address: req.body.address,
                    additionnal_address: req.body.additional_address,
                    city: req.body.city,
                    postcode: req.body.postcode,
                    phone_number: req.body.hone_number,
                    email: req.body.email,
                    password: hashPwd                  
                });
                await newUser.save();

                res.json('Inscription réussi');
            }            
        }
    },
    logout: (req, res) => {
        req.session.user = false;
        res.redirect('/');
    },
       
}   
          
module.exports = customerController;