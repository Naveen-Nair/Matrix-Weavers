const InitiativesTable = require('../models/major_strategic_initiatives/strategicInitiativesTable.model')

exports.getAllInitiatives = async(rec, res) =>{
    try{
        const data = await InitiativesTable.find();
        return res.status(200).json(data);
    } catch(err){
        return res.status(500).json({error: "Internal Server Error"});
    }
}