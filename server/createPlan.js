var stripe = require("stripe")("sk_test_xKPWwg8xhl0IgLnOBp9zg237");

module.exports = function(req, res) {
    
    return stripe.plans.create({
	  amount: req.body.amount,
	  name: req.body.name,
	  id: req.body.id,

	  interval: "month",
	  currency: "gbp"
	},  {
        stripe_account: req.body.account
   	})
	.then(function(plan) {
	  return res.send(plan);
	});
     

}