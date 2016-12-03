'use strict';

const request = require('request-promise');

class PagarmeService {
    static buy(product, productName, price, quantity) {
        const paymentObj = {
            uri: 'https://api.pagar.me/1/transactions',
            method: 'POST',
            json: {
                api_key: 'ak_test_WHgSu2XFmvoopAZMetV3LfA2RfEEQg',
                amount: price,
                card_number: '4024007138010896',
                card_expiration_date: '1050',
                card_holder_name: 'Ash Ketchum',
                card_cvv: '123',
                metadata: {
                    product,
                    name: productName,
                    quantity
                }
            }
        };

        return PagarmeService._send(paymentObj);
    }

    static _send(paymentObj) {
        return request(paymentObj);
    }
}

module.exports = PagarmeService;