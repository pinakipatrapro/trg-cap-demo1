/**
* Implementation for CatalogService defined in ./cat-service.cds
*/


const cds = require('@sap/cds')
const {
    submitOrder
}=require('./libs/SubmitOrder')

module.exports = function (srv){
  // Register your event handlers in here, e.g....
  srv.after ('READ','Books', each => {
    if (each.stock > 111) {
      each.title += ` -- 11% discount!`
    }
  });
  srv.on('submitOrder', submitOrder);
}
