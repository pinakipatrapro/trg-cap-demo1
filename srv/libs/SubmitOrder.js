const cds = require('@sap/cds');
const db = cds.connect.to('db');


const submitOrder = async function (req) {
    try {
        const { SemanticHeader } = cds.entities;
        console.log(req.data)
        var data = await cds.run(SELECT.from(Books));
        //axios--> get/post --> destination -->url  ----Odata
        //https://www.npmjs.com/package/node-rfc --> RFC
        return JSON.stringify(result);
    } catch (e) {
        req.error({
            code: '500',
            message: e.message,
            status: 500
        })
    }
}
exports.submitOrder = submitOrder;