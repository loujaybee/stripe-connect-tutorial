var stripe = require("stripe")("sk_test_xKPWwg8xhl0IgLnOBp9zg237");

module.exports = function(req, res) {
    
    return stripe.customers.create({
      description: req.body.description,
      source: "tok_visa" //TODO Pass proper payment detail
    },{
        stripe_account: req.body.account
   	}).then(function(customer) {
      return res.send(customer);
    });

}