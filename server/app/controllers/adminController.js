const adminModel = require('../models/adminModel');


const adminController = {
    adminById: async (req, res) =>{
        res.json(await adminModel.adminById(req.params.id));
    },
    
    adminLogin: async (req, res) => {
        const admin = await adminModel.adminByEmail(req.body.email)
        if (!admin){
            res.json('Administrateur non-reconnu');
        } else {

            const validPwd = bcrypt.compareSync(req.body.password, admin.password); 
            
            if (!validPwd){
                res.json('le mot de passe est incorrect');                
            } else {
                req.session.admin = {
                    username : admin.username,
                    email: admin.email
                }

                if (req.body.remember) {
                    req.cookie.expires = new Date (Date.now() + 60*60*24)
                }
                res.json(admin);
                // res.redirect('/')
            }            
        }
    }
    
}

module.exports = adminController;