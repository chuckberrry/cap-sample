const cds = require('@sap/cds')
const { Books } = cds.entities ('sap.capire.bookshop')

class CatalogService extends cds.ApplicationService { init(){

  // Add some discount for overstocked books
  this.after ('READ','Books', each => {
    if (each.stock > 111) {
      each.title += ` -- 11% discount!`
    }
  })

  return super.init()
}}

module.exports = { CatalogService }