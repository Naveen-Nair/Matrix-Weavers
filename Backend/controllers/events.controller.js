const Events = require('../models/events.model');

exports.findAll = async (req, res) => {
    try{
        const events = await Events.find();
        return res.status(200).json(events);
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}

exports.findByName = async (req, res) => {
    try {
        const events = await Events.find({ title:req.params.title });
        if (events.length)
            return res.status(200).json(events[0]);
        else 
            return res.status(404).json({ error: "Event not found" });
    } catch (err) {
        return res.status(500).json({ error : "Internal Server Error" });
    }
}