
const adminMiddleware = (req, res, next) => {
    if(!req.session.customer){
      return res.redirect('/login');
    }
  
    if(req.session.customer.email === 'admin') {
      next();
    } else {
      return res.status(401).render('401');
    }
  };
  
  module.exports = adminMiddleware;