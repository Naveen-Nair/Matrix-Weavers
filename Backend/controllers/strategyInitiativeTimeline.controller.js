const InitiativeTimeline = require("../models/major_strategic_initiatives/strategicInitiativesTimeline.model");


exports.getTimeline = async (req, res) => {
    try{
        const data = await InitiativeTimeline.find();
        return res.status(200).json(data);
    } catch (err) {
        return res.status(500).json({error: "Internal Server Error"})
    }
} 