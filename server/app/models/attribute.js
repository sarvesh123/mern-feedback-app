const AttributeDao = require('../dao/attributes')

exports.createAttribute = function (req, res) {
    AttributeDao.find({
        name: req.name
    }, function (err, attribute) {
        if (err) {
            res.send(err)
        } else if (attribute.length === 0) {
            const newAttribute = new AttributeDao({
                name: req.name,
                created: Date.now()
            })
            newAttribute.save(function (err, attribute) {
                if (err) {
                    res.send(err)
                } else {
                    res.send(attribute)
                }
            })
        } else {
            res.status(409).send('attribute with the same name already exists')
        }
    })    
}

exports.get_attributes = function (req, res) {
    let return_fields = '_id name created'
    AttributeDao.find({}, return_fields, function (err, attributes) {
        if (err) {
            res.send(err)
        } else {
            res.send(attributes)
        }
    })
}