const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
//Define a schema
const Schema = mongoose.Schema;

const WorkOrderBusinessSchema = new Schema({
    strAssetName: {
        type: String
    },
    strBusinessGroupName: {
        type: String		
    },
    strBusinessName: {
        type: String
    },
    // intUpdated: {
    //     type: Number		
    // },
    intWorkOrderID:{
        type: Number
    }
}); 
WorkOrderBusinessSchema.plugin(autoIncrement.plugin, 'WorkOrderBusiness');
WorkOrderBusinessSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
module.exports = mongoose.model('WorkOrderBusiness', WorkOrderBusinessSchema)