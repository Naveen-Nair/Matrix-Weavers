const mongoose = require('mongoose');

const categorySalesGrowthSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    category_name: {
        type: String, // Category name (e.g., 'Mobiles', 'Laptops')
        required: true
    },
    year: {
        type: Number, // Year of sales growth
        required: true
    },
    sales_growth: {
        type: Number, // Sales growth in percentage
        required: true
    },
    total_sales: {
        type: Number, // Total sales in that category
    },
    currency: {
        type: String, // Currency (e.g., 'INR', 'USD')
    }
});

module.exports = mongoose.model('category_sales_growth', categorySalesGrowthSchema);
