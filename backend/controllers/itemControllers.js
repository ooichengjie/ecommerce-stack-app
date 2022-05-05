const Item = require('../models/Item');

module.exports.post_item = (req,res) => {
    const newItem = new Item(req.body);
    newItem.save().then(item => res.json(item));
}

module.exports.get_items = (req,res) => {
    Item.find().sort({date:-1}).then(items => res.json(items));
}

module.exports.delete_item = (req,res) => {
    Item.findByIdAndDelete({_id: req.params.id}).then(function(item){
        res.json({success: true});
    });
}