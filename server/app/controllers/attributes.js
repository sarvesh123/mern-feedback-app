const AttributeModel = require('../models/attribute')

exports.add = function (req, res) {
    AttributeModel.createAttribute(req.body, res)
}

exports.get_attributes = function (req, res) {
    AttributeModel.get_attributes(req.body, res)
}
