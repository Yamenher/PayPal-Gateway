paypal.Buttons({
    createOrder: function(data, actions) {
        return actions.order.create({
            purchase_units: [{
                amount: {
                    value: '4.00'
                }
            }]
        });
    },
    onApprove: function(data, actions) {
        return actions.order.capture().then(function(details) {
            window.location.href = '/success';
        });
    },
    onError: function(err) {
        window.location.href = '/error'; 
    }
}).render('#paypal-button-container');
