const { Schema, model } = require('mongoose');
const ArticleSchema = new Schema({
    title: String,
    description: String,
    imageUrl: String
});

module.exports = model('article', ArticleSchema)