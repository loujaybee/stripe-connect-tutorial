var stripe = require("stripe")("sk_test_xKPWwg8xhl0IgLnOBp9zg237");

module.exports = function(req, res) {

    return stripe.subscriptions.create({

            // Rory, one of James' customers
            customer: req.body.customer,

            // James' plan for his wifi
            plan: req.body.plan,

            // Application fee
            application_fee_percent: 50
        }, {

            // Platform account (Rory)
            stripe_account: req.body.account
        })
        .then(function(err, subscription) {
            return res.send(subscription);
        });

}