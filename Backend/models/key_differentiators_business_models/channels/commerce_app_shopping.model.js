const mongoose = require('mongoose');

const socialCommerceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    app_name: {
        type: String, // Name of the shopping app
    },
    social_media_channels: {
        type: [String], // e.g., 'Instagram', 'Facebook', 'WhatsApp'
    },
    user_engagement: {
        type: Number, // Total number of likes/followers
    },
    platform_integration: {
        type: String, // e.g., 'Facebook Shops', 'Instagram Checkout'
    },
    influencer_partnerships: {
        type: Boolean, // true if influencers are used in marketing
        default: false
    },
    conversion_rate: {
        type: Number, // Conversion rate from social channels to sales
    },
    payment_integration: {
        type: [String], // e.g., 'Stripe', 'PayPal'
    },
    in_app_features: {
        type: [String], // e.g., 'Live Shopping', 'Flash Sales'
    },
    push_notifications: {
        type: Boolean, // true if the app sends notifications for deals
        default: true
    }
});

module.exports = mongoose.model('socialCommerce', socialCommerceSchema);
