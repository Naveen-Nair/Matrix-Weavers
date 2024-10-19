const mongoose = require('mongoose');

const assortmentSizeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category_name: {
        type: String, // e.g., 'Electronics', 'Home Appliances'
        required: true
    },
    total_skus: {
        type: Number, // total number of SKUs in this category
    },
    new_arrivals: {
        type: Number, // number of new SKUs recently added
    },
    limited_edition_skus: {
        type: Number, // number of limited edition SKUs
    },
    most_popular_skus: {
        type: [String], // list of SKU names that are the best-sellers
    },
    assortment_depth: {
        type: String, // e.g., 'Broad', 'Narrow' (depending on variety)
    },
    sku_distribution: {
        type: String, // e.g., 'Even', 'Concentrated' across subcategories
    }
});

module.exports = mongoose.model('assortment_size', assortmentSizeSchema);
